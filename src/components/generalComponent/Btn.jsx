import React from "react";
import { Link } from "react-router-dom";
import "./btn.css";

export const RegBtn = ({ value, path }) => {
  return (
    <div>
      <Link  className="regBtn m-2 bg-white p-3 " to={path}>{value}</Link>
    </div>
  );
};

export const SubmistBtn = ({ value }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <input
      className="submitBtn"
      type="submit"
      value={value}
      onClick={handleClick}
    />
  );
};
