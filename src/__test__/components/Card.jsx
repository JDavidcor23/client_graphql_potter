import React from "react";

export const Card = ({ character }) => {
  return (
    <div key={character?._id} className="card">
      <h3>Name: {character?.name}</h3>
      <p>Status: {character?.isAlive ? "Alive" : "Dead"}</p>
      <img src={character?.img} alt={character?.name} />
      <button className="button button-delete">Delete</button>
      <button className="button">Change Status</button>
    </div>
  );
};
