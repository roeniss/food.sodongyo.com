import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Splash from "./components/Splash";

function App() {
  const [delay, setDelay] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 200);
  }, []);
  return (
    <div className="App">
      <Splash transitionStart={!delay} />
      {delay ? null : (
        <>
          <Header />
          <Content />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
