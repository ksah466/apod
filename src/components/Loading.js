import React from "react";

function Loading({ message }) {
  return (
    <div className="flex items-center justify-center h-screen bg-black md:p-4 text-gray-400">
      <h1>{message}</h1>
    </div>
  );
}

export default Loading;
