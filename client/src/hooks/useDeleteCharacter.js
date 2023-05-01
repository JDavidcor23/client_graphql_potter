import { useMutation } from "@apollo/client";
import React from "react";
import { deleteCharacter } from "../query/deletCharacter";
import { getCharacters } from "../query";

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
