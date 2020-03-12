import React from "react";
import { Modal, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import MarkerController from "../../lib/MarkerController";

const getOverlappedMarkersData = ([y, x]) => {
  const markersData = MarkerController.markerGeoDict[y][x];
  return markersData;
};

const MarkerCard = (markerData, setMarker) => {
  const { id, name, description } = markerData;
  return (
    <Card key={id} className="mb-3 clickable" onClick={() => setMarker(id)}>
      <blockquote className="blockquote mb-0 card-body">
        <p>{name}</p>
        <footer className="blockquote-footer">
          <small className="text-muted">
            <cite title="Source Title">{description}</cite>
          </small>
        </footer>
      </blockquote>
    </Card>
  );
};

const ListModal = (props) => {
  console.log("[ListModal] current props :", props.data);

  const render = () => {
    return getOverlappedMarkersData(props.data.geolocation).map((marker) =>
      MarkerCard(marker, props.setMarker)
    );
  };

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
          <Modal.Title>이곳의 가게들</Modal.Title>
        </Modal.Header>
        <Modal.Body>{render()}</Modal.Body>
      </Modal>
    </>
  );
};

export default ListModal;

ListModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  setMarker: PropTypes.func.isRequired,
};
