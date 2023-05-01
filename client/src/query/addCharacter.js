import { gql } from "@apollo/client";

export const addCharacter = gql`
  mutation addCharacterQuery(
    $name: String!
    $img: String!
    $isAlive: Boolean!
  ) {
    addCharacter(name: $name, img: $img, isAlive: $isAlive) {
      _id
      name
      img
      isAlive
    }
  }
`;
