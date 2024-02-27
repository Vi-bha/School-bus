import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update import

import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <Routes> {/* Wrap your routes inside the <Routes> element */}
        <Route path="/" element={<LandingPage />} /> {/* Use the 'element' prop */}
        <Route path="/auth" element={<AuthPage />} /> {/* Use the 'element' prop */}
        <Route path="/admin" element={<AdminPage />} /> {/* Use the 'element' prop */}
      </Routes>
    </Router>
  );
}

export default App;
