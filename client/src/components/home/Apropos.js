import axios from "axios";
import React, { useEffect, useState } from "react";

const Apropos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_URL_API);
    axios
      .get(process.env.REACT_APP_URL_API + "/article")
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
            <div className="About" key={article.id} data-testid="apropos">
              {article.contenu}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Apropos;
