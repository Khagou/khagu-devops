import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../../styles/index.scss";

// Trie des techs en fonction du filtre
// Ajout active sur filtre sélectionné
const Skills = () => {
  const [data, setData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = [
    "database",
    "back-end",
    "front-end",
    "versionning",
    "CI/CD",
    "infra as code",
    "création vectorielle",
    "conteneurisation",
    "cloud",
  ];

  // Le useEffect ce joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/tech")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="skills">
      <div className="title">
        <h5>Skills</h5>
      </div>
      <div className="filtres">
        {radios.map((typeTech, index) => (
          <li key={index}>
            <input
              type="radio"
              id={typeTech}
              name="typeTech"
              className="typeTech"
              onChange={(e) => setSelectedRadio(e.target.id)}
            />

            <label
              htmlFor={typeTech}
              className={selectedRadio === typeTech ? "checked" : ""}
            >
              {typeTech}
            </label>
          </li>
        ))}
      </div>
      <div className="list">
        {data
          .filter((tech) => tech.techType.includes(selectedRadio))
          .map((tech, index) => (
            <Card key={index} tech={tech} />
          ))}
      </div>
    </div>
  );
};

export default Skills;
