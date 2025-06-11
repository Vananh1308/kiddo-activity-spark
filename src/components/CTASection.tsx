
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Spark Your Child's
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Imagination?
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take our free quiz and unlock activities tailored to your child's passions! Join thousands of families already creating magical moments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-800 px-10 py-6 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Now - It's Free! 🚀
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-6 text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Watch Demo Video ▶️
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <p className="text-white font-medium">Download KidDo:</p>
            <div className="flex gap-4">
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center space-x-3">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center space-x-3">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
