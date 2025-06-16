
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Heart } from "lucide-react";

const Hero = () => {
  const handleQuizClick = () => {
    window.open('https://app.kiddo.education/', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-8 sm:right-20 w-8 h-8 sm:w-12 sm:h-12 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 left-8 sm:left-20 w-16 h-16 sm:w-20 sm:h-20 bg-blue-300 rounded-full opacity-25 animate-bounce" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-60 right-20 sm:right-40 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full opacity-40 animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Content Side */}
        <div className="text-center lg:text-left space-y-6 lg:space-y-8">
          
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Unleash Your Child's
            </span>
            <br />
            <span className="text-orange-500">Creativity</span> with KidDo's
            <br />
            <span className="text-green-600">Personalized Activities</span>
            <br />
            <span className="text-purple-600">for Ages 2-13!</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
            Indoor & outdoor games, DIY crafts, and adventures tailored to your child's unique interests through our smart quiz system.
          </p>
          
          <div className="flex justify-center lg:justify-start">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={handleQuizClick}>
              Take the Free Quiz Now! 🎯
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 fill-current" />
              <span className="ml-1">Loved by kids</span>
            </div>
          </div>
        </div>

        {/* Visual Side - Replaced with activity image */}
        <div className="relative mt-8 lg:mt-0">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
            <img 
              src="/lovable-uploads/93aeb01f-a49e-49db-a13b-6ba9f0554ff9.png" 
              alt="Kids playing with colorful parachute - fun outdoor activity" 
              className="w-full h-auto rounded-2xl sm:rounded-3xl transform hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating activity icons with animations */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-yellow-300 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg animate-bounce">
              <span className="text-xl sm:text-2xl">🎨</span>
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-pink-300 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg animate-pulse">
              <span className="text-xl sm:text-2xl">🎯</span>
            </div>
            <div className="absolute top-1/4 -left-2 sm:-left-3 bg-green-300 p-1.5 sm:p-2 rounded-md sm:rounded-lg shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
              <span className="text-lg sm:text-xl">⚽</span>
            </div>
            <div className="absolute bottom-1/4 -right-2 sm:-right-3 bg-blue-300 p-1.5 sm:p-2 rounded-md sm:rounded-lg shadow-lg animate-pulse" style={{animationDelay: '1.5s'}}>
              <span className="text-lg sm:text-xl">🏃‍♂️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
