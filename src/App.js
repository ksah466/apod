import React, { useState } from "react";
import useSWR from "swr";

import apodFetcher from "./api/apod.js";

import Loading from "./components/Loading.js";
import DisplayApod from "./components/DisplayApod.js";
import ApodDetails from "./components/ApodDetails.js";

function App() {
  // YYYY-MM-DD for a certain day,
  // anything else for the latest

  // 2020-07-26 for a YouTube example
  const { data, error } = useSWR("today", apodFetcher);
  console.log({ data, error });

  if (error) {
    return <Loading message={error.message} />;
  }
  if (data) {
    return (
      <>
        <DisplayApod data={data} />
        <ApodDetails data={data} />
      </>
    );
  } else {
    return <Loading message="Fetching..." />;
  }
}

export default App;
