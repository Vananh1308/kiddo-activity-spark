
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Layers, Users, BookOpen, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Personalized Quiz",
      description: "Answer a quick quiz to unlock activities perfectly matched to your child's age and interests.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Layers,
      title: "500+ Activities",
      description: "Explore indoor puzzles, crafts, and outdoor nature adventures with active games for every mood.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Age-Appropriate Content",
      description: "Activities designed for specific age groups: 2-4, 5-7, 8-10, and 11-13 years old.",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: BookOpen,
      title: "Step-by-Step Guides",
      description: "Each activity includes easy-to-follow instructions, material lists, and helpful parent tips.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Calendar,
      title: "Weekly Updates",
      description: "New activities added weekly to keep your child excited, engaged, and always learning.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why KidDo is Perfect
            </span>
            <br />
            <span className="text-orange-500">for Your Child</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Every feature is designed to spark creativity, build confidence, and create magical learning moments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`${feature.bgColor} border-0 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer`}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
