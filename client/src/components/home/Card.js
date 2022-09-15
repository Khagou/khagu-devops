import React from "react";

const Card = ({ tech }) => {
  return (
    <div className="card">
      <img width={200} src={tech.image} alt={"logo " + tech.techName} />
    </div>
  );
};

export default Card;
