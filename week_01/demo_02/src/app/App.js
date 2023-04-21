import './App.css';
import { Greeting, Student }  from './components';

// Import custom modules
import StudentsData from './data/students.json';

function App() {
  return (
    <div className="app">
      <Greeting message='Hello World' />
      <Greeting message="It's me Mario" />
      <Greeting message='Eid mubarak' />
      <Student fullName={`Philippe Shady`} avatarUrl={`https://api.multiavatar.com/Philippe Shady.png`} />
      <Student fullName={`Sandy Barby`} avatarUrl={`https://api.multiavatar.com/Sandy Barby.png`} />

      { StudentsData && StudentsData.results.map((student, index) => <p key={index}>STUDENT { (index + 1) }</p>) }
    </div>
  );
}

export default App;
