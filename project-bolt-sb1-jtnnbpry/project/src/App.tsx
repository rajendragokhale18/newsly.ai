import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthenticationStatus } from '@nhost/react';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from 'react-hot-toast';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Preferences from './pages/Preferences';
import SavedArticles from './pages/SavedArticles';

// Components
import Header from './components/Header';

/**
 * Component to handle authentication-aware routing
 */
const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/signup" element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignUp />} />
      {isAuthenticated ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/saved" element={<SavedArticles />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};

/**
 * Main App Component
 */
const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="newsly-theme">
    <Router>
      <div className="min-h-screen bg-background doodle-bg">
        <Header />
        <AppRoutes />
        <Toaster position="top-right" />
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
