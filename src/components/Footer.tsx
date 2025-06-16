
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                KidDo
              </span>
            </h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-base sm:text-lg">
              Spark Joy, Learn Through Play! 🌟
            </p>
            <p className="text-gray-400 max-w-md text-sm sm:text-base">
              Empowering children aged 2-13 with personalized activities that inspire creativity, build confidence, and create lasting memories.
            </p>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-yellow-400">Support</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li><Link to="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-yellow-400 transition-colors">Terms of Use</Link></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="mailto:hello@kiddo.app" className="hover:text-yellow-400 transition-colors">hello@kiddo.app</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-3 sm:mb-4 md:mb-0 text-sm sm:text-base">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-2 text-red-400 fill-current" />
              <span>for amazing families</span>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 text-center text-gray-500 text-xs sm:text-sm">
            <p>&copy; 2024 KidDo. All rights reserved. Creating magical childhood moments, one activity at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
