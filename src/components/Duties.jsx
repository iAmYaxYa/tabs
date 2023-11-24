import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties?.map((item) => {
        const id = uuidv4();
        return (
          <div className="job-desc" key={id}>
            <MdOutlineKeyboardDoubleArrowRight className="job-icon" />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
