
const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 py-20 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Legacy Showcase with Logos */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center space-x-8 mb-8">
            {/* NP Logo with 50-year highlight */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-3xl opacity-30 animate-pulse group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative w-32 h-32 bg-white rounded-3xl flex items-center justify-center border-4 border-red-400 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 p-3">
                <img 
                  src="/lovable-uploads/9736b53a-1a5d-4bb5-b17e-6e0c695d0bdc.png" 
                  alt="NP Shah Nihalchand Padamchand - 50 Years Legacy" 
                  className="w-full h-full object-contain animate-fade-in-up"
                />
              </div>
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                EST. 1974
              </div>
            </div>

            {/* Central 50 Years Badge */}
            <div className="relative mx-8">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-red-600 animate-pulse">50</span>
                  <span className="text-xs font-semibold text-gray-700">YEARS</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 opacity-50 animate-ping"></div>
            </div>

            {/* Vijay Fabrics Logo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-600 rounded-3xl opacity-30 animate-pulse delay-500 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative w-32 h-32 bg-white rounded-3xl flex items-center justify-center border-4 border-purple-400 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 p-3">
                <img 
                  src="/lovable-uploads/fe6fbfbd-a2e8-4e3c-96cc-b8282d3ddacf.png" 
                  alt="Vijay Fabrics - Quality Partnership" 
                  className="w-full h-full object-contain animate-fade-in-up"
                  style={{ animationDelay: '0.3s' }}
                />
              </div>
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce delay-300">
                TRUSTED
              </div>
            </div>
          </div>

          {/* Legacy Banner */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-100 via-orange-50 to-yellow-100 rounded-full text-red-700 text-lg font-bold mb-8 animate-fade-in shadow-xl border-2 border-red-200 hover:border-red-300 transition-all duration-300">
            <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mr-4 animate-pulse"></div>
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Celebrating 50 Years of Excellence • 1974 - 2024
            </span>
            <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full ml-4 animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 animate-fade-in">
            <span className="block transform hover:scale-105 transition-transform duration-300 animate-slide-in-right">Half a Century of</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 transform hover:scale-105 transition-transform duration-300 animate-slide-in-right delay-300">
              Cut-Piece Mastery
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in-up">
            Since 1974, we've been the trusted name in premium cut-piece solutions. 
            Five decades of craftsmanship, innovation, and unwavering commitment to quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up">
            <button className="group bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white px-12 py-5 rounded-2xl hover:from-red-700 hover:via-orange-700 hover:to-yellow-700 transition-all duration-500 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105">
              <span className="flex items-center justify-center">
                Explore Our Legacy
                <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="group border-3 border-red-400 text-red-600 px-12 py-5 rounded-2xl hover:border-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-500 font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105">
              <span className="flex items-center justify-center">
                50 Years Story
                <svg className="w-6 h-6 ml-3 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-red-200 to-orange-300 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-yellow-200 to-red-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-300 rounded-full opacity-40 animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-purple-200 to-blue-300 rounded-full opacity-30 animate-pulse delay-700"></div>
      
      {/* Floating legacy elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 text-6xl font-bold text-red-200 opacity-20 animate-bounce delay-300 select-none">1974</div>
        <div className="absolute top-3/4 right-1/3 text-6xl font-bold text-orange-200 opacity-20 animate-bounce delay-700 select-none">2024</div>
        <div className="absolute bottom-1/4 left-1/3 text-4xl font-bold text-yellow-200 opacity-20 animate-bounce delay-1000 select-none">50 YEARS</div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1300"></div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-red-400 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-orange-400 rotate-12 animate-spin-slow delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-yellow-400 -rotate-12 animate-spin-slow delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;
