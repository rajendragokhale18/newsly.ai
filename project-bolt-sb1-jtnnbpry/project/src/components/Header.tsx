import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthenticationStatus, useSignOut } from "@nhost/react";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthenticationStatus();
  const { signOut } = useSignOut();

  // Detect and persist dark mode preference
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark' ? true : false;
  });

  // Apply theme on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Theme toggler with persistence
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Handle logout
  const handleLogout = () => {
    signOut();
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      <Link
        to="/"
        className="text-xl font-bold text-gray-800 dark:text-white"
      >
        Newsly AI
      </Link>

      <div className="flex items-center gap-4">
        {/* Dashboard Link when logged in */}
        {isAuthenticated && (
          <Link
            to="/dashboard"
            className="text-gray-800 dark:text-white hover:underline"
          >
            Dashboard
          </Link>
        )}

        {/* Theme Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full transition"
          title="Toggle Theme"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Logout Button */}
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
