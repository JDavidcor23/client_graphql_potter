import React, { useEffect } from "react";
import { useAddCharacter } from "../hooks/useAddCharacter";

export const AddCharacterForm = () => {
  const { onSubmit, onChange, loading } = useAddCharacter();
  return (
    <div className="container-form">
      <h1>Form</h1>
      <form action="" onSubmit={onSubmit} className="container-form">
        <input type="text" placeholder="Name" name="name" onChange={onChange} />
        <input type="text" placeholder="Image" name="img" onChange={onChange} />
        <select name="isAlive" id="" onChange={onChange}>
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
