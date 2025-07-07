import React from 'react';
import { BookOpen, Calendar, TrendingUp, Star } from 'lucide-react';

const LeftPanel: React.FC = () => {
  return (
    <div className="bg-[#0d47a1] lg:w-1/2 min-h-[50vh] lg:min-h-screen relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-800/30"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-blue-200/10 rounded-full blur-lg"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
      
      <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-center h-full">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center justify-center lg:justify-start mb-2">
            <div className="bg-white rounded-full p-3 mr-3">
              <div className="w-8 h-8 bg-[#0d47a1] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-wide">
              CAMPUS
              <span className="block text-orange-400">CORE</span>
            </h1>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-center lg:text-left leading-tight">
          Welcome to Your Academic Journey
        </h2>

        {/* Description */}
        <p className="text-blue-100 text-lg mb-12 text-center lg:text-left leading-relaxed">
          Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
        </p>

        {/* Feature icons */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 mb-3 inline-block">
              <BookOpen className="w-8 h-8 text-white mx-auto" />
            </div>
            <p className="text-blue-100 text-sm font-medium">Course Management</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 mb-3 inline-block">
              <Calendar className="w-8 h-8 text-white mx-auto" />
            </div>
            <p className="text-blue-100 text-sm font-medium">Schedule Tracking</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 mb-3 inline-block">
              <TrendingUp className="w-8 h-8 text-white mx-auto" />
            </div>
            <p className="text-blue-100 text-sm font-medium">Progress Analytics</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-blue-600/20 backdrop-blur-md rounded-xl p-6 border border-blue-400/20">
          <div className="flex items-center mb-4">
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-blue-100 mb-4 italic">
            "As a professor, I appreciate how simple it is to communicate schedule changes to my students. This platform is intuitive and saves me hours each week."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-semibold text-sm">MT</span>
            </div>
            <div>
              <p className="text-white font-medium">Dr. Michele T.</p>
              <p className="text-blue-200 text-sm">Engineering Faculty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;