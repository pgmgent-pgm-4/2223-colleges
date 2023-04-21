// Import custom modules
import { Person, Rectangle } from './components';

// Data


// Styling
import './App.css';

function App() {
  return (
    <div className="app">
      <Rectangle l={120} b={40} />
      <Rectangle l={60} b={240} />
      <Rectangle l={800} b={120} />

      <Person firstName={`Olivier`} lastName={`Pieters`} pictureUrl={`https://api.multiavatar.com/Olivier Pieters.png`} weight={200} length={1.15}/>
      <Person firstName={`Lea`} lastName={`Star Wars`} pictureUrl={`https://api.multiavatar.com/Lea Star Wars.png`} weight={65} length={1.72}/>
      <Person firstName={`Kutlu`} lastName={`Ismail`} pictureUrl={`https://api.multiavatar.com/Kutlu Ismail.png`} weight={65} length={1.80}/>
      <Person firstName={`Zoltan`} lastName={`Golang`} pictureUrl={`https://api.multiavatar.com/Zoltan Golang.png`} weight={75} length={1.79}/>
    </div>
  );
}

export default App;
