// Import custom modules
import Lecturer from "./lecturer";

const Course = ({ data }) => {
  return (
    <li className="course">
      <h4>{data.name}</h4>
      {data && data.lecturers.map((lecturer, index) => <Lecturer key={index} data={lecturer}/>)}
    </li>
  )
};

export default Course;