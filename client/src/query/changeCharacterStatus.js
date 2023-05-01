import { gql } from "@apollo/client";

export const changeCharacterStatus = gql`
  mutation changeCharacterStatus($name: String!, $isAlive: Boolean!) {
    changeCharacterStatus(name: $name, isAlive: $isAlive) {
      _id
      name
      img
      isAlive
    }
  }
`;
