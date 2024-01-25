import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import axios from "axios";
import ContactForm from "../src/components/contact/ContactForm.js";
import "@testing-library/jest-dom";

jest.mock("axios");

test("should send the form data and show success message", async () => {
  axios.post.mockResolvedValue({});

  const { getByLabelText, getByText, getByRole, getByTestId } = render(
    <ContactForm />
  );

  fireEvent.change(getByTestId("nom-input"), { target: { value: "Dupont" } });
  fireEvent.change(getByTestId("prenom-input"), { target: { value: "Jean" } });
  fireEvent.change(getByTestId("email-input"), {
    target: { value: "jean.dupont@example.com" },
  });
  fireEvent.change(getByLabelText(/Message/i), {
    target: { value: "Bonjour, ceci est un test." },
  });

  fireEvent.click(getByRole("button", { name: /envoyer/i }));

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith("/send_mail", {
      nom: "Dupont",
      prenom: "Jean",
      mail: "jean.dupont@example.com",
      text: "Bonjour, ceci est un test.",
    });
  });

  expect(getByText(/Email Envoyé/i)).toBeInTheDocument();
});
