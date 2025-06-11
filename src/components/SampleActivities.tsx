
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

const SampleActivities = () => {
  const activities = [
    {
      title: "Build a Cardboard Castle",
      description: "Transform recycled boxes into a magical fortress where imagination comes to life.",
      age: "Ages 5-7",
      duration: "45 min",
      type: "Indoor",
      emoji: "🏰",
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-50"
    },
    {
      title: "Backyard Treasure Hunt",
      description: "Follow clues and solve riddles in an exciting outdoor adventure that builds problem-solving skills.",
      age: "Ages 8-10",
      duration: "60 min",
      type: "Outdoor",
      emoji: "🗺️",
      color: "from-green-400 to-blue-400",
      bgColor: "bg-green-50"
    },
    {
      title: "Rainbow Science Experiments",
      description: "Discover the magic of colors while learning basic chemistry through safe, fun experiments.",
      age: "Ages 6-9",
      duration: "30 min",
      type: "Indoor",
      emoji: "🔬",
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Nature Art Collage",
      description: "Collect leaves, flowers, and rocks to create beautiful artwork celebrating the outdoors.",
      age: "Ages 4-8",
      duration: "40 min",
      type: "Outdoor",
      emoji: "🍃",
      color: "from-emerald-400 to-green-400",
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Explore Fun Activities
            </span>
            <br />
            <span className="text-green-600">with KidDo!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every activity is crafted to inspire creativity, build skills, and create lasting memories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className={`${activity.bgColor} border-0 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${activity.color} p-6 text-center`}>
                  <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {activity.emoji}
                  </div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {activity.age}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {activity.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {activity.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {activity.type}
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-lg transition-all duration-300"
                  >
                    Try This Activity! ✨
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Discover More Activities! 🎨
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SampleActivities;
