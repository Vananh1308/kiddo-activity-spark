
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [{
    number: "1",
    title: "Quick Quiz",
    description: "Complete a 2-minute quiz about your child's interests and skills.",
    emoji: "📝",
    color: "from-blue-400 to-blue-600"
  }, {
    number: "2",
    title: "Personalized Suggestions",
    description: "Receive a curated list of activities, from games to creative DIY projects.",
    emoji: "🎯",
    color: "from-green-400 to-green-600"
  }, {
    number: "3",
    title: "Dive In & Have Fun",
    description: "Start the fun with detailed guides and easy-to-follow instructions.",
    emoji: "🚀",
    color: "from-purple-400 to-purple-600"
  }];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Get Started in 3 Simple Steps!
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            From quiz to play in under 5 minutes - it's that easy!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 sm:top-24 left-full w-full h-1 bg-gradient-to-r from-gray-200 to-gray-300 z-0 transform translate-x-4"></div>
              )}
              
              <Card className="relative z-10 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{step.emoji}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
