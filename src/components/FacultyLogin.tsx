import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

const FacultyLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      console.log(res.data); // Handle token or redirect
      alert("Login Successful!");
      navigate('/faculty-dashboard'); // adjust route as needed
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <div className="min-h-[50vh] lg:min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        {/* Navigation tabs */}
        <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
          <Link
            to="/student-login"
            className={`flex-1 py-2 px-4 text-center text-sm font-medium rounded-md transition-colors ${
              location.pathname === '/student-login'
                ? 'bg-white text-[#0d47a1] shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Student
          </Link>
          <Link
            to="/faculty-login"
            className={`flex-1 py-2 px-4 text-center text-sm font-medium rounded-md transition-colors ${
              location.pathname === '/faculty-login'
                ? 'bg-[#0d47a1] text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Faculty
          </Link>
        </div>

        {/* Login form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Logging in as Faculty
          </h2>

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Faculty ID or Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Faculty ID or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d47a1] focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-[#0d47a1] hover:text-blue-800 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d47a1] focus:border-transparent transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-[#0d47a1] focus:ring-[#0d47a1] border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-[#0d47a1] text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0d47a1] focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FacultyLogin;
