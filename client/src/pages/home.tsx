import { useState, useEffect } from "react";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Menu, 
  X, 
  Dock, 
  Building, 
  Users, 
  FlaskRound, 
  Server, 
  Key, 
  Lightbulb, 
  Wifi, 
  Cog, 
  Shield, 
  UserCheck, 
  MessageSquare, 
  BarChart3, 
  Smartphone, 
  Brain, 
  Leaf, 
  Droplets,
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (mobileMenuOpen && nav && !nav.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-brand-teal">XO Grid</div>
            </div>
            
            {/* Dock Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-brand-teal px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-brand-teal px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('workspaces')}
                  className="text-gray-700 hover:text-brand-teal px-3 py-2 text-sm font-medium transition-colors"
                >
                  Workspaces
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-700 hover:text-brand-teal px-3 py-2 text-sm font-medium transition-colors"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-brand-teal px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="text-gray-700 hover:text-brand-teal"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-brand-teal block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-brand-teal block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('workspaces')}
                  className="text-gray-700 hover:text-brand-teal block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Workspaces
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-700 hover:text-brand-teal block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-brand-teal block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 148, 136, 0.8), rgba(13, 148, 136, 0.8)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Next Generation <span className="text-brand-green">Coworking Space</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Experience the future of work with our fully integrated smart offices and flexible workspace solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('workspaces')}
              className="bg-brand-green hover:bg-brand-green text-white px-8 py-4 text-lg font-semibold"
            >
              Explore Workspaces
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-teal px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Business Streams */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Two Streams of Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive solutions for modern workspace needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Next Gen Coworking Space */}
            <Card className="bg-gradient-to-br from-brand-teal to-teal-600 border-0">
              <CardContent className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Next Gen Coworking Space</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Dock className="text-brand-green text-xl mr-4 h-6 w-6" />
                    <span className="text-lg">Single Desk</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="text-brand-green text-xl mr-4 h-6 w-6" />
                    <span className="text-lg">Cabin Office</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-brand-green text-xl mr-4 h-6 w-6" />
                    <span className="text-lg">Conference Room</span>
                  </div>
                  <div className="flex items-center">
                    <FlaskRound className="text-brand-green text-xl mr-4 h-6 w-6" />
                    <span className="text-lg">Product Development Lab</span>
                  </div>
                  <div className="flex items-center">
                    <Server className="text-brand-green text-xl mr-4 h-6 w-6" />
                    <span className="text-lg">Server Room</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Design & Build Services */}
            <Card className="bg-gradient-to-br from-brand-green to-green-600 border-0">
              <CardContent className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Design & Build, Convert to Smart Offices</h3>
                <p className="text-lg mb-6">For existing companies</p>
                <p className="text-base mb-6">
                  We create fully integrated smart offices with the following capabilities integrated under one platform:
                </p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center">
                    <Key className="text-white text-sm mr-3 h-4 w-4" />
                    <span>Smart Access Control</span>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="text-white text-sm mr-3 h-4 w-4" />
                    <span>Automated Lighting & Climate Control</span>
                  </div>
                  <div className="flex items-center">
                    <Wifi className="text-white text-sm mr-3 h-4 w-4" />
                    <span>High-Speed Internet & Networking</span>
                  </div>
                  <div className="flex items-center">
                    <Cog className="text-white text-sm mr-3 h-4 w-4" />
                    <span>Centralized Device Management</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-white text-sm mr-3 h-4 w-4" />
                    <span>Security & Surveillance</span>
                  </div>
                  <div className="flex items-center">
                    <UserCheck className="text-white text-sm mr-3 h-4 w-4" />
                    <span>Visitor Management</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="text-white text-sm mr-3 h-4 w-4" />
                    <span>Integrated Communication Tools</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="text-white text-sm mr-3 h-4 w-4" />
                    <span>Energy Monitoring Dashboard</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="text-white text-sm mr-3 h-4 w-4" />
                    <span>Customizable Mobile App</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="text-white text-sm mr-3 h-4 w-4" />
                    <span>AI-Driven Individual Work Efficiency Monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <Leaf className="text-white text-sm mr-3 h-4 w-4" />
                    <span>Carbon Footprint Monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="text-white text-sm mr-3 h-4 w-4" />
                    <span>Water Quality, Consumption & Recycling Monitoring</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg">
                  <p className="text-yellow-200 font-semibold">All systems, in one platform and one gateway!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workspace Gallery */}
      <section id="workspaces" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Workspace Solutions</h2>
            <p className="text-xl text-gray-600">Choose the perfect workspace that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Single Desk */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600')"}} />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Single Desk</h3>
                <p className="text-gray-600 mb-4">Perfect for individual professionals and freelancers</p>
                <div className="text-brand-teal font-semibold">Starting from ₹1,100/week</div>
              </CardContent>
            </Card>

            {/* Cabin Office */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600')"}} />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cabin Office</h3>
                <p className="text-gray-600 mb-4">Private spaces for teams and small businesses</p>
                <div className="text-brand-teal font-semibold">Starting from ₹5,000/week</div>
              </CardContent>
            </Card>

            {/* Conference Room */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600')"}} />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Conference Room</h3>
                <p className="text-gray-600 mb-4">Fully equipped meeting spaces for presentations</p>
                <div className="text-brand-teal font-semibold">₹2,000 (3 hours)</div>
              </CardContent>
            </Card>

            {/* Cubicle Space */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600')"}} />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cubicle Space</h3>
                <p className="text-gray-600 mb-4">Semi-private workstations for focused work</p>
                <div className="text-brand-teal font-semibold">Starting from ₹5,000/week</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600">Choose the plan that works best for your business</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Single Desk Pricing */}
            <Card className="bg-gradient-to-br from-brand-green to-green-600 border-0">
              <CardContent className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">SINGLE DESK</h3>
                
                {/* Individual Rates */}
                <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold mb-4">Individual Rates</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Weekly rate:</span>
                      <span>₹1,100 per chair</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly rate:</span>
                      <span>₹3,000 per chair</span>
                    </div>
                    <div className="flex justify-between">
                      <span>6 months:</span>
                      <span>₹2,700 per chair per month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>12 months:</span>
                      <span>₹2,400 per chair per month</span>
                    </div>
                  </div>
                </div>

                {/* Bulk Packages */}
                <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold mb-4">Bulk Packages</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>4 Seat package:</span>
                      <span>₹2,850 per chair per month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>6 Seat package:</span>
                      <span>₹2,700 per chair per month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>8 Seat package:</span>
                      <span>₹2,550 per chair per month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>12 Seat package:</span>
                      <span>₹2,400 per chair per month</span>
                    </div>
                  </div>
                </div>

                {/* Corporate Rates */}
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <h4 className="font-semibold mb-4">For Registered Companies</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>First 3 months:</span>
                      <span>₹2,000 per chair per month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>From 4th month onwards:</span>
                      <span>₹3,000 per chair per month</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conference Room Pricing */}
            <Card className="bg-gradient-to-br from-brand-brown to-amber-700 border-0">
              <CardContent className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-8 text-center">CONFERENCE ROOM</h3>
                
                <div className="text-center mb-8">
                  <div className="h-48 bg-cover bg-center rounded-xl mb-6" style={{backgroundImage: "url('https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300')"}} />
                </div>

                <div className="space-y-6">
                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">₹2,000</div>
                      <div className="text-lg">Half day usage (3 hours)</div>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">₹3,000</div>
                      <div className="text-lg">Full day usage (6 hours)</div>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold">Maximum capacity is 10 chairs</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cubicle Space Pricing */}
            <Card className="bg-gradient-to-br from-brand-teal to-teal-600 border-0">
              <CardContent className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-8 text-center">CUBICLE SPACE</h3>
                
                <div className="text-center mb-8">
                  <div className="h-48 bg-cover bg-center rounded-xl mb-6" style={{backgroundImage: "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300')"}} />
                </div>

                <div className="space-y-6">
                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <h4 className="font-semibold mb-4">Short Term</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Weekly:</span> ₹5,000 for cabin (Including 1 chair, additional ₹2,000 per extra chair for 1 week if needed)
                      </div>
                      <div>
                        <span className="font-medium">Monthly:</span> ₹7,500 for cabin (Including 1 chair, additional ₹3,000 per extra chair for 1 month and ₹2,000 for 1 week)
                      </div>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <h4 className="font-semibold mb-4">Long Term</h4>
                    <div className="space-y-2 text-sm">
                      <div>For 6 months: ₹6,750 for cabin per month - Only 1 chair. For extra chair, 10% discount is applicable.</div>
                      <div>For 12 months: ₹6,000 for cabin per month - Only 1 chair. For extra chair, 20% discount is applicable.</div>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold">Maximum capacity of 1 cabin: 4 seats</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Office Features */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Smart Office Technology</h2>
            <p className="text-xl text-gray-300">Experience the future of workspace technology</p>
          </div>

          <div className="mb-16">
            <div className="h-96 bg-cover bg-center rounded-2xl" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=600')"}} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <div className="text-brand-green text-3xl mb-4">
                  <Key className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Smart Access Control</h3>
                <p className="text-gray-300">Secure, keyless entry system with personalized access management</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <div className="text-brand-green text-3xl mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Climate Control</h3>
                <p className="text-gray-300">Automated lighting and temperature management for optimal comfort</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <div className="text-brand-green text-3xl mb-4">
                  <Wifi className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">High-Speed Networking</h3>
                <p className="text-gray-300">Enterprise-grade internet and networking infrastructure</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <div className="text-brand-green text-3xl mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Security & Surveillance</h3>
                <p className="text-gray-300">24/7 monitoring with advanced security systems</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <div className="text-brand-green text-3xl mb-4">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Energy Monitoring</h3>
                <p className="text-gray-300">Real-time energy consumption tracking and optimization</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <div className="text-brand-green text-3xl mb-4">
                  <Smartphone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Mobile App Integration</h3>
                <p className="text-gray-300">Control everything from your smartphone with our custom app</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-brand-teal to-brand-green rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold mb-4">All Systems, One Platform</h3>
              <p className="text-lg">Experience seamless integration with our unified smart office gateway</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to transform your workspace? Contact us today</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-teal rounded-lg p-3 mr-4">
                      <Phone className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-teal rounded-lg p-3 mr-4">
                      <Mail className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@xogrid.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-teal rounded-lg p-3 mr-4">
                      <MapPin className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">123 Business District<br />Mumbai, Maharashtra 400001<br />India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-teal rounded-lg p-3 mr-4">
                      <Clock className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Operating Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden">
                <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400')"}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-brand-teal mb-4">XO Grid</div>
              <p className="text-gray-300 mb-4">Next generation coworking space with fully integrated smart office solutions.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('workspaces')} className="hover:text-brand-teal transition-colors">Single Desk</button></li>
                <li><button onClick={() => scrollToSection('workspaces')} className="hover:text-brand-teal transition-colors">Cabin Office</button></li>
                <li><button onClick={() => scrollToSection('workspaces')} className="hover:text-brand-teal transition-colors">Conference Room</button></li>
                <li><button onClick={() => scrollToSection('workspaces')} className="hover:text-brand-teal transition-colors">Smart Office Design</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-brand-teal transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-brand-teal transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-brand-teal transition-colors">Contact</button></li>
                <li><button className="hover:text-brand-teal transition-colors">Book a Tour</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 XO Grid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
