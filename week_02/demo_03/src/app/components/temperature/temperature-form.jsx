import { useEffect, useState } from "react";

const TemperatureForm = ({ temp, scale, onTemperatureChange }) => {
  const [temperature, setTemperature] = useState(temp);

  useEffect(() => {
    setTemperature(temp);
  }, [temp]);

  const handleOnChange = (ev) => {
    if(typeof onTemperatureChange === 'function') {
      onTemperatureChange(ev.target.value, scale);
    }
  }

  return (
    <div className="">
      <label htmlFor="txtTemperature">
        Temperature °{scale}: 
      </label>
      <input id="txtTemperature" type="text" placeholder="Type your temperature" value={temperature} onChange={handleOnChange} />
    </div>
  )
};

export default TemperatureForm;