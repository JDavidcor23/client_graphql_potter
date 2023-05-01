import { gql } from "@apollo/client";

export const deleteCharacter = gql`
  mutation deleteCharacterQuery($name: String!) {
    deleteCharacter(name: $name)
  }
`;
