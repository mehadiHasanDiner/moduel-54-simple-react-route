import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/friends">Friends</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
    </nav>
  );
};

export default Header;
