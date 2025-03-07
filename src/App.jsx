import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SVGSprite from './components/SVGSprite';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import LoginSection from './Pages/Login';
import Registration from './Pages/RegistrationPage';
import InterestPage from './Pages/Interest';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/registration", "/interest"];

  return (
    <>
      <SVGSprite />
      {!hideHeaderRoutes.includes(location.pathname.toLowerCase()) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/interest" element={<InterestPage/>} />
        <Route path="/shop" element={<div>Shop Page Coming Soon...</div>} />
      </Routes>
    </>
  );
}

export default App;
