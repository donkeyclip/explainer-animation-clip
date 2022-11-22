import { CSSEffect } from "@donkeyclip/motorcortex";
export const widthMove = (width,selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
