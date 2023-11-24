import { useEffect, useState } from "react";
import JobsInfo from "./components/JobsInfo";
import BtnContainers from "./components/BtnContainers";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const getData = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="jobs-center">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="jobs-center">
      <BtnContainers
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobsInfo jobs={jobs} currentItem={currentItem} />
    </div>
  );
};
export default App;
