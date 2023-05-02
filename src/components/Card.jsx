import React from "react";
import { useDeleteCharacter } from "../hooks/useDeleteCharacter.js";
import { useChangeCharacterStatus } from "../hooks/useChangeCharacterStatus.js";

export const Card = ({ character }) => {
  const { onClick } = useDeleteCharacter();
  const { onClickChangeStatus } = useChangeCharacterStatus();
  return (
    <div key={character?._id} className="card">
      <h3>Name: {character?.name}</h3>
      <p>Status: {character?.isAlive ? "Alive" : "Dead"}</p>
      <img src={character?.img} alt={character?.name} />
      <button
        className="button button-delete"
        onClick={() => onClick(character?.name)}
      >
        Delete
      </button>
      <button
        className="button"
        onClick={() => onClickChangeStatus(character?.name, character?.isAlive)}
      >
        Change Status
      </button>
    </div>
  );
};
