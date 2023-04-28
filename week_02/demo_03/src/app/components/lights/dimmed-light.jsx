import { useState } from "react";
import Dimmer from "./dimmer";
import Light from "./light";

const DimmedLight = ({ baseColor= `hsl(168, 50%, 50%)`}) => {
  const [lightV, setLightV] = useState(50);

  const handleDimmerValueChanged = (v) => {
    setLightV(v);
  };

  return (
    <>
      <Dimmer onDimmerValueChanged={handleDimmerValueChanged} />
      <Light v={lightV} baseColor={baseColor} />
    </>
  );
};

export default DimmedLight;