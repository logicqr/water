import { useState, useEffect } from 'react';

import { 
  Droplet, 
  Check, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  ChevronDown,
  X,
  Menu,
  Play,
  ChevronRight,
  MessageCircle,
  BarChart2,
  Shield,
  ThumbsUp
} from 'lucide-react';

export default function ModernWaterPurificationWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFaq, setShowFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const faqs = [
    {
      question: "How often should I replace my water filters?",
      answer: "Most residential water filters should be replaced every 3-6 months depending on usage and water quality. Our advanced filters typically last up to 6 months with regular use."
    },
    {
      question: "What contaminants do your systems remove?",
      answer: "Our comprehensive purification systems remove chlorine, lead, mercury, pesticides, bacteria, viruses, and over 70 other common water contaminants. Each system is tailored to your specific water quality needs."
    },
    {
      question: "Do you offer maintenance services?",
      answer: "Yes, we provide professional maintenance services for all our systems. Our service plans include regular filter replacements, system sanitization, and performance checks to ensure optimal water quality."
    },
    {
      question: "Are your systems eco-friendly?",
      answer: "Absolutely! Our systems are designed with sustainability in mind, using energy-efficient technology and recyclable components. By reducing the need for bottled water, our solutions help minimize plastic waste."
    }
  ];

  // const [scrollPosition, setScrollPosition] = useState(0);
  
  // useEffect(() => {
  //   // Auto-scroll animation with faster speed (left to right)
  //   const interval = setInterval(() => {
  //     setScrollPosition(prev => {
  //       // Create infinite loop effect by moving from left to right
  //       return (prev - 2) % 3200; // Doubled width for more logos
  //     });
  //   }, 15); // Fast interval for smooth animation
    
  //   return () => clearInterval(interval);
  // }, []);

  // // Define multiple unique partner logos
  // const partnerLogos = [
  //   {
  //     id: 1,
  //     name: "Clean Hands Soap",
  //     imageUrl: "https://img.freepik.com/free-vector/clean-hands-soap-logo-template_23-2148745049.jpg?t=st=1746608040~exp=1746611640~hmac=2a2cab1297967522d341e7113b1b129535725ce1b64fed7abcb4b821453cb35f&w=826",
  //   },
  //   {
  //     id: 2,
  //     name: "Fresh Bubbles",
  //     imageUrl: "https://img.freepik.com/free-vector/clean-hands-soap-logo-template_23-2148745049.jpg?t=st=1746608040~exp=1746611640~hmac=2a2cab1297967522d341e7113b1b129535725ce1b64fed7abcb4b821453cb35f&w=826",
  //   },
  //   {
  //     id: 3,
  //     name: "Pure Clean",
  //     imageUrl: "https://img.freepik.com/free-vector/clean-hands-soap-logo-template_23-2148745049.jpg?t=st=1746608040~exp=1746611640~hmac=2a2cab1297967522d341e7113b1b129535725ce1b64fed7abcb4b821453cb35f&w=826",
  //   },
  //   {
  //     id: 4,
  //     name: "EcoWash",
  //     imageUrl: "https://img.freepik.com/free-vector/clean-hands-soap-logo-template_23-2148745049.jpg?t=st=1746608040~exp=1746611640~hmac=2a2cab1297967522d341e7113b1b129535725ce1b64fed7abcb4b821453cb35f&w=826",
  //   },
  // ]

  // // Create a duplicate set of logos for seamless infinite scrolling
  // const allLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];


  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full bg-white z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-4'}`}>
        <div className="container  mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <Droplet className="text-blue-600 h-8 w-8" />
            <span className="ml-2 text-xl font-bold">PureFlow</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`${activeSection === 'home' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300 font-medium`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('solutions')} 
              className={`${activeSection === 'solutions' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300 font-medium`}
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className={`${activeSection === 'benefits' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300 font-medium`}
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className={`${activeSection === 'testimonials' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300 font-medium`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className={`${activeSection === 'faq' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300 font-medium`}
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300 font-medium`}
            >
              Contact
            </button>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full transition duration-300"
            >
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 
              <X className="h-6 w-6 text-gray-700" /> : 
              <Menu className="h-6 w-6 text-gray-700" />
            }
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="container  mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`${activeSection === 'home' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 py-2 font-medium`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className={`${activeSection === 'solutions' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 py-2 font-medium`}
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className={`${activeSection === 'benefits' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 py-2 font-medium`}
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className={`${activeSection === 'testimonials' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 py-2 font-medium`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className={`${activeSection === 'faq' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 py-2 font-medium`}
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 py-2 font-medium`}
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full transition duration-300 w-full text-center mt-2"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative">
          {/* Blue Circle Decorations */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-200 opacity-30"></div>
          <div className="absolute top-40 -right-20 w-72 h-72 rounded-full bg-blue-100 opacity-40"></div>
          <div className="absolute -bottom-10 left-1/4 w-20 h-20 rounded-full bg-blue-300 opacity-20"></div>
          
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-12 md:mb-0 max-w-xl">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium text-sm mb-6">
                Pure Water, Better Life
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Advanced Water <span className="text-blue-600">Purification</span> Technology
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the purest water with our cutting-edge filtration systems. Designed for homes and businesses that demand clean, safe, and great-tasting water.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 flex items-center"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300 group">
                  <div className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-50">
                    <Play className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Watch Demo</span>
                </button>
              </div>
              
              <div className="mt-10 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-xs text-white">JD</div>
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-xs text-white">SB</div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-xs text-white">KT</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white flex items-center justify-center text-xs text-white">MT</div>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">4,500+</span> happy customers
                </div>
                <div className="flex items-center text-sm">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span className="ml-1 font-semibold">4.9/5</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 scale-110 transform -rotate-6"></div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-3xl shadow-2xl transform rotate-3">
                  <img 
                    src="https://img.freepik.com/free-vector/realistic-plastic-water-bottle-packaging-set-with-isolated-images-branded-transparent-bottles-different-size-vector-illustration_1284-69181.jpg?t=st=1746604852~exp=1746608452~hmac=6b158baad63608d5be7d432d9a04a7c7cc5cd4aa456ba0b2c8b803fd3e8615f2&w=1380" 
                    alt="Modern water purification system" 
                    className="rounded-2xl shadow-inner relative z-10"
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 bg-white p-3 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Droplet className="text-blue-600 h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Purity Level</div>
                      <div className="font-semibold">99.9% Pure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-6 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Trusted By Industry Leaders</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex items-center transition-all duration-300 ease-linear"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            {allLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="flex-shrink-0 mx-6">
                <img
                  src={logo.imageUrl}
                  alt={`${logo.name} Logo`}
                  className="h-28 w-auto  transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section> */}
  

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium text-sm mb-4">
              Our Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Purification Systems</h2>
            <p className="text-gray-600">Discover our comprehensive range of water purification solutions designed for every environment and need.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/modern-water-filtration-system-installed-beneath-kitchen-counter_157027-4310.jpg?t=st=1746609190~exp=1746612790~hmac=896a858aeac09f9a926870e8ba73c459f6549f04c49fb1e51c21938e8dd2abdd&w=1380" 
                  alt="Residential water purification" 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-semibold">Home Purification</h3>
                  <p className="text-white/80 text-sm">Complete solutions for residential needs</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">Reverse Osmosis</span>
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">UV Purification</span>
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">IoT Enabled</span>
                </div>
                <p className="text-gray-600 mb-6">Advanced multi-stage filtration systems that provide clean, great-tasting water for your entire home.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">Starting at $899</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/woman-carrying-drinking-waters-with-gloved-hands-coronavirus-pandemic_53876-105349.jpg?t=st=1746609292~exp=1746612892~hmac=991165d1c559fca218de20ef20012c30f13c3913b30df2ea33ebabd93c009bf7&w=1380" 
                  alt="Commercial water purification" 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-semibold">Commercial Solutions</h3>
                  <p className="text-white/80 text-sm">For businesses and organizations</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">High Capacity</span>
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">Energy Efficient</span>
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">Low Maintenance</span>
                </div>
                <p className="text-gray-600 mb-6">High-capacity systems designed for offices, restaurants, hotels, and other commercial establishments.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">Custom Pricing</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/technologist-expert-using-tablet-computer-food-factory-production-line_342744-1178.jpg?t=st=1746609350~exp=1746612950~hmac=12a985a54fc1a0af8a96a46139808a360917de0604d2446cccbc4b2d707ea39d&w=1380" 
                  alt="Industrial water treatment" 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-semibold">Industrial Treatment</h3>
                  <p className="text-white/80 text-sm">Enterprise-scale solutions</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">Custom Design</span>
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">Analytics</span>
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">Sustainable</span>
                </div>
                <p className="text-gray-600 mb-6">Custom-designed water treatment solutions for manufacturing, processing, and industrial applications.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">Enterprise Plans</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium text-sm mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The PureFlow Advantage</h2>
              <p className="text-gray-600 mb-8">
                Our water purification systems combine cutting-edge technology with environmental responsibility to deliver the purest water possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4 flex items-start justify-center">
                    <Shield className="text-blue-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Advanced Protection</h4>
                    <p className="text-gray-600">Multi-layer filtration removes 99.9% of contaminants including bacteria, viruses, heavy metals, and chemicals.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4 flex items-start justify-center">
                    <BarChart2 className="text-blue-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Smart Analytics</h4>
                    <p className="text-gray-600">Real-time monitoring of water quality and system performance with our mobile app.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4 flex items-start justify-center">
                    <ThumbsUp className="text-blue-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Environmentally Friendly</h4>
                    <p className="text-gray-600">Eco-conscious design with energy-efficient operation and minimal waste production.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 relative z-10">
                <img 
                  src="https://img.freepik.com/free-photo/transparent-water-bottle-studio_23-2151049093.jpg?t=st=1746609442~exp=1746613042~hmac=630e5bec4b6280d1d2f7122471bae72c20a6d08e93571f388823b75fa7e504ae&w=1380" 
                  alt="PureFlow technology" 
                  className="w-full rounded-2xl mb-6"
                />
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <h4 className="text-3xl font-bold text-blue-600 mb-1">99.9%</h4>
                    <p className="text-sm text-gray-600">Purification Rate</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <h4 className="text-3xl font-bold text-blue-600 mb-1">50%</h4>
                    <p className="text-sm text-gray-600">Energy Savings</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <h4 className="text-3xl font-bold text-blue-600 mb-1">24/7</h4>
                    <p className="text-sm text-gray-600">Monitoring</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 rounded-full bg-blue-100 opacity-50"></div>
              <div className="absolute -z-10 -bottom-12 -right-12 w-40 h-40 rounded-full bg-blue-200 opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready for crystal clear water?</h2>
              <p className="text-blue-100 max-w-lg">Schedule a free consultation with our water quality experts today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition duration-300"
              >
                Contact Us
              </button>
              <button className="border border-white text-white hover:bg-blue-700 font-medium py-3 px-8 rounded-full transition duration-300">
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

     {/* Testimonials */}
<section id="testimonials" className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-xl mx-auto mb-16">
      <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium text-sm mb-4">
        Testimonials
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
      <p className="text-gray-600">Hear from customers who have experienced the PureFlow difference.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-50 rounded-2xl p-6 transition duration-300 hover:shadow-lg relative">
        <div className="absolute -top-5 left-6 text-blue-600 text-6xl opacity-20">"</div>
        <div className="relative z-10">
          <p className="text-gray-600 mb-6 italic">
            "Installing the PureFlow home system was the best decision for my family. The water tastes incredible, and knowing it's free from contaminants gives us peace of mind."
          </p>
          <div className="flex items-center">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-blue-600 font-semibold">JD</span>
            </div>
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-sm text-gray-500">Homeowner</p>
            </div>
          </div>
          <div className="flex mt-4 text-yellow-400">
            ★★★★★
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-6 transition duration-300 hover:shadow-lg relative">
        <div className="absolute -top-5 left-6 text-blue-600 text-6xl opacity-20">"</div>
        <div className="relative z-10">
          <p className="text-gray-600 mb-6 italic">
            "As a restaurant owner, water quality is essential to our business. PureFlow's commercial system has not only improved the taste of our water but has also extended the life of our equipment."
          </p>
          <div className="flex items-center">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-green-600 font-semibold">SB</span>
            </div>
            <div>
              <h4 className="font-semibold">Sarah Brown</h4>
              <p className="text-sm text-gray-500">Restaurant Owner</p>
            </div>
          </div>
          <div className="flex mt-4 text-yellow-400">
            ★★★★★
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-6 transition duration-300 hover:shadow-lg relative">
        <div className="absolute -top-5 left-6 text-blue-600 text-6xl opacity-20">"</div>
        <div className="relative z-10">
          <p className="text-gray-600 mb-6 italic">
            "The customer service at PureFlow is exceptional. Their team not only designed a custom solution for our manufacturing plant but continues to provide excellent support."
          </p>
          <div className="flex items-center">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-purple-600 font-semibold">MT</span>
            </div>
            <div>
              <h4 className="font-semibold">Mike Thompson</h4>
              <p className="text-sm text-gray-500">Factory Manager</p>
            </div>
          </div>
          <div className="flex mt-4 text-yellow-400">
            ★★★★☆
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium text-sm mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our water purification systems.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50 transition duration-300"
                  onClick={() => setShowFaq(showFaq === index ? null : index)}
                >
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <ChevronDown className={`h-5 w-5 text-blue-600 transition-transform duration-300 ${showFaq === index ? 'transform rotate-180' : ''}`} />
                </button>
                {showFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions? Contact our support team.</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
            >
              Contact Support
              <MessageCircle className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium text-sm mb-4">
                Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                Have questions about our water purification solutions? Our team of experts is here to help. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center justify-center">
                    <Phone className="text-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us at</p>
                    <p className="font-semibold">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center justify-center">
                    <Mail className="text-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email us at</p>
                    <p className="font-semibold">info@pureflow.example</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center justify-center">
                    <MapPin className="text-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Visit our showroom</p>
                    <p className="font-semibold">123 Water Street, Filterville, WA 98765</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition duration-300"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Droplet className="text-blue-400 h-8 w-8" />
                <span className="ml-2 text-xl font-bold">PureFlow</span>
              </div>
              <p className="text-gray-400 mb-6">
                Advanced water purification solutions for homes, businesses, and industrial applications. Clean water for a better tomorrow.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Home Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Commercial Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Industrial Treatment</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Smart Monitoring</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Water Testing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Sustainability</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} PureFlow Water Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    
  );
}