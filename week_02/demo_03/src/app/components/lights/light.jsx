// Styling
import './light.css';

const Light = ({ v = 50, baseColor = `hsl(265, 50%, 50%)`}) => {
  return (
    <div className={`light`} style={{backgroundColor: baseColor, opacity: v / 100 }}>
    </div>
  )
};

export default Light;