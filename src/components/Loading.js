import React from "react";

function Loading({ message }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 md:p-4 text-white">
      <h1>{message}</h1>
    </div>
  );
}

export default Loading;
