import React from "react";
import { Link } from "react-router-dom";
import logo from "../pictures/logo.jpg";

const Header = () => {
  return (
    <div className="flex justify-between m-4">
      <img src={logo} alt="" className="w-1/12" />
      <nav className="flex gap-5 text-2xl font-medium items-center">
        <Link to="/">
          <button className="hover:bg-fuchsia-50 hover:rounded-lg hover:drop-shadow-md p-3">
            Home
          </button>
        </Link>
        <Link to="/why-shelly">
          <button className="hover:bg-fuchsia-50 hover:rounded-lg hover:drop-shadow-md p-3">
            Why Shelly
          </button>
        </Link>
        <Link to="/contact-me">
          <button className="hover:bg-fuchsia-50 hover:rounded-lg hover:drop-shadow-md p-3">
            Contact Me
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
