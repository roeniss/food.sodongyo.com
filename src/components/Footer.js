import React from "react";
import { Navbar, Button } from "react-bootstrap";
import MarkerController from "../lib/MarkerController";

const Footer = () => {
  return (
    <>
      <style type="text/css">
        {`
        .navbar-footer {
          padding: 10px 5px;
        }
        `}
      </style>

      <Navbar fixed="bottom" bg="light" variant="footer" className="justify-content-between">
        <Button variant="primary">총 {MarkerController.locations.length}개</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
      </Navbar>
    </>
  );
};

export default Footer;
