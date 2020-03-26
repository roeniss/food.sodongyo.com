import React from "react";
import { Navbar, /* Button */ } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar fixed="bottom" bg="secondary" variant="footer" className="justify-content-center">
        <span className="disclaimer">
          <i>
            본 사이트의 모든 리뷰는 별도의 혜택을 제공받지 않았으며, 맛게살은 비영리 프로젝트입니다.
          </i>
          <br />
          <a href="https://github.com/roeniss/food.sodongyo.com" className="no-hover-color">
            맛동요&nbsp;
          </a>
          :: All Rights Reserved.
        </span>
      </Navbar>
    </>
  );
};

export default Footer;
