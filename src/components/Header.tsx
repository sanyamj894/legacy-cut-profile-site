
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Left Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm p-2">
              <img 
                src="/lovable-uploads/9736b53a-1a5d-4bb5-b17e-6e0c695d0bdc.png" 
                alt="NP Shah Nihalchand Padamchand Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-serif font-semibold text-gray-800">
                CutPiece Pro
              </h1>
              <p className="text-sm text-gray-600">Since 1974</p>
            </div>
          </div>

          {/* Navigation */}
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
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-gray-300"
              >
                {item.text}
              </a>
            ))}
          </nav>

          {/* Right Logo */}
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm p-2">
              <img 
                src="/lovable-uploads/fe6fbfbd-a2e8-4e3c-96cc-b8282d3ddacf.png" 
                alt="Vijay Fabrics Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-3">
            <nav className="flex flex-col space-y-2 pt-4">
              {[
                { href: "#home", text: "Home" },
                { href: "#about", text: "About" },
                { href: "#categories", text: "Services" },
                { href: "#contact", text: "Contact" }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </a>
              ))}
            </nav>
            <div className="flex justify-center space-x-6 mt-4 pt-4 border-t border-gray-200">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 p-2">
                <img 
                  src="/lovable-uploads/9736b53a-1a5d-4bb5-b17e-6e0c695d0bdc.png" 
                  alt="NP Shah Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 p-2">
                <img 
                  src="/lovable-uploads/fe6fbfbd-a2e8-4e3c-96cc-b8282d3ddacf.png" 
                  alt="Vijay Fabrics Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
