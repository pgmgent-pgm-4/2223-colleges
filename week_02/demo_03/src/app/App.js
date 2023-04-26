// Import custom modules
import { Clock, ThemeMode } from './components';
import { TagCloud } from './components/tags';

// Data
import tagCloudData from './data/tag-cloud.json';

// Styling
import './App.css';

function App() {
  return (
    <div className="App">
      <TagCloud data={tagCloudData} />
      {/* <ThemeMode />
      <Clock city={`Ghent`} utc={1} />
      <Clock city={`New York`} utc={-6} /> */}
    </div>
  );
}

export default App;
