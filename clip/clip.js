import { HTMLClip, setCSSCore } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { leftMove } from "./library/leftMove";
import { widthMove } from "./library/widthMove";
import { opacity } from "./library/opacity";
import { scale } from "./library/scale";
import { rotate } from "./library/rotate";
import { boxShadow } from "./library/boxShadow";
import { heightMove } from "./library/heightMove";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
// setCSSCore(AnimePluginDefinition.CSSEffect);

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    },
  ],
  containerParams: {
    width: "900px",
    height: "500px",
  },
});

const animation1 = 11000;
const effect1 = 15000;

clip.addIncident(opacity(1, ".audio-progress", 1500), 300);

clip.addIncident(opacity(1, ".box:nth-child(1)", 500), 1800);
clip.addIncident(opacity(1, ".box:nth-child(2)", 500), 2300);
clip.addIncident(opacity(1, ".box:nth-child(3)", 500), 2800);

clip.addIncident(opacity(1, ".inc", 500), 3500);
clip.addIncident(leftMove("200%", ".inc", 500, "linear", "50%"), 5000);
clip.addIncident(opacity(1, ".type", 500), 6000);
clip.addIncident(leftMove("200%", ".type", 500, "linear", "50%"), 8000);
clip.addIncident(opacity(1, ".content", 500, "@stagger(0,1500)"), 8500);
clip.addIncident(opacity(1, ".box .animated-class", 500), animation1);

clip.addIncident(opacity(1, ".box:nth-child(3) .animation", 500), animation1);
clip.addIncident(
  rotate("360deg", ".box:nth-child(3) .animation", 1000),
  animation1 + 500
);
clip.addIncident(
  scale(1.5, ".box:nth-child(3) .animation", 500),
  animation1 + 1500
);
clip.addIncident(
  scale(0.5, ".box:nth-child(3) .animation", 500),
  animation1 + 2000
);
clip.addIncident(
  opacity(0, ".box:nth-child(3) .animation", 500),
  animation1 + 2500
);
/*reset*/
clip.addIncident(
  rotate("-360deg", ".box:nth-child(3) .animation", 1),
  animation1 + 3300
);
clip.addIncident(
  scale(1, ".box:nth-child(3) .animation", 1),
  animation1 + 3400
);

//first effect
clip.addIncident(widthMove("200px", ".animated-box", 1500), effect1);
clip.addIncident(
  boxShadow("rgba(255, 255, 255, 0.35) 0px 5px 15px", ".box:nth-child(1)", 10),
  effect1
);
clip.addIncident(
  boxShadow("rgba(255, 255, 255, 0.35) 0px 0px 0px", ".box:nth-child(1)", 10),
  effect1 + 1490
);

//second effect
clip.addIncident(
  heightMove("200px", ".animated-box", 1000),
  effect1 + 1500 + 200
);
clip.addIncident(
  boxShadow("rgba(255, 255, 255, 0.35) 0px 5px 15px", ".box:nth-child(2)", 10),
  effect1 + 1500 + 200
);
clip.addIncident(
  boxShadow("rgba(255, 255, 255, 0.35) 0px 0px 0px", ".box:nth-child(2)", 10),
  effect1 + 1500 + 200 + 990
);

//animation
clip.addIncident(
  boxShadow("rgba(255, 255, 255, 0.35) 0px 5px 15px", ".box:nth-child(3)", 10),
  effect1 + 1500 + 200 + 1000 + 200
);
clip.addIncident(
  boxShadow("rgba(255, 255, 255, 0.35) 0px 0px 0px", ".box:nth-child(3)", 10),
  effect1 + 1500 + 200 + 1000 + 200 + 2980
);
clip.addIncident(
  opacity(1, ".animation", 500),
  effect1 + 1500 + 200 + 1000 + 200
);
clip.addIncident(
  rotate("360deg", ".animation", 1000),
  effect1 + 1500 + 200 + 1000 + 200 + 500
);
clip.addIncident(
  scale(1.5, ".animation", 500),
  effect1 + 1500 + 200 + 1000 + 200 + 1500
);
clip.addIncident(
  scale(0.5, ".animation", 500),
  effect1 + 1500 + 200 + 1000 + 200 + 2000
);
clip.addIncident(
  scale(1, ".animation", 500),
  effect1 + 1500 + 200 + 1000 + 200 + 2500
);

clip.addIncident(widthMove("100%", "#audio-progress-bar", 5500), effect1);
clip.addIncident(leftMove("100%", "#draggable-point", 5500), effect1);
clip.addIncident(widthMove("80%", ".shadow", 5500), effect1);
