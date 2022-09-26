import React from "react";

const Presentation = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("./images/CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.target = "_blank";
        alink.click();
      });
    });
  };
  return (
    <div className="presentation">
      <h2>Bienvenue chez khagu-dev</h2>
      <h3>Développeur web junior</h3>
      <ul>
        <li className="cv" onClick={onButtonClick}>
          <p>voir mon CV</p>
        </li>
      </ul>
      <a href="#Apropos" className="arrow">
        <img src="./images/fleche.png" alt="fleche down" width={50} />
      </a>
    </div>
  );
};

export default Presentation;
