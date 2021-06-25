const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
} = require("graphql");
// const {
// 	profiles,
// 	profileArr,
// 	friendRequests,
// 	friendSuggestions,
// } = require("../profilesObj");
const Post = require("../models/posts");
const User = require("../models/users");
const {dbConnect} = require("../utils/dbConnect");

dbConnect()

async function test() {
	// profileArr.forEach(profile => {
	// 	const {displayName, userName, nickName, photoURL, photos, bio, born} = profile
	// 	const user = new User({
	// 		displayName, userName, nickName, photoURL, photos, bio, born
	// 	})
	// 	user.save()
	// })
	// const userName = "harry"
	// console.log(await User.find({"userName" : userName}))
}
// test();

const userType = new GraphQLObjectType({
	name: "User",
	description: "A user's profile",
	fields: {
		displayName: { type: GraphQLString },
		photoURL: { type: GraphQLString },
		userName: { type: GraphQLString },
		nickName: { type: GraphQLString },
		followers: { type: GraphQLInt },
		photos: {
			type: GraphQLList(GraphQLString),
		},
		bio: { type: GraphQLString },
		born: { type: GraphQLString },
	},
});

const reactionsType = new GraphQLObjectType({
	name: "Reactions",
	fields: {
		like: { type: GraphQLInt },
		haha: { type: GraphQLInt },
		love: { type: GraphQLInt },
		wow: { type: GraphQLInt },
		care: { type: GraphQLInt },
		sad: { type: GraphQLInt },
		angry: { type: GraphQLInt },
	},
});

const commentType = new GraphQLObjectType({
	name: "comment",
	fields: {
		userName: { type: GraphQLString },
		user: {
			type: userType,
			resolve: async (parent) => {
				const user = await User.find({ userName: parent.userName });
				// console.log(user);
				return user[0];
			},
		},
		body: { type: GraphQLString },
		id: { type: GraphQLString, resolve: (parent) => parent._id },
	},
});

const postBodyType = new GraphQLObjectType({
	name: "postBody",
	fields: {
		caption: { type: GraphQLString },
		photoURL: { type: GraphQLString },
		videoURL: { type: GraphQLString },
	},
});

const postType = new GraphQLObjectType({
	name: "post",
	description: "Return a single post",
	fields: {
		id: { type: GraphQLString, resolve: (parent) => parent._id },
		time: { type: GraphQLString },
		body: {
			type: postBodyType,
		},
		userName: { type: GraphQLString },
		user: {
			type: userType,
			description: "Return a user profile",
			resolve: async (parent) => {
				const user = await User.find({ userName: parent.userName });
				// console.log(user[0]);
				return user[0];
			},
		},
		reactions: {
			type: reactionsType,
			description: "All the reactions the post got",
		},
		comments: {
			type: GraphQLList(commentType),
		},
	},
});

const rootQueryType = new GraphQLObjectType({
	name: "Query",
	description: "All the query",
	fields: {
		posts: {
			type: GraphQLList(postType),
			description: "Return posts",
			resolve: async () => await Post.find().sort({ time: "desc" }),
		},
		videos: {
			type: GraphQLList(postType),
			description: "Return posts",
			resolve: async () =>
				await Post.find({ "body.videoURL": { $exists: true } }).sort({
					time: "desc",
				}),
		},
		users: {
			type: GraphQLList(userType),
			description: "A list of all users",
			resolve: () => User.find(),
		},
		user: {
			type: userType,
			description: "Return a single user",
			args: {
				userName: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve: async (parent, { userName }) => {
				const user = await User.find({ userName: userName });
				// console.log(user[0]);
				return user[0];
			},
		},
		friendRequests: {
			type: GraphQLList(userType),
			description: "People who sent friend request",
			resolve: async () => {
				const users = await User.find({ userName: { $all: ["harry", "ron"] } });
				// console.log(typeof(users))
				return users;
			},
		},
		friendSuggestions: {
			type: GraphQLList(userType),
			description: "People You may know",
			resolve: () => User.find(),
		},
	},
});

const rootMutationType = new GraphQLObjectType({
	name: "Mutation",
	description: "All the mutation",
	fields: () => ({
		addPost: {
			type: postType,
			description: "Create a new post",
			args: {
				userName: { type: GraphQLNonNull(GraphQLString) },
				caption: { type: GraphQLString },
			},
			resolve: (parent, { userName, caption }) => {
				const post = new Post({
					userName,
					body: {
						caption,
					},
				});
				// console.log(post.save().then(console.log));
				post.save().then(console.log)
				return post;
			},
		},
		// addComment: {
		// 	type: GraphQLString,
		// 	description: "Write a comment",
		// 	args: {
		// 		postId: GraphQLString,
		// 		comment: GraphQLString
		// 	},
		// 	resolve: (parent, {postId, comment}) => {
		// 		console.log({postId, comment})
		// 		return comment
		// 	}
		// }
		addComment: {
			type: postType,
			description: "Create a new post",
			args: {
				postID: { type: GraphQLNonNull(GraphQLString) },
				userName: { type: GraphQLString },
				comment: { type: GraphQLString },
			},
			resolve: (parent, { postID, userName, comment }) => {
				const post = Post.findByIdAndUpdate(postID, {
					$push: { comments: [{ userName, body: comment }] },
				}, {new: true});
				// console.log(post);
				return post;
			},
		},
	}),
});

const rootSchema = new GraphQLSchema({
	query: rootQueryType,
	mutation: rootMutationType,
});

module.exports = { rootSchema };
