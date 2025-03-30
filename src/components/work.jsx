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
      <h1 className="heading">Experience</h1>
      {editMode ? (
        <>
          {work.map((job) => (
            <div className="job-input" key={job.id}>
              <div className="job-input-info">
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
                  type="text"
                  placeholder="Start Date"
                  value={job.startDate}
                  onChange={(e) =>
                    handleInputChange(job.id, "startDate", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="End Date"
                  value={job.endDate}
                  onChange={(e) =>
                    handleInputChange(job.id, "endDate", e.target.value)
                  }
                />
                <button onClick={() => deleteWork(job.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>trash-can</title>
                    <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
                  </svg>
                </button>
              </div>
              <textarea
                placeholder="Description"
                value={job.desc}
                style={{ resize: "none" }}
                onChange={(e) =>
                  handleInputChange(job.id, "desc", e.target.value)
                }
              />
            </div>
          ))}
          {work.length < 3 ? (
            <button onClick={addWork}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Add</title>
                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
              </svg>
            </button>
          ) : null}
          {work.length !== 0 ? (
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
          {work.map((job) => (
            <div className="job-output" key={job.id}>
              <div className="job-info">
                <div className="job-title">
                  <h2>{job.title}</h2>
                  <h3>{job.company}</h3>
                </div>
                <h4 className="job-date">
                  {job.startDate} - {job.endDate}
                </h4>
              </div>
              <p>{job.desc}</p>
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
