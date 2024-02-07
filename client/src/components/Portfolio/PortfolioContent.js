import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const PortfolioContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("34.38.73.48:7000/api/images").then((res) => setData(res.data));
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [tempdata, setTempData] = useState([]);

  const tempData = (image) => {
    setTempData(image);
    setIsOpen(true);
  };

  return (
    <div className="portfolio">
      <h2>Site vitrine réalisé pour une entreprise de pose d&apos;adhésif</h2>
      <div className="adpose" data-testid="portfolio">
        {data.map((images, index) => (
          <li key={index} className="image">
            <img
              src={images.chemin}
              alt={images.name}
              onClick={() => tempData(images)}
              // onChange={() => setPicture(images)}
            />
          </li>
        ))}
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          image={tempdata}
        ></Modal>
      </div>
    </div>
  );
};

export default PortfolioContent;
