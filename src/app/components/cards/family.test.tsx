import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Family from "./family";

import { FAMILY_CONTENT, FAMILY_HEADER } from "../../constants";

const renderFamily = () => (render(<Family />));

describe("<Family />", () => {
  test("renders", () => {
    renderFamily();
    expect(screen.getByText(FAMILY_HEADER)).toBeVisible();
    expect(screen.getByText(FAMILY_CONTENT)).not.toBeVisible();
  });

  test("clicking card swaps header and content visibility", async () => {
    renderFamily();
    userEvent.click(screen.getByText(FAMILY_HEADER));
    await waitFor(() => {
      expect(screen.getByText(FAMILY_HEADER)).not.toBeVisible();
      expect(screen.getByText(FAMILY_CONTENT)).toBeVisible();
    });
  });
});