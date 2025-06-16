
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="container mx-auto">
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src="/lovable-uploads/97720939-e7e5-4f3a-a5ce-61e3ad42f04d.png" 
            alt="KidDo Logo" 
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KidDo
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">Spark Joy, Learn Through Play!</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
