import React from 'react';
import LeftPanel from './LeftPanel';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row">
        <LeftPanel />
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-white lg:bg-gray-50">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;