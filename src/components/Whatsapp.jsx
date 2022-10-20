import React from "react";
import Whats from "../assets/media/whatsapp.svg"

const Whatsapp = () => {
  return (
    <div className="FloatIcon-Wh">
      <a
      className="FloatIcon"
        style={{ color: "#ffff" }}
        href="https://wa.me/542214955544"
        target={"blank"}
      >
        <img src={Whats} alt="whatsapp" />
      </a>
    </div>
  );
};

export default Whatsapp;