
import { Award, Users, Clock, Star } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "50 Years",
      description: "Of industry experience"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "1000+",
      description: "Satisfied customers"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium",
      description: "Quality materials"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Expert",
      description: "Craftsmanship"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Legacy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Since 1974, we've been at the forefront of the cut-piece industry, 
            combining traditional craftsmanship with modern techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4">
              What started as a small family business in 1974 has grown into one of the most 
              trusted names in cut-piece solutions. Our commitment to quality, precision, and 
              customer satisfaction has remained unwavering throughout our 50-year journey.
            </p>
            <p className="text-gray-600 mb-6">
              We've witnessed the evolution of the industry and have continuously adapted our 
              methods while maintaining the core values that built our reputation: integrity, 
              quality, and exceptional service.
            </p>
            <div className="flex items-center text-blue-600">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-medium">Industry Leader Since 1974</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
              alt="Our workspace" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-blue-600 mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
