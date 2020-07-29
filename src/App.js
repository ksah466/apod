import React, { useState, useEffect } from "react";
import useSWR from "swr";

import Loading from "./components/Loading.js";
import DisplayApod from "./components/DisplayApod.js";

import apodFetcher from "./api/apod.js";

function App() {
  const { data, error } = useSWR("fetch-apod", apodFetcher);
  console.log({ data, error });

  if (!data) return <Loading />;
  return <DisplayApod data={data} />;
}

export default App;
