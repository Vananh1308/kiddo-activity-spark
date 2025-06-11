
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Mom of Emma, 7",
      content: "KidDo's crafts keep my daughter entertained for hours. The quiz made it so easy to find what she loves!",
      rating: 5,
      avatar: "👩‍🦰",
      bgColor: "from-pink-100 to-rose-100"
    },
    {
      name: "James R.",
      role: "Dad of Alex & Mia",
      content: "My kids, 4 and 10, both found activities they enjoy. It's perfect for different ages!",
      rating: 5,
      avatar: "👨‍🦲",
      bgColor: "from-blue-100 to-cyan-100"
    },
    {
      name: "Lisa K.",
      role: "Mom of twins, 6",
      content: "The outdoor activities got my twins off screens and into nature. They're obsessed with treasure hunts now!",
      rating: 5,
      avatar: "👩‍🦱",
      bgColor: "from-green-100 to-emerald-100"
    },
    {
      name: "Mike D.",
      role: "Dad of Sophie, 9",
      content: "Sophie's confidence has grown so much through KidDo's DIY projects. She's become our little engineer!",
      rating: 5,
      avatar: "👨‍🦳",
      bgColor: "from-purple-100 to-violet-100"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Why Parents and Kids
            </span>
            <br />
            <span className="text-purple-600">Love KidDo!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of families creating magical memories together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${testimonial.bgColor} border-0 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
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

export default Testimonials;
