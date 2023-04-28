// Import external modules
import { useState } from "react";

const Dimmer = ({ onDimmerValueChanged }) => {
  const [v, setV] = useState(50);

  const handleOnChange = (ev) => {
    setV(ev.target.value);
    if (typeof onDimmerValueChanged === 'function') {
      onDimmerValueChanged(v);
    }
  }

  return (
    <div>
      <input type="range" id="dimmer" name="dimmer" 
            min="0" max="100" value={v} step="1" onChange={handleOnChange} />
      <label htmlFor="dimmer">Dimmer</label>
    </div>
  )
};

export default Dimmer;