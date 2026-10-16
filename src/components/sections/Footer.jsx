import React from 'react';
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Tele-Calling',
  'Field Collection',
  'Skip Tracing',
  'Digital Legal',
  'Analytics',
  'Payments',
];

function Footer() {
  return (
    <footer className="bg-slate-900">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">ACENNA</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              A technology-driven collection partner committed to transforming debt recovery with innovation, compliance, and customer-centric solutions.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <HiEnvelope className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <a
                href="mailto:compliance@acenna.in"
                className="hover:text-teal-400 transition-colors text-sm"
              >
                compliance@acenna.in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiMapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  2A, Lentin Chambers, Fort, Mumbai – 400001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a
                  href="tel:02222657214"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  022-22657214
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiEnvelope className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:info@acenna.in"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  info@acenna.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-slate-400 text-sm text-center">
            © 2024 Acenna Technology Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
