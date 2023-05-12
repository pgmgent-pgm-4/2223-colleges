import { ThemedButton, ThemedPanel } from "../components";
import { MapboxBasic } from "../components/maps";

const HomePage = () => {
  return (
    <>
      <h1>HOME</h1>
      <MapboxBasic />
      <ThemedButton />
      <ThemedPanel />
    </>
  )
};

export default HomePage;