async function apodFetcher(id) {
  let extra = "";
  if (Date.parse(id)) {
    extra = `?date=${id}`;
  }
  return fetch("https://api.kaustav.ml/apod.json" + extra)
    .then((response) => response.json())
    .then((json) => {
      if (json["success"]) {
        return json["data"];
      } else {
        throw new Exception(json["data"]);
      }
    });
}

export default apodFetcher;
