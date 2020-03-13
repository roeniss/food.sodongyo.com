import React from "react";
import propTypes from "prop-types";

const Splash = (props) => {
  const { transitionStart } = props;
  return (
    <div
      className={
        (transitionStart ? "visual-showout" : "") +
        " full-screen splash transition-style-2000ms-500ms"
      }
    >
      <div className="center">
        <img
          className={(transitionStart ? "visual-showup" : "") + " logo transition-style-0ms-500ms"}
          src="images/matgesal_transparent.png"
        />
        <div
          className={
            (transitionStart ? "visual-showup" : "") + " title transition-style-300ms-500ms"
          }
        >
          &ldquo;맛동요&rdquo; <br className="only-mobile" /> 맛게살 X 서동요 합작 프로젝트
        </div>
      </div>
    </div>
  );
};

export default Splash;

Splash.propTypes = {
  transitionStart: propTypes.bool.isRequired,
};
