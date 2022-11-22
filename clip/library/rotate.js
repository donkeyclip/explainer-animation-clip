import { CSSEffect } from "@donkeyclip/motorcortex";
export const rotate = (rotate,selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform:{
            rotate
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
