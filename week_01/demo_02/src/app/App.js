// Import custom modules
import { DigitalClock, Greeting, Student, ThemeSwitch }  from './components';

// Data
import StudentsData from './data/students.json';

// Styling
import './App.css';

function App() {
  return (
    <div className="app">
      <ThemeSwitch />
      <DigitalClock />

      <Greeting message='Hello World' />
      <Greeting message="It's me Mario" />
      <Greeting message='Eid mubarak' />
      <Student fullName={`Philippe Shady`} avatarUrl={`https://api.multiavatar.com/Philippe Shady.png`} />
      <Student fullName={`Sandy Barby`} avatarUrl={`https://api.multiavatar.com/Sandy Barby.png`} />

      { StudentsData && StudentsData.results.map((student, index) => <Student key={index} fullName={`${student.name.first} ${student.name.last}`} avatarUrl={`${student.picture.large}`} />) }

      
    </div>
  );
}

export default App;
