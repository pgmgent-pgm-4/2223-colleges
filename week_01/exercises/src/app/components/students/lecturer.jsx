// Import custom modules
import Student from "./student";

const Lecturer = ({ data }) => {
  return (
    <li className="lecturer">
      { data }
    </li>
  )
};

export default Lecturer;