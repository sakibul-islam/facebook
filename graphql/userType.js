const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const {postType} = require('./postType');
const {Post} = require('../models/posts')

const userType = new GraphQLObjectType({
	name: "User",
	description: "A user's profile",
	fields: {
		displayName: { type: GraphQLString },
		photoURL: { type: GraphQLString },
		userName: { type: GraphQLString },
		nickName: { type: GraphQLString },
		photos: {
			type: GraphQLList(GraphQLString),
		},
		bio: { type: GraphQLString },
		born: { type: GraphQLString },
		posts: {
			type: GraphQLList(postType),
			description: "Return posts",
			resolve: async () => await Post.find().sort({time: 'desc'}),
		}
	},
});

module.exports = {userType}