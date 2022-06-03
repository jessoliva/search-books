import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
    mutation createUser($username: String!, email: String!, password: String!) {
      createUser(username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
        }
      }
    }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!) {
    saveBook(bookId: $bookId) {
      username
      bookCount
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      user {
        username
        savedBooks
      }
    }
  }
`;
