import Personal from "./components/personal.jsx";
import Education from "./components/education.jsx";
import Work from "./components/work.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">CV Application</h1>
      <div className="resume">
        <Personal />
        <Education />
        <Work />
      </div>
    </>
  );
}

export default App;
