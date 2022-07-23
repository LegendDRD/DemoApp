import React from 'react';
// pages
import Home from './pages/Home';
import NotFoundPage from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
