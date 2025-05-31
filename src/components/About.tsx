
import { Award, Users, Clock, Star } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "50 Years",
      description: "Of industry experience",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "1000+",
      description: "Satisfied customers",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium",
      description: "Quality materials",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Expert",
      description: "Craftsmanship",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-50/40 to-purple-50/40 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-classic-navy mb-4">
            About Our Legacy
          </h2>
          <p className="text-lg text-classic-stone max-w-2xl mx-auto">
            Since 1974, we've been at the forefront of the cut-piece industry, 
            combining traditional craftsmanship with modern techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-up">
            <h3 className="text-2xl font-bold text-classic-navy mb-6">Our Story</h3>
            <p className="text-classic-stone mb-4 leading-relaxed">
              What started as a small family business in 1974 has grown into one of the most 
              trusted names in cut-piece solutions. Our commitment to quality, precision, and 
              customer satisfaction has remained unwavering throughout our 50-year journey.
            </p>
            <p className="text-classic-stone mb-6 leading-relaxed">
              We've witnessed the evolution of the industry and have continuously adapted our 
              methods while maintaining the core values that built our reputation: integrity, 
              quality, and exceptional service.
            </p>
            <div className="flex items-center text-classic-navy group hover:text-classic-charcoal transition-colors duration-300">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-white mr-3 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-semibold">Industry Leader Since 1974</span>
            </div>
          </div>
          <div className="animate-scale-in">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover-lift-subtle hover-glow transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Our workspace" 
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-white hover-lift-subtle hover-glow transition-all duration-300 group animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`text-white mb-4 flex justify-center p-4 rounded-xl bg-gradient-to-br ${achievement.gradient} shadow-lg mx-auto w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {achievement.icon}
              </div>
              <h4 className="text-2xl font-bold text-classic-navy mb-2 group-hover:text-classic-charcoal transition-colors duration-300">
                {achievement.title}
              </h4>
              <p className="text-classic-stone group-hover:text-gray-600 transition-colors duration-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
