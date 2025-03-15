import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuthenticationStatus } from "@nhost/react";

const Home = () => {
  const { isAuthenticated } = useAuthenticationStatus();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/doodles.png')] bg-cover bg-center bg-fixed">
      <div className="bg-white/70 dark:bg-gray-900/70 p-10 rounded-xl shadow-xl backdrop-blur-md max-w-xl text-center space-y-6">

        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
          Welcome to Newsly AI 📰
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          Your personalized news aggregator powered by AI. Stay updated with what matters to you.
        </p>

        <div className="flex justify-center gap-6">
          {isAuthenticated ? (
            <Button
              onClick={() => navigate("/dashboard")}
              className="px-6 py-3 rounded-lg text-lg"
            >
              Go to Dashboard
            </Button>
          ) : (
            <>
              <Button
                onClick={() => navigate("/login")}
                className="px-6 py-3 rounded-lg text-lg"
              >
                Login
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/signup")}
                className="px-6 py-3 rounded-lg text-lg border-gray-400 dark:border-gray-600"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
