import React, { useState } from "react";
import PropTypes from "prop-types";
import SingleItemModal from "./SingleItemModal";
import ListModal from "./ListModal";

const ModalCenter = (props) => {
  console.log("[ModalCenter] current props :", props.data);
  const [marker, setMarker] = useState(false); // used only when selected in <ListModal />
  const render = () => {
    switch (props.data.type) {
      case "List":
        return <ListModal {...props} setMarker={setMarker} />;
      case "Item":
      default:
        return <SingleItemModal {...props} />;
    }
  };
  return <>{marker ? <SingleItemModal {...props} marker={marker} /> : render()}</>;
};

export default ModalCenter;

ModalCenter.propTypes = {
  onHide: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
};
