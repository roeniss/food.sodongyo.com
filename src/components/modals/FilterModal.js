import React, { useState } from "react";
import { Modal, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import markerController from "../../lib/MarkerController";
import { isDevMode } from "../../lib/helper";
import category from "../../resources/data/category";

const MarkerCard = (markerData, onHide) => {
  const { id, rgb, subCategory } = markerData;
  const [visible, setVisible] = useState(markerController.isVisibleCategory(id));

  const updateVisibility = (id) => {
    setVisible(!visible);
    markerController.setCategoryVisibilityOnly([id]);
    onHide();
  };

  const styles = { /* borderColor: hex,*/ textAlign: "center" };
  const setBGColor = (visible) => {
    if (visible) styles.backgroundColor = `rgba(${rgb}, 0.5)`;
    else styles.backgroundColor = `rgba(60, 60, 60, 0.5)`;
    return styles;
  };

  return (
    <Card
      key={id}
      className="mb-3 clickable"
      onClick={() => updateVisibility(id)}
      style={setBGColor(visible)}
    >
      <Card.Body>{subCategory.join(", ")}</Card.Body>
    </Card>
  );
};

const FilterModal = (props) => {
  if (isDevMode()) console.log("[FilterModal] current props :", props);

  const render = () => {
    return category.map((entity) => {
      return MarkerCard(entity, props.onHide);
    });
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
          <Modal.Title>메뉴 골라보기</Modal.Title>
        </Modal.Header>
        <Modal.Body>{render()}</Modal.Body>
      </Modal>
    </>
  );
};

export default FilterModal;

FilterModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
