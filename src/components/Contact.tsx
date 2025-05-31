
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your cut-piece needs? Get in touch with our experienced team 
            and discover how 50 years of expertise can serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-7 h-7" />,
                    title: "Email Us",
                    content: "info@cutpiecepro.com",
                    subtitle: "We respond within 24 hours"
                  },
                  {
                    icon: <Phone className="w-7 h-7" />,
                    title: "Call Us",
                    content: "+1 (555) 123-4567",
                    subtitle: "Mon-Fri: 9AM-6PM"
                  },
                  {
                    icon: <MapPin className="w-7 h-7" />,
                    title: "Visit Us",
                    content: "123 Industry Street, Business District",
                    subtitle: "Free parking available"
                  },
                  {
                    icon: <Clock className="w-7 h-7" />,
                    title: "Business Hours",
                    content: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",
                    subtitle: "Sunday: Closed"
                  }
                ].map((item, index) => (
                  <div key={index} className="group flex items-start p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                    <div className="text-blue-600 mr-6 p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-lg mb-1">{item.title}</p>
                      <p className="text-gray-700 font-medium mb-1">{item.content}</p>
                      <p className="text-gray-500 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h4>
              <ul className="space-y-4 text-gray-700">
                {[
                  "50 years of proven expertise",
                  "Quality guaranteed on every order",
                  "Competitive pricing for all volumes",
                  "Fast turnaround times"
                ].map((item, index) => (
                  <li key={index} className="flex items-center group">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                    placeholder="Inquiry about cut-piece services"
                    required
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Message *</label>
                  <textarea 
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 resize-none"
                    placeholder="Tell us about your requirements..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
