import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        url: string;
        class?: string;
        "loading-anim"?: boolean;
      };
    }
  }
}

declare module "@splinetool/react-spline" {
  import type { CSSProperties, ComponentType } from "react";

  type SplineProps = {
    scene: string;
    className?: string;
    style?: CSSProperties;
  };

  const Spline: ComponentType<SplineProps>;
  export default Spline;
}
