import React from "react";
import { Modal, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { getAppName } from "../../lib/helper";

const SingleItemModal = (props) => {
  console.log("[SingleItemModal] current props :", props.data);

  const { id, name, location, link, description, geolocation } = props.data;

  const openSsodam = (link) => window.open(`http://ssodam.com/content/${link}`, "_blank");
  const openNaver = () =>
    window.open(
      `nmap://map?lat=${geolocation[0]}&lng=${geolocation[1]}&zoom=15&appname=${getAppName()}`,
      "_blank"
    );
  const openKakao = () => window.open(`daummaps://look?p=${geolocation.join(",")}`, "_blank");
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
              <Button
                variant="primary"
                onClick={() => openSsodam(link)}
                className="cardBtn" /*style={{ margin: "0 10px 10px 0" }}*/
              >
                서담 리뷰 보러가기
              </Button>
              <Button
                variant="warning"
                onClick={() => openNaver()}
                className="cardBtn" /*style={{ margin: "0 10px 10px 0" }}*/
              >
                네이버 지도 보러 가기
              </Button>
              <Button
                variant="danger"
                onClick={() => openKakao()}
                className="cardBtn" /*style={{ margin: "0 10px 10px 0" }}*/
              >
                카카오 지도 보러 가기
              </Button>
              {/* <Button
                variant="secondary"
                onClick={props.onHide}
                className="cardBtn" style={{ margin: "0 10px 10px 0" }}
              >
                닫기
              </Button> */}
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
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
