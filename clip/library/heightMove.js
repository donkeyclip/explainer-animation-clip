import { CSSEffect } from "@donkeyclip/motorcortex";
export const heightMove = (height,selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        height,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
