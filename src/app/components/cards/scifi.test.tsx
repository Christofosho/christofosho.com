import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import ScienceFiction from "./scifi";

import { SCIFI_CONTENT, SCIFI_HEADER } from "../../constants";

const renderScienceFiction = () => (render(<ScienceFiction />));

describe("<SciFi />", () => {
  test("renders", () => {
    renderScienceFiction();
    expect(screen.getByText(SCIFI_HEADER)).toBeVisible();
    expect(screen.getByText(SCIFI_CONTENT)).not.toBeVisible();
  });

  test("clicking card swaps header and content visibility", async () => {
    renderScienceFiction();
    userEvent.click(screen.getByText(SCIFI_HEADER));
    await waitFor(() => {
      expect(screen.getByText(SCIFI_HEADER)).not.toBeVisible();
      expect(screen.getByText(SCIFI_CONTENT)).toBeVisible();
    });
  });
});