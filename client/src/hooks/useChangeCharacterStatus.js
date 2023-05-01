import React from "react";
import { changeCharacterStatus } from "../query/changeCharacterStatus";
import { useMutation } from "@apollo/client";
import { getCharacters } from "../query";

export const useChangeCharacterStatus = () => {
  const [changeCharacterStatusQuery] = useMutation(changeCharacterStatus, {
    refetchQueries: [{ query: getCharacters }],
  });

  const onClickChangeStatus = (name, isAlive) => {
    changeCharacterStatusQuery({
      variables: {
        name,
        isAlive,
      },
    });
  };
  return { onClickChangeStatus };
};
