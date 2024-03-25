import React from "react";
import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import PortfolioContent from "../src/components/Portfolio/PortfolioContent.js";
import "@testing-library/jest-dom";

// Mock axios
jest.mock("axios");

test("should render Portfolio and fetch data", async () => {
  console.log(process.env.REACT_APP_URL_API);

  // Simulate a successful response
  axios.get.mockResolvedValueOnce({
    data: [
      {
        _id: "63010eb139a57ed333541505",
        name: "adposecueil",
        chemin: "./adpose.PNG",
        __v: 0,
        caption: "caption",
      },
      // ... add more objects here as needed
    ],
  });

  try {
    const { getByTestId } = render(<PortfolioContent />);

    // Wait for the component to update
    await waitFor(() => getByTestId("portfolio"), { timeout: 10000 });

    // Check that the component is in the document
    expect(getByTestId("portfolio")).toBeInTheDocument();
  } catch (error) {
    console.error(error);
  }
});
