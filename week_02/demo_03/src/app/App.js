// Styling
import './App.css';
import { Clock, ThemeMode } from './components';

function App() {
  return (
    <div className="App">
      <ThemeMode />
      <Clock city={`Ghent`} utc={1} />
      <Clock city={`New York`} utc={-6} />
    </div>
  );
}

export default App;
