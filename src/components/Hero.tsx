
const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-blue-700 text-sm font-medium mb-8 animate-fade-in shadow-lg border border-blue-200">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 animate-pulse"></span>
            Established 1974 • 50 Years of Excellence
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 animate-fade-in">
            <span className="block transform hover:scale-105 transition-transform duration-300">50 Years of</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 transform hover:scale-105 transition-transform duration-300">
              Cut-Piece Excellence
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            For five decades, we've been providing premium cut-piece solutions to businesses and individuals. 
            Our commitment to quality and precision has made us a trusted name in the industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <span className="flex items-center justify-center">
                Explore Categories
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="group border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements with animation */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50 animate-pulse delay-500"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;
