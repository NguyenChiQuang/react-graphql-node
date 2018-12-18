const graphql = require('graphql')
const _ = require('lodash'); 
const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = graphql;

const books = [
    {id: '1', name: "abc", genre: "fantasy", authorId: "1"},
    {id: '2', name: "ádsadas", genre: "fantádasy", authorId: "2"},
    {id: '3', name: "abadsdasdc", genre: "fanádastasy", authorId: "3"},
];

const authors = [
    {id: '1', name: "quangnc", age: "20"},
    {id: '2', name: "ngocdt", age: "12"},
    {id: '3', name: "hangnt", age: "18"},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:() => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) { 
                console.log(parent)
                return _.find(authors, {id: parent.authorId}) 
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields:() => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: { 
            type: BookType,
            args: { id: {type: GraphQLID} },
            resolve(parent, args) {
                return _.find(books, {id: args.id})
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(authors, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})