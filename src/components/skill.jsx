import { useState } from "react";
import Input from "./input.jsx";
import Add from "./add.jsx";

export default function Skill() {
  const [skills, setSkills] = useState([
    <Input type="text" placeholder="Skill" />,
  ]);

  function addSkill() {
    setSkills([...skills, <Input type="text" placeholder="Skill" />]);
  }

  return (
    <div className="skill">
      <h1>Skills</h1>
      {skills}
      <Add addElement={addSkill} />
    </div>
  );
}
