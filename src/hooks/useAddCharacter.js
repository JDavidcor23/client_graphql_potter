import React, { useState } from "react";
import { addCharacter, getCharacters } from "../query/index.js";
import { useMutation } from "@apollo/client";

export const useAddCharacter = () => {
  const [addCharacterQuery, { loading }] = useMutation(addCharacter, {
    refetchQueries: [{ query: getCharacters }],
  });

  const [form, setForm] = useState({
    name: "",
    img: "",
    isAlive: true,
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    addCharacterQuery({
      variables: {
        ...form,
        isAlive: JSON.parse(form.isAlive),
      },
    });
    e.target.reset();
  };
  return { onSubmit, onChange, loading };
};
