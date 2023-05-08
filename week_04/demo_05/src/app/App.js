// Import external modulew
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import custom modules
import { useFetch } from './hooks';
import { AboutPage, ContactPage, HomePage, PostDetailsPage, PostsPage } from './pages';
import { Header } from './components/layout';
import { ROUTES } from './routes';

// Import styling
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
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
  );
}

export default App;
