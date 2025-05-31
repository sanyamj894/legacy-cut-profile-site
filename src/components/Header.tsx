
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo Space 1 */}
          <div className="flex items-center space-x-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border-3 border-blue-300 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group-hover:border-blue-400">
                <span className="text-blue-700 font-bold text-sm tracking-wider">LOGO 1</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">★</span>
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                CutPiece Pro
              </h1>
              <p className="text-sm text-blue-600 font-medium">50 Years of Excellence</p>
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
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 group"
              >
                {item.text}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced Logo Space 2 */}
          <div className="hidden md:block">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse delay-500"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border-3 border-gray-300 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group-hover:border-gray-400">
                <span className="text-gray-700 font-bold text-sm tracking-wider">LOGO 2</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
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
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-blue-50 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </a>
              ))}
            </nav>
            <div className="flex justify-center">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border-3 border-gray-300 shadow-xl">
                  <span className="text-gray-700 font-bold text-sm tracking-wider">LOGO 2</span>
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
