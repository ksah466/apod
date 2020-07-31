import React from "react";

function ApodDetails({ data: { title, rgb, copyright, date, explanation } }) {
  let backgroundColor = "white";
  let textColor = "black";

  if (rgb) {
    const brightness = Math.round(
      (parseInt(rgb[0][0]) * 299 +
        parseInt(rgb[0][1]) * 587 +
        parseInt(rgb[0][2]) * 114) /
        1000
    );

    backgroundColor = `rgb(${rgb[1].join(",")})`;
    textColor = brightness > 150 ? "black" : "white";
  }

  let bgColor = rgb ? rgb[1] : null;
  return (
    <div
      className="flex flex-col items-center md:items-start justify-center md:justify-start h-full md:p-10 text-center md:text-left"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <h1
        className="text-xl sm:text-4xl md:text-6xl"
        style={{
          opacity: "90%",
        }}
      >
        {title}
      </h1>
      <h2
        style={{
          opacity: "60%",
        }}
        className="text-lg mb-6"
      >
        {date} © {copyright}
      </h2>
      {explanation.split(/[\\.!\?]/).map((block, index) => (
        <p
          key={index}
          style={{
            opacity: "80%",
          }}
          className="text-sm sm:text-md md:text-xl mb-2"
        >
          {block}
        </p>
      ))}
    </div>
  );
}

export default ApodDetails;
