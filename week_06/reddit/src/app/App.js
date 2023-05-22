// Import external modulew
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import custom modules
import { AboutPage, ContactPage, HomePage, PostDetailsPage, PostsPage } from './pages';
import { ROUTES } from './routes';

// Import styling
import './App.css';
import { HygraphProvider } from './contexts/hygraph.context';

function App() {
  return (
    <HygraphProvider>
      <div className="app">
        <main>
          <Routes>
            <Route path={ROUTES.Home} element={<HomePage />} />
            <Route path={ROUTES.Posts}>
              <Route index element={<PostsPage />} />
              <Route path=":postId" element={<PostDetailsPage />} />
            </Route>
            <Route path={ROUTES.About} element={<AboutPage />} />
            <Route path={ROUTES.Contact} element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </HygraphProvider>
  );
}

export default App;
