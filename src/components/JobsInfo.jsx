import Duties from "./Duties";

const JobsInfo = ({ jobs, currentItem }) => {
  const { title, company, dates, duties } = jobs[currentItem];
  return (
    <div>
      <h4>{title}</h4>
      <h6 className="job-company">{company}</h6>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </div>
  );
};

export default JobsInfo;
