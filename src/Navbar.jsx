import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-3 justify-center items-center">
        <Link to="/">Home</Link>
        <Link to="/preview">Preview</Link>
        <Link to="/user">User</Link>
      </ul>
    </div>
  );
};
