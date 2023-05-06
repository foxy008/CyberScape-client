import React, { useEffect, useRef } from "react";
import useState from "react-usestateref";

import galaxyBgImg from "../assets/galaxy-bg.webp";

export default function GalaxyBackground({ children }) {
  const INITIAL_SCALE_XY = 1;
  const MAX_SCALE_XY = 1.2;

  const [_, setAction, actionRef] = useState("increment");

  const [scaleXY, setScaleXY] = useState(INITIAL_SCALE_XY);
  const scaleInterval = useRef();

  useEffect(() => {
    if (scaleXY >= MAX_SCALE_XY) {
      setAction("decrement");
    } else if (scaleXY <= INITIAL_SCALE_XY) {
      setAction("increment");
    }
  }, [scaleXY]);

  useEffect(() => {
    scaleInterval.current = setInterval(() => {
      if (actionRef.current === "increment") {
        setScaleXY((scaleXY) => scaleXY + 0.001);
      } else {
        setScaleXY((scaleXY) => scaleXY - 0.001);
      }
    }, 100);

    return () => {
      clearInterval(scaleInterval.current);
    };
  }, []);

  const galaxyByImgTransform = {
    transform: `translate3d(0px, 0px, 0px) scale3d(${scaleXY}, ${scaleXY}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
  };

  return (
    <>
      <div style={styles.wrapper}>
        <img
          style={{ ...styles.galaxyBgImg, ...galaxyByImgTransform }}
          src={galaxyBgImg}
          alt="Background Image"
        />
      </div>
      {children}
    </>
  );
}
const styles = {
  wrapper: {
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "hidden",
    zIndex: -1,
  },
  galaxyBgImg: {
    objectFit: 'cover',
    width: "100%",
    height: "100vh",
    transformStyle: "preserve-3d",
    willChange: "transform",
  },
};
