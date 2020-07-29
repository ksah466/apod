import React, { useState, useEffect } from "react";
import useSWR from "swr";

import Loading from "./components/Loading.js";
import DisplayApod from "./components/DisplayApod.js";

import apodFetcher from "./api/apod.js";

function App() {
  // apYYMMDD for a certain date
  // astropix for the latest
  const { data, error } = useSWR("ap200727", apodFetcher);
  console.log({ data, error });

  if (error) {
    return <Loading message={error} />;
  }
  if (data) {
    return <DisplayApod data={data} />;
  } else {
    return <Loading message="Fetching..." />;
  }
}

export default App;
