import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import Root from './pages/Root.tsx';
const HomePage = lazy(() => import('./pages/Home.tsx'));
const SessionPage = lazy(() => import('./pages/Session.tsx'));
const SessionsPage = lazy(() => import('./pages/Sessions.tsx'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path='sessions' element={<SessionsPage />} />
          <Route path='sessions/:id' element={<SessionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
