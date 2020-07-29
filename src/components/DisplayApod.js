import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function DisplayApod({
  data: { title, copyright, date, explanation, hdurl, url },
}) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 md:p-4">
      <LazyLoadImage
        className="rounded-lg border shadow-lg p-1"
        style={{
          maxHeight: "90vh",
        }}
        placeholderSrc={url}
        alt={title}
        effect="blur"
        src={hdurl}
      />
    </div>
  );
}

export default DisplayApod;
