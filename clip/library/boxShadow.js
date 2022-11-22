import { CSSEffect } from "@donkeyclip/motorcortex";
export const boxShadow = (boxShadow,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        boxShadow
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
