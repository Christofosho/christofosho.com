import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Software from "./software";

import { SOFTWARE_CONTENT, SOFTWARE_HEADER } from "../../constants";

const renderSoftware = () => (render(<Software />));

describe("<Software />", () => {
  test("renders", () => {
    renderSoftware();
    expect(screen.getByText(SOFTWARE_HEADER)).toBeVisible();
    expect(screen.getByText(SOFTWARE_CONTENT)).not.toBeVisible();
  });

  test("clicking card swaps header and content visibility", async () => {
    renderSoftware();
    userEvent.click(screen.getByText(SOFTWARE_HEADER));
    await waitFor(() => {
      expect(screen.getByText(SOFTWARE_HEADER)).not.toBeVisible();
      expect(screen.getByText(SOFTWARE_CONTENT)).toBeVisible();
    });
  });
});