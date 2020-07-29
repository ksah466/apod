import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function DisplayApod({
  data: { title, copyright, date, explanation, hdurl, url },
}) {
  return (
    <div>
      <h1>{title}</h1>
      <LazyLoadImage
        placeholderSrc={url}
        alt={title}
        effect="blur"
        src={hdurl}
      />
      <h3>{date.toDateString()}</h3>
      <h4>Copyright {copyright}</h4>
      <p>{explanation}</p>
    </div>
  );
}

export default DisplayApod;
