import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loaderPosition, setLoaderPosition] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      if (loaderPosition < 100) {
        setLoaderPosition((prevPos) => (prevPos < 100 ? prevPos + 3 : -20));
      } else {
        setLoaderPosition(0);
      }
    }, 100);
    return () => {
      window.clearInterval(counter);
    };
  });

  return (
    <div className="loader">
      <h2>Uploading...</h2>
      <div className="loading-bar">
        <div style={{ left: `${loaderPosition}%` }}></div>
      </div>
    </div>
  );
};

export default Loader;
