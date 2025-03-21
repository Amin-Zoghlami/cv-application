import { useState } from "react";

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
          <h1>{personal.name}</h1>
          <h2>{personal.number}</h2>
          <h2>| {personal.email} |</h2>
          <h2>{personal.location}</h2>
          <button onClick={switchEditMode}>Edit</button>
        </>
      )}
    </div>
  );
}
