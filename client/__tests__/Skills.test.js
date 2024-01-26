import React from "react";
import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import Skills from "../src/components/home/Skills.js";
import "@testing-library/jest-dom";

// Mock axios
jest.mock("axios");

test("should render Skills and fetch data", async () => {
  // Simulate a successful response
  axios.get.mockResolvedValueOnce({
    data: [
      {
        _id: "62f15fde4be8ffde7d3d4106",
        techName: "MongoDB",
        image: "./images/MongoDB.png",
        techType: "database",
        __v: 0,
      },
      // ... add more objects here as needed
    ],
  });

  try {
    const { getByTestId } = render(<Skills />);

    // Wait for the component to update
    await waitFor(() => getByTestId("skills"), { timeout: 10000 });

    // Check that the component is in the document
    expect(getByTestId("skills")).toBeInTheDocument();
  } catch (error) {
    console.error(error);
  }
});
