import React, { useState, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import FilterModal from "./modals/FilterModal";

const Header = () => {
  const [modalShow, setModalShow] = useState(null);
  const filterModalBtn = useRef(null);

  const showFilterModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    filterModalBtn.current.blur();
    setModalShow(true);
  };

  const openTBDAlert = () => {
    alert("삐빅! 맛게살이 제대한 후에 개발될 기능입니다.");
  };

  const openEmailApp = () => {
    alert("'sodongyocs@gmail.com'로 메일을 보내주세요.");
    const tab = window.open("mailto:sodongyocs@gmail.com", "_blank");
    tab.focus();
  };

  return (
    <Navbar expand="xl" bg="primary" variant="dark" fixed="top" className="header">
      <Navbar.Brand href="/" className="text-white">
        맛동요 <span className="hide-on-overflow">:: 맛게살의 동선 요기있네 </span> 🍕🍗🍺
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#" ref={filterModalBtn} onClick={showFilterModal}>
            메뉴 골라보기
          </Nav.Link>
          <Nav.Link href="#" onClick={openTBDAlert}>
            리뷰 등록하기
          </Nav.Link>
          <Nav.Link href="#" onClick={openEmailApp}>
            개발자에게 메일 보내기
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {modalShow ? <FilterModal show={!!modalShow} onHide={() => setModalShow(null)} /> : null}
    </Navbar>
  );
};

export default Header;
