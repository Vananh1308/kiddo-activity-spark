
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CTASection = () => {
  const handleStartNowClick = () => {
    window.open('https://app.kiddo.education/', '_blank');
  };

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/kiddo-kid-activity-ideas/id6746712255', '_blank');
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Ready to Spark Your Child's
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Imagination?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Take our free quiz and unlock activities tailored to your child's passions! Join thousands of families already creating magical moments.
          </p>
          
          <div className="flex justify-center mb-8 sm:mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-800 px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleStartNowClick}
            >
              Start Now - It's Free! 🚀
            </Button>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            <p className="text-white font-medium">Download KidDo:</p>
            <Button className="bg-black hover:bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center space-x-2 sm:space-x-3" onClick={handleAppStoreClick}>
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-bold text-sm sm:text-base">App Store</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
