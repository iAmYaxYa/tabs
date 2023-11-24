const BtnContainers = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs?.map((job, index) => {
        return (
          <button
            onClick={() => setCurrentItem(index)}
            className={currentItem == index ? "job-btn active-btn" : "job-btn"}
            key={job?.id}
          >
            {job?.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainers;
