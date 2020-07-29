import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import colorthief from "colorthief/dist/color-thief.umd.js";
import colorThiefUmd from "colorthief/dist/color-thief.umd.js";

function getColor(url, callback) {
  var imageElement = document.createElement("IMG");

  let urlWithoutStart = url.slice(url.indexOf("://") + 3);

  imageElement.src = `https://api.kaustav.ml/proxy/${urlWithoutStart}`;
  imageElement.setAttribute("crossorigin", "anonymous");

  imageElement.addEventListener("load", function () {
    let thief = new colorThiefUmd();
    let color = thief.getColor(imageElement);
    callback(color);
  });
}

function DisplayApod({ data }) {
  let [backgroundColor, setBackgroundColor] = useState("black");

  let { title, copyright, date, explanation, hdurl, url } = data;
  let thumbnailImage = `https://api.kaustav.ml/imaginary/thumbnail?width=100&url=${url}`;

  getColor(thumbnailImage, (color) =>
    setBackgroundColor(`rgb(${color.join(",")})`)
  );

  return (
    <div
      className="flex items-center justify-center h-screen md:p-4"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <a href={hdurl} className="rounded-lg border shadow-lg p-1">
        <LazyLoadImage
          style={{
            maxHeight: "90vh",
            maxWidth: "90vw",
          }}
          placeholderSrc={thumbnailImage}
          alt={title}
          effect="blur"
          src={url}
        />
      </a>
    </div>
  );
}

export default DisplayApod;
