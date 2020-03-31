import React from "react";
import propTypes from "prop-types";
import { isChrome } from "../lib/helper";

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
          alt="logo"
        />
        <div
          className={
            (transitionStart ? "visual-showup" : "") + " title transition-style-300ms-500ms"
          }
        >
          &ldquo;맛동요&rdquo; <br className="only-mobile" /> 맛게살 X 서동요{" "}
          <br className="only-mobile" /> 합작 프로젝트
          {isChrome() ? (
            <>
              <br /> <br /> <b>크롬 브라우저 사용을 권장합니다.</b>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Splash;

Splash.propTypes = {
  transitionStart: propTypes.bool.isRequired,
};
