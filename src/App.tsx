import "./App.scss";

import React, { useEffect, useState } from "react";

import Envelope from "./components/Envelope/Envelope";

const App: React.FC = () => {
  const [loaderClass, setLoaderClass] = useState("loader__container");

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
    return () => window.removeEventListener("resize", appHeight);
  }, []);

  const onLoad = () => {
    setTimeout(() => {
      setLoaderClass("loader__container loader__container--hide");
    }, 1500);
    setTimeout(() => {
      setLoaderClass(
        "loader__container loader__container--hide loader__container--hidden"
      );
    }, 2000);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="App">
      <div className={loaderClass}>
        <div className="heart__envelope"></div>
      </div>
      <div className="body__wrapper">
        <Envelope />
      </div>
    </div>
  );
};

export default App;
