
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Left Logo with enhanced hover */}
          <div className="flex items-center space-x-4 group">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-md p-2 hover-lift-subtle hover-glow transition-all duration-300 relative overflow-hidden">
              <img 
                src="/lovable-uploads/9736b53a-1a5d-4bb5-b17e-6e0c695d0bdc.png" 
                alt="NP Shah Nihalchand Padamchand Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-serif font-bold text-classic-navy group-hover:text-classic-charcoal transition-colors duration-300">
                CutPiece Pro
              </h1>
              <p className="text-sm text-classic-stone">Since 1974</p>
            </div>
          </div>

          {/* Navigation with enhanced hover effects */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "#home", text: "Home" },
              { href: "#about", text: "About" },
              { href: "#categories", text: "Services" },
              { href: "#contact", text: "Contact" }
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="relative text-classic-charcoal hover:text-classic-navy transition-all duration-300 font-semibold py-2 px-4 rounded-lg group overflow-hidden"
              >
                <span className="relative z-10">{item.text}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-classic-navy to-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Right Logo with enhanced hover */}
          <div className="hidden md:block group">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-md p-2 hover-lift-subtle hover-glow transition-all duration-300 relative overflow-hidden">
              <img 
                src="/lovable-uploads/fe6fbfbd-a2e8-4e3c-96cc-b8282d3ddacf.png" 
                alt="Vijay Fabrics Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Mobile menu button with animation */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile menu with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-4 border-t border-gray-200 mt-3">
            <nav className="flex flex-col space-y-2 pt-4">
              {[
                { href: "#home", text: "Home" },
                { href: "#about", text: "About" },
                { href: "#categories", text: "Services" },
                { href: "#contact", text: "Contact" }
              ].map((item, index) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-classic-charcoal hover:text-classic-navy transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 active:scale-95 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {item.text}
                </a>
              ))}
            </nav>
            <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-200">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 p-2 hover-lift-subtle transition-all duration-300">
                <img 
                  src="/lovable-uploads/9736b53a-1a5d-4bb5-b17e-6e0c695d0bdc.png" 
                  alt="NP Shah Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 p-2 hover-lift-subtle transition-all duration-300">
                <img 
                  src="/lovable-uploads/fe6fbfbd-a2e8-4e3c-96cc-b8282d3ddacf.png" 
                  alt="Vijay Fabrics Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
