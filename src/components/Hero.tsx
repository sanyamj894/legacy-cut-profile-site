
const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-slate-100/40 to-gray-100/40 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Logo Showcase with enhanced animations */}
        <div className="text-center mb-12 animate-slide-in-up">
          <div className="flex justify-center items-center space-x-12 mb-8">
            {/* NP Logo */}
            <div className="relative group">
              <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-lg p-3 logo-hover hover-glow relative overflow-hidden">
                <img 
                  src="/lovable-uploads/9736b53a-1a5d-4bb5-b17e-6e0c695d0bdc.png" 
                  alt="NP Shah Nihalchand Padamchand - 50 Years Legacy" 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -top-3 -right-3 bg-classic-navy text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce-subtle">
                EST. 1974
              </div>
            </div>

            {/* 50 Years Badge with pulse animation */}
            <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-classic-navy to-slate-800 text-white rounded-full flex flex-col items-center justify-center shadow-xl animate-pulse-glow hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-2xl font-bold">50</span>
                <span className="text-xs font-semibold tracking-wider">YEARS</span>
              </div>
            </div>

            {/* Vijay Fabrics Logo */}
            <div className="relative group">
              <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-lg p-3 logo-hover hover-glow relative overflow-hidden">
                <img 
                  src="/lovable-uploads/fe6fbfbd-a2e8-4e3c-96cc-b8282d3ddacf.png" 
                  alt="Vijay Fabrics - Quality Partnership" 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -top-3 -right-3 bg-classic-navy text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce-subtle" style={{animationDelay: '0.5s'}}>
                TRUSTED
              </div>
            </div>
          </div>

          {/* Legacy Banner with shimmer effect */}
          <div className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full text-classic-charcoal text-sm font-semibold mb-8 border border-gray-200 hover-lift-subtle relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">Celebrating 50 Years of Excellence • 1974 - 2024</span>
          </div>
        </div>

        {/* Main Content with staggered animations */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            <span className="block text-classic-navy text-reveal">Five Decades of</span>
            <span className="block text-classic-charcoal text-reveal bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">Cut-Piece Excellence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-classic-stone mb-10 max-w-3xl mx-auto leading-relaxed text-reveal">
            Since 1974, we have been the trusted name in premium cut-piece solutions. 
            Half a century of craftsmanship, reliability, and unwavering commitment to quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-reveal">
            <button className="btn-classic-primary group">
              <span className="relative z-10">Discover Our Services</span>
            </button>
            <button className="btn-classic-secondary group">
              <span className="relative z-10">Our 50 Year Story</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
