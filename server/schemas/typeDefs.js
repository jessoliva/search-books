 //~~ new
 
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String
        authors: [String]
        title: String
        description: String
        image: String
        link: String
    }

    input BookInfo {
        authors: [String]
        title: String!
        description: String!
        bookId: String!
        image: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: BookInfo): User
        removeBook(bookId: String): User
    }
`;

module.exports = typeDefs;