import React from "react";
import { Modal, Card, Button, Image, Badge, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { getAppName, isDevMode } from "../../lib/helper";
import category from "../../resources/data/category"

const SingleItemModal = (props) => {
  if (isDevMode()) console.log("[SingleItemModal] current props :", props.data);

  const { id, name, location, link, description, mainCategory, subCategory } = props.data;

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

  const addBadges = () => {
    const targetCategory = category[mainCategory];
    const title = targetCategory.subCategory[subCategory]
    const color = targetCategory.rgb;
    return <Badge style={{ color: 'white', backgroundColor: `rgba(${color}, 1.0)`, fontWeight: 'regular' }}>{title}</Badge>
  }

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
          <Modal.Title className="mr-3">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={`/images/foods/${id}.jpg`} />
            <Card.Body>
              <Card.Title>{location}</Card.Title>
              <Card.Text>{description}</Card.Text>

              <br />

              <Nav className="justify-content-between" >
                <Nav.Item className="justify-content-start" >
                  {addBadges()}
                </Nav.Item>
                <Nav className="justify-content-end" >
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
