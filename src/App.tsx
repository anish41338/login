import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import StudentLogin from './components/StudentLogin';
import FacultyLogin from './components/FacultyLogin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/student-login" replace />} />
          <Route path="/student-login" element={<Layout><StudentLogin /></Layout>} />
          <Route path="/faculty-login" element={<Layout><FacultyLogin /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;