import React, { useState, useEffect } from "react";
import Logo from "../assets/svg/Logo.svg";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200000);
  }, []);

  return (
    <div className={`preloader-container ${loading ? "loading" : ""}`}>
      <img
        className={`logo ${loading ? "" : "visible"}`}
        src={Logo}
        alt="Logo"
      />
      <div className="progress-bar">
        <div className="progress" />
      </div>
    </div>
  );
};

export default Preloader;
