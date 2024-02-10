import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../src/components/Navigation"; // Assurez-vous que le chemin d'importation est correct

test("navigates to /portfolio when Portfolio link is clicked", () => {
  const { getByText } = render(
    <Router>
      <Navigation />
    </Router>
  );

  fireEvent.click(getByText("Portfolio"));

  expect(window.location.pathname).toBe("/portfolio");
});
