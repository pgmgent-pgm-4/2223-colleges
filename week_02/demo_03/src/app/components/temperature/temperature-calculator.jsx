import { useState } from "react";
import TemperatureForm from "./temperature-form";

const TemperatureCalculator = () => {
  const [calcData, setCalcData] = useState({
    tempC: 0,
    tempF: 0,
    scale: 'C',
  });

  const handleTemperatureChange = (temp, scale) => {
    setCalcData({
      scale,
      tempC: scale === 'C' ? temp : toCelsius(temp),
      tempF: scale === 'F' ? temp : toFarenheit(temp),
    });
  };

  const toCelsius = (f) => {
    return (f - 32) * 5 / 9;
  };

  const toFarenheit = (c) => {
    return (c * 9 / 5) + 32;
  };

  return (
    <>
      <TemperatureForm temp={calcData.tempC} scale={`C`} onTemperatureChange={handleTemperatureChange} />
      <TemperatureForm temp={calcData.tempF} scale={`F`} onTemperatureChange={handleTemperatureChange}/>
    </>
  )
};

export default TemperatureCalculator;