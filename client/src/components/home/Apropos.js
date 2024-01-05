import axios from "axios";
import React, { useEffect, useState } from "react";

const Apropos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/article")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="AproposArea">
      {/* Les images importe avec balises img sont accessible depuis public */}
      <img src="./images/isolated-g01e498436_1920.png" alt="devops-circle" />
      <div className="Apropos" id="Apropos">
        <h4>A propos de moi</h4>
        {data
          .filter((article) => article.name.includes("about"))
          .map((article) => (
            <div className="About"> {article.contenu} </div>
          ))}
      </div>
    </div>
  );
};

export default Apropos;
