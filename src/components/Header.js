import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="xl" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">맛게살</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
