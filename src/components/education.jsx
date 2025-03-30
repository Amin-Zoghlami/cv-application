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
      <h1 className="heading">Education</h1>
      {editMode ? (
        <>
          {education.map((school) => (
            <div className="school-input" key={school.id}>
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
                placeholder="Degree Type"
                value={school.field}
                onChange={(e) =>
                  handleInputChange(school.id, "field", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Start Date"
                value={school.startDate}
                onChange={(e) =>
                  handleInputChange(school.id, "startDate", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="End Date"
                value={school.endDate}
                onChange={(e) =>
                  handleInputChange(school.id, "endDate", e.target.value)
                }
              />
              <button onClick={() => deleteEducation(school.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>trash-can</title>
                  <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
                </svg>
              </button>
            </div>
          ))}
          {education.length < 3 ? (
            <button onClick={addEducation}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Add</title>
                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
              </svg>
            </button>
          ) : null}
          {education.length !== 0 ? (
            <button onClick={switchEditMode}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Submit</title>
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
              </svg>
            </button>
          ) : null}
        </>
      ) : (
        <>
          {education.map((school) => (
            <div className="school-output" key={school.id}>
              <div className="school-title">
                <h2>{school.name}</h2>
                <h3>{school.field}</h3>
              </div>
              <div className="school-date">
                <h4>
                  {school.startDate} - {school.endDate}
                </h4>
                <h4></h4>
              </div>
            </div>
          ))}
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
