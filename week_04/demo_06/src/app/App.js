// Import external modulew
import { Routes, Route } from 'react-router-dom';

// Import custom modules
import { HomePage } from './pages';
import { ROUTES } from './routes';

// Import styling
import './App.css';
import { Navigation, ThemeToggle } from './components';
import { ThemeProvider } from './contexts/theme.context';
import { UserProvider } from './contexts/user.context';

function App() {
  return (
    <div className="app">
      <UserProvider>
        <ThemeProvider>
          <Navigation />
          <ThemeToggle />
          <main>
            <Routes>
              <Route path={ROUTES.Home} element={<HomePage />} />
            </Routes>
          </main>
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;


