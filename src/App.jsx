import { useState } from "react";
import Personal from "./components/personal.jsx";
import Education from "./components/education.jsx";
import Work from "./components/work.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Personal />
      <Education />
      <Work />
    </>
  );
}

export default App;
