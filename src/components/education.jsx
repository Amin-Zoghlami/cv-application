import { useState } from "react";
import Input from "./input.jsx";
import Add from "./add.jsx";

export default function Education() {
  const [editMode, setEditMode] = useState(true);

  const [education, setEducation] = useState([
    {
      name: "",
      field: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function addEducation() {
    setEducation([
      ...education,
      {
        name: "",
        field: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function handleInputChange(index, field, value) {
    setEducation((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  }

  function switchEditMode() {
    setEditMode(!editMode);
  }

  return (
    <div className="education">
      {editMode ? (
        <>
          <h1>Education</h1>
          {education.map((school, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="School Name"
                value={school.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Field of Study"
                value={school.field}
                onChange={(e) =>
                  handleInputChange(index, "field", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="Start Date"
                value={school.startDate}
                onChange={(e) =>
                  handleInputChange(index, "startDate", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="End Date"
                value={school.endDate}
                onChange={(e) =>
                  handleInputChange(index, "endDate", e.target.value)
                }
              />
            </div>
          ))}
          <button onClick={addEducation}>Add</button>
          <button onClick={switchEditMode}>Submit</button>
        </>
      ) : (
        <>
          {education.map((school, index) => (
            <div key={index}>
              <h2>{school.name}</h2>
              <h3>{school.field}</h3>
              <h4>{school.startDate}</h4>
              <h4>{school.endDate}</h4>
            </div>
          ))}
          <button onClick={switchEditMode}>Edit</button>
        </>
      )}
    </div>
  );
}
