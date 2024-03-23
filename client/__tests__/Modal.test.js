import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor
} from "@testing-library/react";
import PortfolioContent from "../src/components/Portfolio/PortfolioContent.js";
import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        _id: "63010eb139a57ed333541505",
        name: "adposeAccueil",
        chemin: "./images/adpose.PNG",
        __v: 0,
        caption: "caption",
      },
    ])
  );
});

beforeEach(() => {
  const portal = document.createElement("div");
  portal.setAttribute("id", "portal");
  document.body.appendChild(portal);
});

afterEach(() => {
  const portal = document.getElementById("portal");
  if (portal) {
    document.body.removeChild(portal);
  }
});

test("should open the modal when an image is clicked", async () => {
  const { findByAltText, findByTestId } = render(<PortfolioContent />);
  const image = await waitFor(() => findByAltText("adposeAccueil"));
  const modal = await findByTestId("portfolio");
  fireEvent.click(image);
  expect(modal).toBeInTheDocument();
});

test("should close the modal when the close button is clicked", async () => {
  const { findByAltText, findByTestId } = render(<PortfolioContent />);
  const image = await waitFor(() => findByAltText("adposeAccueil"));
  fireEvent.click(image);

  const closeButton = await findByTestId("closeButton");
  fireEvent.click(closeButton);

  // await waitForElementToBeRemoved(() => findByTestId("closeButton"));

  expect(closeButton).not.toBeInTheDocument();
});
