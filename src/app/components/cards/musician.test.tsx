import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Musician from "./musician";

import { MUSICIAN_CONTENT, MUSICIAN_HEADER } from "../../constants";

const renderMusician = () => (render(<Musician />));

describe("<Musician />", () => {
  test("renders", () => {
    renderMusician();
    expect(screen.getByText(MUSICIAN_HEADER)).toBeVisible();
    expect(screen.getByText(MUSICIAN_CONTENT)).not.toBeVisible();
  });

  test("clicking card swaps header and content visibility", async () => {
    renderMusician();
    userEvent.click(screen.getByText(MUSICIAN_HEADER));
    await waitFor(() => {
      expect(screen.getByText(MUSICIAN_HEADER)).not.toBeVisible();
      expect(screen.getByText(MUSICIAN_CONTENT)).toBeVisible();
    });
  });
});