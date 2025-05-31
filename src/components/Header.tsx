
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo Space 1 - NP Logo */}
          <div className="flex items-center space-x-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative w-24 h-24 bg-white rounded-2xl flex items-center justify-center border-3 border-red-300 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group-hover:border-red-400 p-2">
                <img 
                  src="/lovable-uploads/9736b53a-1a5d-4bb5-b17e-6e0c695d0bdc.png" 
                  alt="NP Shah Nihalchand Padamchand Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-xs font-bold">50</span>
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent animate-fade-in">
                CutPiece Pro
              </h1>
              <p className="text-sm text-red-600 font-medium animate-slide-in-right">50 Years of Excellence</p>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "#home", text: "Home" },
              { href: "#about", text: "About" },
              { href: "#categories", text: "Categories" },
              { href: "#contact", text: "Contact" }
            ].map((item, index) => (
              <a 
                key={item.href}
                href={item.href} 
                className="relative text-gray-700 hover:text-red-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-red-50 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.text}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced Logo Space 2 - Vijay Fabrics Logo */}
          <div className="hidden md:block">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse delay-500"></div>
              <div className="relative w-24 h-24 bg-white rounded-2xl flex items-center justify-center border-3 border-purple-300 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group-hover:border-purple-400 p-2">
                <img 
                  src="/lovable-uploads/fe6fbfbd-a2e8-4e3c-96cc-b8282d3ddacf.png" 
                  alt="Vijay Fabrics Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="transform transition-transform duration-300">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <nav className="flex flex-col space-y-4 mb-6">
              {[
                { href: "#home", text: "Home" },
                { href: "#about", text: "About" },
                { href: "#categories", text: "Categories" },
                { href: "#contact", text: "Contact" }
              ].map((item, index) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-700 hover:text-red-600 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-red-50 font-medium animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </a>
              ))}
            </nav>
            <div className="flex justify-center space-x-6">
              <div className="group relative">
                <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center border-3 border-red-300 shadow-xl p-2">
                  <img 
                    src="/lovable-uploads/9736b53a-1a5d-4bb5-b17e-6e0c695d0bdc.png" 
                    alt="NP Shah Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="group relative">
                <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center border-3 border-purple-300 shadow-xl p-2">
                  <img 
                    src="/lovable-uploads/fe6fbfbd-a2e8-4e3c-96cc-b8282d3ddacf.png" 
                    alt="Vijay Fabrics Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
