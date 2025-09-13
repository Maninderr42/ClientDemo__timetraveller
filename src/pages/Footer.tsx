import { motion } from 'framer-motion';

export function ModernFooter() {
  const footerSections = [
    {
      title: 'Destinations',
      links: ['Himachal Pradesh', 'Rajasthan', 'Kerala', 'Goa', 'Ladakh', 'Kashmir']
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Press', 'Partner With Us', 'Sustainability']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Safety', 'Cancellation', 'Contact Us', 'Trust & Safety', 'Terms & Conditions']
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse" />
              </div>
              <div className="ml-3 ">
                <div className="text-2xl font-bold">Time Travellers</div>
                <div className="text-orange-400 text-sm">INDIA</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your intuitive, insightful travel master, crafting soul-stirring journeys that match your vibe and budget. 
              Discover India like never before with personalized travel experiences.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-bold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-xl flex items-center justify-center text-lg transition-all duration-300 backdrop-blur-sm border border-white/10"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-4 text-orange-400">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={linkIndex}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-white transition-colors duration-300 block"
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                <span className="text-orange-400">📞</span>
              </div>
              <div>
                <div className="font-medium">Call Us</div>
                <div className="text-orange-400">+91 98765 43210</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                <span className="text-orange-400">✉️</span>
              </div>
              <div>
                <div className="font-medium">Email Us</div>
                <div className="text-orange-400">info@timetravellers.com</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                <span className="text-orange-400">📍</span>
              </div>
              <div>
                <div className="font-medium">Visit Us</div>
                <div className="text-orange-400">New Delhi, India</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              © 2024 Time Travellers India. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ color: '#f97316' }}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#f97316' }}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#f97316' }}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Cookie Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#f97316' }}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-600/5 rounded-full blur-3xl" />
    </footer>
  );
}
export { ModernFooter as Footer };