import { gql } from "@apollo/client";

export const getCharacters = gql`
  query {
    characters {
      _id
      name
      img
      isAlive
    }
  }
`;
