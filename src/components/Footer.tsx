import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          <div className="flex items-center mb-2 lg:mb-0">
            <Github className="w-5 h-5 mr-2" />
            <span className="text-sm">Designed and developed by ZoroTeam</span>
          </div>
          <div className="text-sm">
            © 2025 Zoro innovations
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm">Anish S</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;