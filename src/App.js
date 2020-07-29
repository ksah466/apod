import React, { useState, useEffect } from "react";
import useSWR from "swr";

import Loading from "./components/Loading.js";
import DisplayApod from "./components/DisplayApod.js";

import apodFetcher from "./api/apod.js";

function App() {
  const { data, error } = useSWR("ap200723", apodFetcher);
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
