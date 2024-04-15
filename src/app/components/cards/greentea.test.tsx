import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import GreenTea from "./greentea";

import { GREENTEA_CONTENT, GREENTEA_HEADER } from "../../constants";

const renderGreenTea = () => (render(<GreenTea />));

describe("<GreenTea />", () => {
  test("renders", () => {
    renderGreenTea();
    expect(screen.getByText(GREENTEA_HEADER)).toBeVisible();
    expect(screen.getByText(GREENTEA_CONTENT)).not.toBeVisible();
  });

  test("clicking card swaps header and content visibility", async () => {
    renderGreenTea();
    userEvent.click(screen.getByText(GREENTEA_HEADER));
    await waitFor(() => {
      expect(screen.getByText(GREENTEA_HEADER)).not.toBeVisible();
      expect(screen.getByText(GREENTEA_CONTENT)).toBeVisible();
    });
  });
});