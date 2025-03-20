import { useState } from "react";
import Input from "./input.jsx";
import Add from "./add.jsx";

export default function Work() {
  const [editMode, setEditMode] = useState(true);

  const [work, setWork] = useState([
    {
      title: "",
      company: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function addWork() {
    setWork([
      ...work,
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function handleInputChange(index, field, value) {
    setWork((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  }

  function switchEditMode() {
    setEditMode(!editMode);
  }

  return (
    <div className="work">
      {editMode ? (
        <>
          <h1>Work/Experience</h1>
          {work.map((job, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Job Title"
                value={job.title}
                onChange={(e) =>
                  handleInputChange(index, "title", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Company"
                value={job.company}
                onChange={(e) =>
                  handleInputChange(index, "company", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="Start Date"
                value={job.startDate}
                onChange={(e) =>
                  handleInputChange(index, "startDate", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="End Date"
                value={job.endDate}
                onChange={(e) =>
                  handleInputChange(index, "endDate", e.target.value)
                }
              />
            </div>
          ))}
          <button onClick={addWork}>Add</button>
          <button onClick={switchEditMode}>Submit</button>
        </>
      ) : (
        <>
          {work.map((job, index) => (
            <div key={index}>
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <h4>{job.startDate}</h4>
              <h4>{job.endDate}</h4>
            </div>
          ))}
          <button onClick={switchEditMode}>Edit</button>
        </>
      )}
    </div>
  );
}
