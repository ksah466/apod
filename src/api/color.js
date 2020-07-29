async function getColor(url) {
  url = encodeURIComponent(url);
  let rgbCSS = await fetch(`https://api.kaustav.ml/color-thief?url=${url}`)
    .then((response) => response.json())
    .then((response) => `rgb(${response.data.rgb.join(",")})`);

  return rgbCSS;
}

export default getColor;
