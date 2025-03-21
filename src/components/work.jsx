import { useState } from "react";

export default function Work() {
  const [editMode, setEditMode] = useState(true);

  const [work, setWork] = useState([]);

  function addWork() {
    setWork([
      ...work,
      {
        id: Date.now(),
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        desc: "",
      },
    ]);
  }

  function deleteWork(id) {
    setWork((prev) => prev.filter((item) => item.id !== id));
  }

  function handleInputChange(id, field, value) {
    setWork((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }

  function switchEditMode() {
    setEditMode(!editMode);
  }

  return (
    <div className="work">
      {editMode ? (
        <>
          <h1>Experience</h1>
          {work.map((job) => (
            <div key={job.id}>
              <input
                type="text"
                placeholder="Job Title"
                value={job.title}
                onChange={(e) =>
                  handleInputChange(job.id, "title", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Company"
                value={job.company}
                onChange={(e) =>
                  handleInputChange(job.id, "company", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="Start Date"
                value={job.startDate}
                onChange={(e) =>
                  handleInputChange(job.id, "startDate", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="End Date"
                value={job.endDate}
                onChange={(e) =>
                  handleInputChange(job.id, "endDate", e.target.value)
                }
              />
              <textarea
                placeholder="Description"
                value={job.desc}
                onChange={(e) =>
                  handleInputChange(job.id, "desc", e.target.value)
                }
              />
              <button onClick={() => deleteWork(job.id)}>Delete</button>
            </div>
          ))}
          {work.length < 3 ? <button onClick={addWork}>Add</button> : null}
          <button onClick={switchEditMode}>Submit</button>
        </>
      ) : (
        <>
          {work.map((job) => (
            <div key={job.id}>
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <h4>{job.startDate}</h4>
              <h4>{job.endDate}</h4>
              <p>{job.desc}</p>
            </div>
          ))}
          <button onClick={switchEditMode}>Edit</button>
        </>
      )}
    </div>
  );
}
