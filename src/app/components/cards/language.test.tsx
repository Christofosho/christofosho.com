import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Language from "./language";

import { LANGUAGE_CONTENT, LANGUAGE_HEADER } from "../../constants";

const renderLanguage = () => (render(<Language />));

describe("<Language />", () => {
  test("renders", () => {
    renderLanguage();
    expect(screen.getByText(LANGUAGE_HEADER)).toBeVisible();
    expect(screen.getByText(LANGUAGE_CONTENT)).not.toBeVisible();
  });

  test("clicking card swaps header and content visibility", async () => {
    renderLanguage();
    userEvent.click(screen.getByText(LANGUAGE_HEADER));
    await waitFor(() => {
      expect(screen.getByText(LANGUAGE_HEADER)).not.toBeVisible();
      expect(screen.getByText(LANGUAGE_CONTENT)).toBeVisible();
    });
  });
});