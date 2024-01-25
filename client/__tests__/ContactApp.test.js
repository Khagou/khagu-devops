import React from "react";
import render from "react-test-render";
import axios from "axios";
import ContactForm from "./ContactForm";

jest.mock("axios");

test("should send the form data and show success message", async () => {
  axios.post.mockResolvedValue({});

  const { getByLabelText, getByText, getByRole } = render(<ContactForm />);

  fireEvent.change(getByLabelText(/Nom/i), { target: { value: "Dupont" } });
  fireEvent.change(getByLabelText(/Prénom/i), { target: { value: "Jean" } });
  fireEvent.change(getByLabelText(/Email/i), {
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
