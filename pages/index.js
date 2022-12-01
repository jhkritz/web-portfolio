import * as React from "react";
import Blob from "../components/blob";
import Profile from "../components/profile";
import ProductCard from "../components/card";
import Carousel from "../components/carousel";
import Contact from "../components/contact";
import { Analytics } from "@vercel/analytics/react";
import { render } from "react-dom";

export default function App() {
  const [loaded, setLoaded] = React.useState(false);

  const handleLoad = () => {
    setLoaded(true);
    if (loaded) {
      document.getElementById("page").style.visibility = "visible";
      document.getElementById("page").style.opacity = "1";
      document.getElementById("loading").style.visibility = "collapse";
      document.getElementById("loading").style.transition =
        "visibility 0.8s linear,opacity 0.8s linear reverse";
      document.getElementById("loading").style.minHeight = "0px";
    }
  };

  setTimeout(handleLoad, 2500);

  return (
    <div class="parent">
      <div class="loading" id="loading">
        <div class="container">
          <div class="liquid"></div>
          <div class="liquid"></div>
          <div class="liquid"></div>
          <div class="liquid"></div>
        </div>
        <svg id="svg">
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix
              values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 20 -10
        "
            />
          </filter>
        </svg>
      </div>
      <div
        id="page"
        style={{
          visibility: "hidden",
          opacity: "0",
          transition: "visibility 0.8s linear,opacity 0.8s linear",
        }}
      >
        <Blob />
        <ProductCard />
        <Profile />
        <Carousel />
        <Contact />
        <Analytics />
      </div>
    </div>
  );
}
