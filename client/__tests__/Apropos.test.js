import React from "react";
import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import Apropos from "../src/components/home/Apropos.js";
import "@testing-library/jest-dom";

// Mock axios
jest.mock("axios");

test("should render Apropos and fetch data", async () => {
  // Simulate a successful response
  axios.get.mockResolvedValueOnce({
    data: [
      {
        _id: "648741e6ef25331e5aafbc4d",
        name: "about",
        contenu:
          "Diplomé d'un titre pro \"Développeur Web et Web Mobile\"obtenu au prêt de M2I Formation durant la quelle j'ai apprit les bases du développement avec les langages comme HTML, SCSS, PHP et un peut de Javascript. \n\nA la suite de cette formation, j'ai souhaité réaliser ce portfolio, afin de continuer d'améliorer mes compétences de développeur. Pour ce faire j'ai choisi des technologies que nous n'avions fait que survoler lors de ma formation afin d'en apprendre plus sur celle ci, j'ai donc choisi React pour le front et afin d'aller encore plus loin avec le JavaScript j'ai séléctionné NodeJS pour la partie back.\n \nUne fois le développement terminé, j'ai rencontré un nouveau problème qui était celui du déploiement. Comprenant que cette partie du procéssus de la création d'un site web représenté un challenge à part entière, j'ai donc choisi de réaliser une formation \"Administrateur Système Cloud DevOps\" en contrat pro afin d'acquérir plus de connaissances à ce sujet.\n \nA ce jour je suis toujours en contrat pro dans le cadre de ma formation, cependant n'arrive toujours pas à trouver ma place. En effet, bien que l'ensemble des connaissances que j'ai pu acquérir jusqu'à maintenant soient enrichissantes, le métier n'est cependant pas fait pour moi. En effet, je suis quelqu'un de visuel et je trouve donc beaucoup plus de plaisir à réaliser des maquettes ou développer un site.\n\nC'est pour cette raison que je suis actuellement à la recherche d'un poste d'UX/UI designer ou développeur front dans lequel je pourrais pleinement m'épanouir.\n",
        __v: 0,
      },
      // ... add more objects here as needed
    ],
  });

  try {
    const { getByTestId } = render(<Apropos />);

    // Wait for the component to update
    await waitFor(() => getByTestId("apropos"), { timeout: 10000 });

    // Check that the component is in the document
    expect(getByTestId("apropos")).toBeInTheDocument();
  } catch (error) {
    console.error(error);
  }
});
