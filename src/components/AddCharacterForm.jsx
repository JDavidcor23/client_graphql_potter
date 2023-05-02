import React, { useEffect } from "react";
import { useAddCharacter } from "../hooks/useAddCharacter.js";

export const AddCharacterForm = () => {
  const { onSubmit, onChange, loading, name, img, isAlive } = useAddCharacter();
  return (
    <div className="container-form">
      <h1>Add a new character</h1>
      <form action="" onSubmit={onSubmit} className="container-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          onChange={onChange}
          value={name}
        />
        <input
          type="text"
          placeholder="Image"
          name="img"
          required
          onChange={onChange}
          value={img}
        />
        <select name="isAlive" id="" onChange={onChange} value={isAlive}>
          <option value="true">Alive</option>
          <option value="false">Dead</option>
        </select>
        <button
          type={"submit"}
          disabled={loading}
          className={loading ? "disabled" : ""}
        >
          Send
        </button>
      </form>
    </div>
  );
};
