// Styling
import './student.css';

const Student = ({ fullName, avatarUrl }) => {
  return (
    <div className={`student`}>
      <picture className={`student__picture`}>
        <img alt="This is the avatar" src={avatarUrl} />
      </picture>
      <h3 className={`student__name`}>{ fullName }</h3>
    </div>
  )
};

export default Student;