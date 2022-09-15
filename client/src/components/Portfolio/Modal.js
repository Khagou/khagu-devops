import React from "react";
import ReactDom from "react-dom";

const Modal = ({ open, children, onClose, image }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <button onClick={onClose}>
          <p>&#10539;</p>
        </button>
        <img className="modalImg" src={image.chemin} alt={image.name} />
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
