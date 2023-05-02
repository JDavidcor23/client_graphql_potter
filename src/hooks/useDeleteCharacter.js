import { useMutation } from "@apollo/client";
import React from "react";
import { deleteCharacter } from "../query/deletCharacter.js";
import { getCharacters } from "../query/index.js";

export const useDeleteCharacter = () => {
  const [deleteCharacterQuery] = useMutation(deleteCharacter, {
    refetchQueries: [{ query: getCharacters }],
  });

  const onClick = (name) => {
    deleteCharacterQuery({
      variables: {
        name,
      },
    });
  };

  return { onClick };
};
