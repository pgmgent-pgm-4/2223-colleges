import Course from "./course";

const Student = ({ data }) => {
  return (
    <li className="student">
      <h3>{data.firstName} {data.lastName}</h3>
      <ul className="courses">
        {data.courses &&
        data.courses.map((course, index) => <Course key={index} data={course} />)}
      </ul>
    </li>
  )
};

export default Student;