import React, { useEffect } from 'react';
import { useAuthenticationStatus, useUserData, useSignOut } from '@nhost/react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const { user } = useUserData();
  const { signOut } = useSignOut();
  const navigate = useNavigate();

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative min-h-[90vh] p-6">
      {/* Doodle Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/doodles.png')]"></div>

      {/* Main Content */}
      <div className="relative z-10 space-y-6">
        {/* Welcome Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome back, {user?.displayName || 'User'}! 🎉
          </h1>
          <Button variant="outline" onClick={signOut}>
            Logout
          </Button>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Saved Articles */}
          <Link
            to="/saved"
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition group"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-primary">
              📚 Saved Articles
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">View and manage your saved articles.</p>
          </Link>

          {/* Card 2 - Preferences */}
          <Link
            to="/preferences"
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition group"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-primary">
              ⚙️ Preferences
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Customize your news feed preferences.</p>
          </Link>

          {/* Card 3 - Explore AI News */}
          <Link
            to="/explore"
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition group"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-primary">
              🤖 Explore AI News
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Discover AI-generated trending news.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
