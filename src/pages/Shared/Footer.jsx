import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p className="text-center">
        <Link to="register">Register</Link>
        <small>copyright of @2023</small>
      </p>
    </div>
  );
};

export default Footer;
