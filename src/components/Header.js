import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="xl" bg="primary" variant="dark" fixed="top" className="header">
      <Navbar.Brand href="/" class="text-white">
        맛동요 <span className="hide-on-overflow">:: 맛게살의 동선 요기있네 </span> 🍕🍗🍺
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#">필터링</Nav.Link>
          <Nav.Link href="#">리뷰 등록하기</Nav.Link>
          <Nav.Link href="#">개발자에게 메시지 보내기</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
