
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: December 13, 2024</p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                take our quiz, or contact us for support. This may include your child's age, interests, 
                and activity preferences to provide personalized recommendations.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                including personalizing activity recommendations for your child and communicating 
                with you about our services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our service is designed for children ages 2-13. We take special care to protect 
                children's privacy and comply with applicable children's privacy laws. We do not 
                knowingly collect personal information from children without parental consent.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at 
                hello@kiddo.app
              </p>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  For the complete and legally binding privacy policy, please visit: 
                  <a 
                    href="https://www.freeprivacypolicy.com/live/c2562dec-8863-4fda-ae7f-3d2bdf5ef767" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline ml-1"
                  >
                    https://www.freeprivacypolicy.com/live/c2562dec-8863-4fda-ae7f-3d2bdf5ef767
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

export default PrivacyPolicy;
