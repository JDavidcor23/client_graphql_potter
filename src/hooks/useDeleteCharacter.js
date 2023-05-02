import { useMutation } from "@apollo/client";
import React from "react";
import { deleteCharacter } from "../mutation/index.js";
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
