import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router';
import AuthPage from './components/Pages/AuthPage';
import MainPage from './components/Pages/MainPage';
import FavPage from './components/Pages/FavPage';
import AppNavbar from './components/UI/AppNavbar';

function App(): JSX.Element {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/auth/:type" element={<AuthPage />} /> */}
        <Route path="/favorites" element={<FavPage />} />
      </Routes>
    </>
  );
}

export default App;
