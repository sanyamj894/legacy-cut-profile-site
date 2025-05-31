
import { Shirt, Scissors, Package, Layers } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      icon: <Shirt className="w-12 h-12" />,
      title: "Fabric Cut-Pieces",
      description: "Premium fabric pieces cut to your exact specifications",
      items: ["Cotton fabrics", "Silk materials", "Synthetic blends", "Designer patterns"]
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Custom Cutting Services",
      description: "Professional cutting services for various materials",
      items: ["Precision cutting", "Bulk orders", "Special shapes", "Technical cuts"]
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Industrial Solutions",
      description: "Large-scale cutting solutions for businesses",
      items: ["Manufacturing support", "Wholesale pricing", "Quality assurance", "Fast delivery"]
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Specialty Materials",
      description: "Unique and hard-to-find material cutting",
      items: ["Leather pieces", "Technical fabrics", "Upholstery materials", "Craft supplies"]
    }
  ];

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of cut-piece solutions, each backed by 
            50 years of expertise and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-500 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need something specific? We offer custom solutions for unique requirements.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
