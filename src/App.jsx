import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Accueil from './components/Accueil';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Livre from './components/Livre';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/livre" element={<Livre />} /> 
      </Routes>
        <Footer />
    </>
  );
}

export default App;