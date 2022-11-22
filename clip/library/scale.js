import { CSSEffect } from "@donkeyclip/motorcortex";
export const scale = (scale,selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform:{
            scale
        },
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
