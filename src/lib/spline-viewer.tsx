import React, { useEffect } from "react";

type SplineViewerProps = {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
};

const SCRIPT_ID = "spline-viewer-script";
const SCRIPT_SRC = "https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js";

const Spline: React.FC<SplineViewerProps> = ({ scene, className, style }) => {
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <spline-viewer url={scene} className={className} style={style} loading-anim />
  );
};

export default Spline;
