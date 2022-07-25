// import { useEffect, useState } from 'react';
// pages
import NotFoundPage from './pages/NotFound';
import Home from './pages/User';
import Organisation from './pages/Organisation';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>

      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="orginisation" element={<Organisation />} />
          <Route path="login" element={<Login />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;
