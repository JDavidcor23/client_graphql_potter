import React, { useState } from "react";
import { getCharacters } from "../query/index.js";
import { addCharacter } from "../mutation/index.js";
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
  const { name, img, isAlive } = form;
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addCharacterQuery({
      variables: {
        ...form,
        isAlive: JSON.parse(form.isAlive),
      },
    });
    setForm({
      name: "",
      img: "",
      isAlive: true,
    });
  };
  return { onSubmit, onChange, loading, name, img, isAlive };
};
