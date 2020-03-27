import React from "react";
import { Modal, Card, Button, Image, Container, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { getAppName } from "../../lib/helper";

const SingleItemModal = (props) => {
  console.log("[SingleItemModal] current props :", props.data);

  const { id, name, location, link, description, _geolocation } = props.data;

  const goto = (url, fallback) => {
    var script = document.createElement('script');
    script.onload = function () {
      window.open(url, "_blank");
    }
    script.onerror = function () {
      window.open(fallback, "_blank");
    }
    script.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  const openSsodam = (link) => window.open(`http://ssodam.com/content/${link}`, "_blank");
  const openNaver = () => goto(`nmap://search?query=${encodeURIComponent(location)}&appname=${getAppName()}`,
    `https://map.naver.com/v5/search/${encodeURIComponent(location)}&appname=${getAppName()}`)
  const openKakao = () => goto(`daummaps://search?query=${encodeURIComponent(location)}`,
    `https://map.kakao.com/?q=${encodeURIComponent(location)}`)

  const iconStyles = {
    width: "30px",
    height: "30px"
  }

  return (
    <>
      <Modal
        show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={`/images/foods/${id}.jpg`} />
            <Card.Body>
              <Card.Title>{location}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <br />

              <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                  <Image
                    src="/images/icons/ssodam.png"
                    className="mr-3"
                    alt="서담 아이콘"
                    onClick={() => openSsodam(link)}
                    style={iconStyles}
                  />
                </Nav.Item>
                <Nav.Item>
                  <Image
                    src="/images/icons/naver_map.png"
                    className="mr-3"
                    onClick={() => openNaver()}
                    alt="네이버 맵 아이콘"
                    style={iconStyles}
                  />
                </Nav.Item>
                <Nav.Item>
                  <Image
                    src="/images/icons/kakao_map.png"
                    className="mr-3"
                    onClick={() => openKakao()}
                    alt="카카오 맵 아이콘"
                    style={iconStyles}
                  />
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal >
    </>
  );
};

export default SingleItemModal;

SingleItemModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  marker: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};
