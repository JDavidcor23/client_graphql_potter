import React from "react";
import { config } from "../../jest.config.js";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./components/Card.jsx";

describe("Card", () => {
  const character = {
    _id: "123",
    name: "Jon Snow",
    isAlive: true,
    img: "https://via.placeholder.com/150",
  };

  const onClick = jest.fn();
  const onClickChangeStatus = jest.fn();

  render(
    <Card
      key={character?._id}
      character={character}
      onClick={onClick}
      onClickChangeStatus={onClickChangeStatus}
    />
  );

  it("renders the character name", () => {
    expect(screen.getByText("Name: Jon Snow")).toBeInTheDocument();
  });
});
