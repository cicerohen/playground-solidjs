import { Router, Route, Routes } from 'solid-app-router';
import { HomeViewContainer } from './views/HomeViewContainer';

export const AppContainer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeViewContainer />} />
      </Routes>
    </Router>
  );
};
