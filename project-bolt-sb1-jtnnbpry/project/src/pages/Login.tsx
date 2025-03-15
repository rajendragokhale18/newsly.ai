import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { nhost } from '@/lib/nhost';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await nhost.auth.signIn({
      email,
      password,
    });
    if (error) {
      alert(`Login Failed: ${error.message}`);
    } else {
      alert('Login Successful!');
      navigate('/dashboard'); // Redirect to dashboard
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/doodles.png')] bg-cover bg-center bg-fixed p-4">
      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl shadow-lg p-8 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          />
          <Button type="submit" className="w-full">Login</Button>
        </form>
        <div className="text-center">
          Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
