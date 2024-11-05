import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks';
import Home from './pages/Home';
import Navbar from './components/navbar/NavBar';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext'; // Adjust path as necessary

const App: React.FC = () => {
  return (
    <AuthProvider> {/* Wrap App with AuthProvider */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/tasks" element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;