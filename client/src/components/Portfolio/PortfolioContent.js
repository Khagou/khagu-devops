import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const PortfolioContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/images")
      .then((res) => setData(res.data));
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [tempdata, setTempData] = useState([]);

  const tempData = (image) => {
    setTempData(image);
    setIsOpen(true);
  };

  return (
    <div className="portfolio">
      <h2>Site vitrine réalisé pour une entreprise de pose d'adhésif</h2>
      <div className="adpose">
        {data.map((images, index) => (
          <li key={index} className="image">
            <img
              src={images.chemin}
              alt={images.name}
              onClick={() => tempData(images)}
              // onChange={() => setPicture(images)}
            />

            <Modal
              open={isOpen}
              onClose={() => setIsOpen(false)}
              image={tempdata}
            ></Modal>
          </li>
        ))}
      </div>
    </div>
  );
};

export default PortfolioContent;
