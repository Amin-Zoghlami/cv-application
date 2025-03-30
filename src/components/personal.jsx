import { useState } from "react";

export default function Personal() {
  const [editMode, setEditMode] = useState(true);

  const [personal, setPersonal] = useState({
    name: "",
    number: "",
    email: "",
    location: "",
  });

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
          <div className="contact">
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
              type="email"
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
          </div>
          <button onClick={switchEditMode}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Submit</title>
              <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
            </svg>
          </button>
        </>
      ) : (
        <>
          <h1>{personal.name}</h1>
          <div className="contact">
            <h2>{personal.number}</h2>
            <h2>| {personal.email} |</h2>
            <h2>{personal.location}</h2>
          </div>
          <button onClick={switchEditMode}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Edit</title>
              <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
