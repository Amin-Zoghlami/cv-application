import { useState } from "react";
import Personal from "./components/personal.jsx";
import Education from "./components/education.jsx";
import Work from "./components/work.jsx";
import Skill from "./components/skill.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Personal />
      <Education />
      <Work />
      <Skill />
    </>
  );
}

export default App;
