
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            onClick={() => navigate('/')}
            className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Terms of Use
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: December 13, 2024</p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using KidDo, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to these terms, 
                please do not use our service.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Use License</h2>
              <p className="text-gray-600 mb-6">
                Permission is granted to temporarily access KidDo for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                The activities and materials provided through KidDo are for educational and 
                entertainment purposes. Adult supervision is recommended for all activities. 
                We are not responsible for any injuries or damages that may occur.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">User Responsibilities</h2>
              <p className="text-gray-600 mb-6">
                Users are responsible for ensuring that all activities are age-appropriate 
                and safe for their children. Parents and guardians should review all activities 
                before allowing children to participate.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitations</h2>
              <p className="text-gray-600 mb-6">
                In no event shall KidDo or its suppliers be liable for any damages arising 
                out of the use or inability to use the materials on KidDo's website.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Use, please contact us at 
                hello@kiddo.app
              </p>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  For the complete and legally binding terms of use, please visit: 
                  <a 
                    href="https://www.freeprivacypolicy.com/live/c6ceda92-21ba-464c-8e9d-024078492392" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline ml-1"
                  >
                    https://www.freeprivacypolicy.com/live/c6ceda92-21ba-464c-8e9d-024078492392
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
