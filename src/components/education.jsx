import { useState } from "react";

export default function Education() {
  const [editMode, setEditMode] = useState(true);

  const [education, setEducation] = useState([]);

  function addEducation() {
    setEducation([
      ...education,
      {
        id: Date.now(),
        name: "",
        field: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function deleteEducation(id) {
    setEducation((prev) => prev.filter((item) => item.id !== id));
  }

  function handleInputChange(id, field, value) {
    setEducation((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
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
          {education.map((school) => (
            <div key={school.id}>
              <input
                type="text"
                placeholder="School Name"
                value={school.name}
                onChange={(e) =>
                  handleInputChange(school.id, "name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Field of Study"
                value={school.field}
                onChange={(e) =>
                  handleInputChange(school.id, "field", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="Start Date"
                value={school.startDate}
                onChange={(e) =>
                  handleInputChange(school.id, "startDate", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="End Date"
                value={school.endDate}
                onChange={(e) =>
                  handleInputChange(school.id, "endDate", e.target.value)
                }
              />
              <button onClick={() => deleteEducation(school.id)}>Delete</button>
            </div>
          ))}
          {education.length < 3 ? (
            <button onClick={addEducation}>Add</button>
          ) : null}
          <button onClick={switchEditMode}>Submit</button>
        </>
      ) : (
        <>
          {education.map((school) => (
            <div key={school.id}>
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
