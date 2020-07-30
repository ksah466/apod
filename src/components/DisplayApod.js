import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import getColor from "../api/color.js";

function DisplayApod({ data: { title, hdurl, url } }) {
  let [backgroundColor, setbackgroundColor] = useState("black");

  // thumbnail
  let thumbnailImage = `https://api.kaustav.ml/imaginary/thumbnail?width=100&url=${url}`;

  // background color
  const bgColor = getColor(url);

  return (
    <div
      className="flex items-center justify-center h-screen md:p-4"
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 0.5s cubic-bezier(0, 0.55, 0.45, 1)",
      }}
    >
      <a href={hdurl} className="rounded-lg border shadow-lg p-1">
        <LazyLoadImage
          style={{
            maxHeight: "90vh",
            maxWidth: "90vw",
          }}
          afterLoad={() => {
            console.log("afterLoad");
            bgColor.then(setbackgroundColor);
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
