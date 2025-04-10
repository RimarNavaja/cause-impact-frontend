
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, CreditCard, UserRound, Settings, LogOut } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface DonorLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DonorLayout: React.FC<DonorLayoutProps> = ({ children, title }) => {
  const location = useLocation();
  
  const navItems = [
    { 
      path: '/donor/dashboard', 
      label: 'Dashboard', 
      icon: <LayoutDashboard className="w-5 h-5" /> 
    },
    { 
      path: '/donor/donations', 
      label: 'My Donations', 
      icon: <CreditCard className="w-5 h-5" /> 
    },
    { 
      path: '/donor/profile', 
      label: 'My Profile', 
      icon: <UserRound className="w-5 h-5" /> 
    },
    { 
      path: '/donor/settings', 
      label: 'Settings', 
      icon: <Settings className="w-5 h-5" /> 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow flex flex-col md:flex-row bg-clearcause-background">
        {/* Sidebar */}
        <aside className="bg-white w-full md:w-64 md:min-h-[calc(100vh-4rem)] shadow-sm">
          <div className="p-4 md:p-6 h-full">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 hidden md:block">Donor Account</h2>
            
            <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible py-2 md:py-0">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${isActive 
                      ? 'bg-clearcause-primary/10 text-clearcause-primary' 
                      : 'text-gray-600 hover:text-clearcause-primary hover:bg-gray-100'
                    }
                  `}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </NavLink>
              ))}
              
              <NavLink
                to="/login"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-red-500 hover:bg-red-50 mt-8 md:mt-auto"
              >
                <LogOut className="w-5 h-5" />
                <span className="ml-3">Logout</span>
              </NavLink>
            </div>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-grow p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{title}</h1>
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DonorLayout;
