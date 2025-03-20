import { useState } from "react";
import Input from "./input.jsx";

export default function Personal() {
  const [editMode, setEditMode] = useState(true);

  const [personal, setPersonal] = useState([
    {
      name: "",
      number: "",
      email: "",
      location: "",
    },
  ]);

  function handleInputChange(field, value) {
    setPersonal((prev) => ({ ...prev, [field]: value }));
  }

  function switchEditMode() {
    setEditMode(!editMode);
  }

  return (
    <div className="personal">
      {editMode ? (
        <>
          <h1>Personal/Contact</h1>
          <input
            type="text"
            placeholder="Full Name"
            value={personal.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={personal.number}
            onChange={(e) => handleInputChange("number", e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={personal.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={personal.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
          <button onClick={switchEditMode}>Submit</button>
        </>
      ) : (
        <>
          <h2>{personal.name}</h2>
          <h3>{personal.number}</h3>
          <h4>{personal.email}</h4>
          <h4>{personal.location}</h4>
          <button onClick={switchEditMode}>Edit</button>
        </>
      )}
    </div>
  );
}
