
import { Shirt, Scissors, Package, Layers } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      icon: <Shirt className="w-12 h-12" />,
      title: "Fabric Cut-Pieces",
      description: "Premium fabric pieces cut to your exact specifications",
      items: ["Cotton fabrics", "Silk materials", "Synthetic blends", "Designer patterns"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Custom Cutting Services",
      description: "Professional cutting services for various materials",
      items: ["Precision cutting", "Bulk orders", "Special shapes", "Technical cuts"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Industrial Solutions",
      description: "Large-scale cutting solutions for businesses",
      items: ["Manufacturing support", "Wholesale pricing", "Quality assurance", "Fast delivery"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Specialty Materials",
      description: "Unique and hard-to-find material cutting",
      items: ["Leather pieces", "Technical fabrics", "Upholstery materials", "Craft supplies"],
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-classic-navy mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-classic-stone max-w-2xl mx-auto">
            Discover our comprehensive range of cut-piece solutions, each backed by 
            50 years of expertise and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="card-interactive group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="p-6 relative z-10">
                <div className={`text-white mb-6 p-4 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 inline-block`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-classic-navy mb-3 group-hover:text-classic-charcoal transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-classic-stone mb-4 group-hover:text-gray-600 transition-colors duration-300">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-500 flex items-center group-hover:text-gray-600 transition-colors duration-300">
                      <span className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${category.gradient} group-hover:scale-125 transition-transform duration-300`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className={`text-white font-semibold px-4 py-2 rounded-lg bg-gradient-to-r ${category.gradient} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group/btn`}>
                  <span className="relative z-10">Learn More →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-slide-in-up">
          <p className="text-classic-stone mb-6 text-lg">
            Need something specific? We offer custom solutions for unique requirements.
          </p>
          <button className="btn-classic-primary group">
            <span className="relative z-10">Request Custom Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
