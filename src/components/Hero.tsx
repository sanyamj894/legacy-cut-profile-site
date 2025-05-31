
const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-gray-50 to-white py-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Logo Showcase */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-12 mb-8">
            {/* NP Logo */}
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center border-2 border-gray-300 shadow-lg p-3 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/lovable-uploads/9736b53a-1a5d-4bb5-b17e-6e0c695d0bdc.png" 
                  alt="NP Shah Nihalchand Padamchand - 50 Years Legacy" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
                EST. 1974
              </div>
            </div>

            {/* 50 Years Badge */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 text-white rounded-full flex flex-col items-center justify-center shadow-lg">
                <span className="text-xl font-bold">50</span>
                <span className="text-xs font-medium">YEARS</span>
              </div>
            </div>

            {/* Vijay Fabrics Logo */}
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center border-2 border-gray-300 shadow-lg p-3 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/lovable-uploads/fe6fbfbd-a2e8-4e3c-96cc-b8282d3ddacf.png" 
                  alt="Vijay Fabrics - Quality Partnership" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
                TRUSTED
              </div>
            </div>
          </div>

          {/* Legacy Banner */}
          <div className="inline-flex items-center px-6 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium mb-8 border border-gray-200">
            <span>Celebrating 50 Years of Excellence • 1974 - 2024</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Five Decades of</span>
            <span className="block text-gray-700">Cut-Piece Excellence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Since 1974, we have been the trusted name in premium cut-piece solutions. 
            Half a century of craftsmanship, reliability, and unwavering commitment to quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium text-lg">
              Discover Our Services
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium text-lg">
              Our 50 Year Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
