import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-black text-white">
    <div className="text-xl font-semibold">
      Civtone Design & Construction
    </div>
    <div className="space-x-4">
      <Link to="/" className="hover:text-yellow-500">Home</Link>
      <Link to="/about" className="hover:text-yellow-500">About</Link>
      <Link to="/services" className="hover:text-yellow-500">Services</Link>
      <Link to="/portfolio" className="hover:text-yellow-500">Portfolio</Link>
      <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
