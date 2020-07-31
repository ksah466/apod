import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function DisplayApod({ data: { title, hdurl, url, rgb, embed } }) {
  let [dominantColor, setDominantColor] = useState("black");

  return (
    <div
      className="flex items-center justify-center h-full md:p-4"
      style={{
        backgroundColor: dominantColor,
        transition: "background-color 0.5s cubic-bezier(0, 0.55, 0.45, 1)",
      }}
    >
      {embed ? (
        <iframe
          style={{
            height: "90vh",
            width: "90vw",
          }}
          src={`${embed}&autoplay=1&loop=1`}
          className="rounded-lg border shadow-lg p-1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <a href={hdurl} className="rounded-lg border shadow-lg p-1">
          <LazyLoadImage
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
            }}
            afterLoad={() => {
              let color = `rgb(${rgb[0].join(",")})`;
              setDominantColor(color);
            }}
            placeholderSrc={`https://api.kaustav.ml/imaginary/thumbnail?width=100&url=${url}`}
            alt={title}
            effect="blur"
            src={url}
          />
        </a>
      )}
    </div>
  );
}

export default DisplayApod;
