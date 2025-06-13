import { Card, CardContent } from "@/components/ui/card";
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
      bgColor: "bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50",
      image: "/lovable-uploads/57e94d2f-00e7-42d9-93e9-0e40e29d9f8c.png"
    },
    {
      title: "Sack Race Adventure",
      description: "Hop, jump, and laugh in this classic outdoor game that builds coordination and teamwork.",
      age: "Ages 6-10",
      duration: "30 min",
      type: "Outdoor",
      emoji: "🏃‍♂️",
      color: "from-green-400 to-blue-400",
      bgColor: "bg-gradient-to-br from-green-100 via-blue-50 to-green-50",
      image: "/lovable-uploads/9137c093-7714-489e-863a-1f681f6d2303.png"
    },
    {
      title: "Rainbow Science Experiments",
      description: "Discover the magic of colors while learning basic chemistry through safe, fun experiments.",
      age: "Ages 6-9",
      duration: "30 min",
      type: "Indoor",
      emoji: "🔬",
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-50",
      image: "/lovable-uploads/0f2424c8-438d-4528-9d6e-b5dce1cef90c.png"
    },
    {
      title: "Nature Art Collage",
      description: "Collect leaves, flowers, and rocks to create beautiful artwork celebrating the outdoors.",
      age: "Ages 4-8",
      duration: "40 min",
      type: "Outdoor",
      emoji: "🍃",
      color: "from-emerald-400 to-green-400",
      bgColor: "bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-50",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop"
    },
    {
      title: "Water Bucket Challenge",
      description: "Cool summer fun with exciting water games that promote teamwork and coordination.",
      age: "Ages 5-10",
      duration: "35 min",
      type: "Outdoor",
      emoji: "💧",
      color: "from-blue-400 to-purple-400",
      bgColor: "bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50",
      image: "/lovable-uploads/8e4231c0-9425-4882-8a29-f1ec069ca7f3.png"
    },
    {
      title: "Garden Adventure",
      description: "Plant seeds, water flowers, and discover the magic of growing your own garden.",
      age: "Ages 5-9",
      duration: "50 min",
      type: "Outdoor",
      emoji: "🌱",
      color: "from-green-400 to-yellow-400",
      bgColor: "bg-gradient-to-br from-green-100 via-yellow-50 to-green-50",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
    },
    {
      title: "DIY Slime Workshop",
      description: "Create colorful, stretchy slime with safe ingredients and learn about polymers.",
      age: "Ages 6-11",
      duration: "25 min",
      type: "Indoor",
      emoji: "🟢",
      color: "from-pink-400 to-red-400",
      bgColor: "bg-gradient-to-br from-pink-100 via-red-50 to-pink-50",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      title: "Colorful Parachute Play",
      description: "Work together with colorful parachutes in this exciting group activity full of teamwork and fun.",
      age: "Ages 4-10",
      duration: "30 min",
      type: "Outdoor",
      emoji: "🎪",
      color: "from-cyan-400 to-blue-400",
      bgColor: "bg-gradient-to-br from-cyan-100 via-blue-50 to-cyan-50",
      image: "/lovable-uploads/cf36f7c8-84bf-4af1-8db9-517b9e4f0601.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Enhanced playful background elements with kid activity themes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating activity icons */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce" style={{animationDelay: '0s'}}>🎨</div>
        <div className="absolute top-20 right-20 text-3xl animate-pulse" style={{animationDelay: '1s'}}>⚽</div>
        <div className="absolute top-40 left-1/4 text-3xl animate-bounce" style={{animationDelay: '2s'}}>🧩</div>
        <div className="absolute top-60 right-1/3 text-4xl animate-pulse" style={{animationDelay: '1.5s'}}>🎭</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>🏃‍♀️</div>
        <div className="absolute bottom-60 right-40 text-4xl animate-pulse" style={{animationDelay: '2.5s'}}>🎪</div>
        <div className="absolute bottom-20 left-1/3 text-3xl animate-bounce" style={{animationDelay: '3s'}}>🎯</div>
        
        {/* Colorful geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-40 w-12 h-12 bg-green-200 rounded-full opacity-35 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-18 h-18 bg-purple-200 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Kid-themed decorative elements */}
        <div className="absolute top-32 right-1/4 w-8 h-8 bg-orange-300 rotate-45 opacity-40 animate-spin" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-red-300 rounded-full opacity-35 animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className={`${activity.bgColor} border-0 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer overflow-hidden`}
            >
              <CardContent className="p-0">
                {/* Image header */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {activity.emoji}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
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
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {activity.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {activity.type}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleActivities;
