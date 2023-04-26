// Import custom modules
import Student from "./student";

const StudentList = ({ data }) => {
  return (
    <ul className="students-list">
      {data && data.map(student => <Student key={student.id} data={student}/>)}
    </ul>
  )
};

export default StudentList;