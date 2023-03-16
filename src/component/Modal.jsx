import React, { useState, useEffect } from "react";

const Modal = ({ show, handleClose, children }) => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    if (show) {
      setAnimation("slide-in");
    } else {
      setAnimation("slide-out");
      setTimeout(() => {
        setAnimation("");
      }, 250);
    }
  }, [show]);

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className={`modal-main ${animation}`}>
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
