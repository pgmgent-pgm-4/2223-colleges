// Import external modulew
import { Routes, Route } from 'react-router-dom';

// Import custom modules
import { HomePage } from './pages';
import { ROUTES } from './routes';

// Import styling
import './App.css';
import { ThemeToggle } from './components';
import { ThemeProvider } from './contexts/theme.context';

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <ThemeToggle />
        <main>
          <Routes>
            <Route path={ROUTES.Home} element={<HomePage />} />
          </Routes>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;


