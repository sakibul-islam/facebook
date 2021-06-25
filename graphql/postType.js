const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const {userType} = require('./userType');
const {postBodyType, reactionsType, commentType} = require('./root-schema');

const postType = new GraphQLObjectType({
	name: "post",
	description: "Return a single post",
	fields: {
		id: { type: GraphQLString, resolve: (parent) => parent._id},
		time: { type: GraphQLString},
		body: {
      type: postBodyType,
    },
		userName: { type: GraphQLString },
		user: {
			type: userType,
			description: "Return a user profile",
			resolve: (parent) => profiles[parent.userName],
		},
		reactions: {
			type: reactionsType,
			description: "All the reactions the post got"
		},
		comments: {
			type: GraphQLList(commentType)
		}
	},
});

module.exports = {postType}