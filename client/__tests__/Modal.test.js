import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor
} from "@testing-library/react";
import PortfolioContent from "../src/components/Portfolio/PortfolioContent.js";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import "@testing-library/jest-dom";

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

beforeEach(() => {
  // Mock any GET request to /images
  // arguments for reply are (status, data, headers)
  mock.onGet(process.env.REACT_APP_URL_API + "/images").reply(200, [
    {
      _id: "63010eb139a57ed333541505",
      name: "adposeAccueil",
      chemin: "./images/adpose.PNG",
      __v: 0,
      caption: "caption",
    },
  ]);
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
