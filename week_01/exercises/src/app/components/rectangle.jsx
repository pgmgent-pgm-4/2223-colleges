// Styling
import './rectangle.css';

const Rectangle = ({ l, b }) => {
  const calculateArea = () => {
    return l * b;
  };

  return (
    <div className="rectangle" style={{ width: l, height: b}}>
      A rectangle with dimension {l} x {b}
      The surface of the rectangle is { calculateArea() }
    </div>
  )
};

export default Rectangle;