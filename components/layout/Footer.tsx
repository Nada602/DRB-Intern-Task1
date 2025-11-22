import React from 'react';
import {  Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from '../../public/Logo2.png';
import Image from 'next/image';
// Footer Links Data
const footerLinks = [
  {
    title: 'Mobile app',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Live share', href: '#live-share' },
      { label: 'Video record', href: '#video-record' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Featured artists', href: '#featured-artists' },
      { label: 'The Portal', href: '#portal' },
      { label: 'Live events', href: '#live-events' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#about' },
      { label: 'Contact us', href: '#contact' },
      { label: 'History', href: '#history' },
    ],
  },
];

// Social Media Links
const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" className="w-32 h-auto"/>
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-wrap gap-12 md:gap-16">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Auth Buttons */}
          <div className="flex flex-col gap-3">
            <button className="bg-orange-500 hover:bg-orange-600 px-15 py-2 rounded font-semibold transition-colors">
              Register
            </button>
            <button style={{backgroundColor:"white",color:"#FF7A00"}} className="   hover:bg-gray-200 px-15 py-2 rounded font-semibold transition-colors">
              Log in
            </button>
          </div>
        </div>
        
        {/* Orange line */}
        <div className="border-t border-orange-500 mb-6"/>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; Photo, Inc. 2019. We love our users!
          </p>
          
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-sm">Follow us:</span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;