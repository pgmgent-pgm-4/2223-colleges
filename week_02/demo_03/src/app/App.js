// Import external modules
import { useState } from 'react';

// Import custom modules
import { Clock, ThemeMode } from './components';
import { TagCloud } from './components/tags';
import { GuestGreeting, Mailbox, UserGreeting } from './components/hello';

// Data
import tagCloudData from './data/tag-cloud.json';

// Styling
import './App.css';
import { TemperatureCalculator } from './components/temperature';
import { DimmedLight } from './components/lights';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <DimmedLight />
      <DimmedLight baseColor={`#FF8899`} />
      <TagCloud data={tagCloudData} />
      { isLoggedIn ? <UserGreeting/> : <GuestGreeting />}
      <Mailbox unreadMessages={100} />
      <TemperatureCalculator />
      {/* <ThemeMode />
      <Clock city={`Ghent`} utc={1} />
      <Clock city={`New York`} utc={-6} /> */}
    </div>
  );
}

export default App;
