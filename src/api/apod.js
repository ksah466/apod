const formatExplanation = (explanation) => {
  let arr = explanation.split("\n");
  arr.shift();
  return arr
    .map((el) => el.trim())
    .join(" ")
    .trimLeft();
};

async function apodFetcher(id) {
  let URL = `apod.nasa.gov/apod/${id}.html${
    id == "astropix" ? `?date=${new Date().getDate()}` : ""
  }`;
  let responseHTML = await fetch(
    `https://api.kaustav.ml/proxy/${URL}`
  ).then((response) => response.text());

  let apodDocument = new DOMParser().parseFromString(responseHTML, "text/html");
  var base = apodDocument.createElement("base");
  base.href = `https://${URL}`;
  apodDocument.head.appendChild(base);

  let returnObj = {
    copyright: apodDocument.querySelector(
      "body > center:nth-child(2) > a:nth-child(4)"
    ).innerText,
    date: apodDocument
      .querySelector("body > center:nth-child(1) > p:nth-child(3)")
      .innerText.trim(),
    explanation: apodDocument
      .querySelector("body > p:nth-child(3)")
      .innerText.trim(),
    hdurl: apodDocument.querySelector(
      "body > center:nth-child(1) > p:nth-child(3) > a"
    ).href,
    title: apodDocument
      .querySelector("body > center:nth-child(2) > b:nth-child(1)")
      .innerText.trim(),
    url: apodDocument.querySelector(
      "body > center:nth-child(1) > p:nth-child(3) > a > img"
    ).src,
  };

  returnObj.explanation = formatExplanation(returnObj.explanation);
  returnObj.date = new Date(returnObj.date);

  return returnObj;
}

export default apodFetcher;
