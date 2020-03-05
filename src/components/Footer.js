import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { locations } from "../resources/data/mapdata.json";

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
        <Button variant="primary">총 {locations.length}개</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
      </Navbar>
    </>
  );
};

export default Footer;
