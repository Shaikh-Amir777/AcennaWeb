import React, { useState } from 'react';
import { HiEnvelope, HiPhone, HiClock, HiMapPin, HiBuildingOffice2 } from 'react-icons/hi2';

const contactInfo = [
  {
    icon: HiBuildingOffice2,
    label: 'Company',
    value: 'Acenna Technology Solutions Pvt. Ltd.',
  },
  {
    icon: HiEnvelope,
    label: 'Email',
    value: 'info@acenna.in',
    href: 'mailto:info@acenna.in',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '022-22657214',
    href: 'tel:02222657214',
  },
  {
    icon: HiClock,
    label: 'Working Hours',
    value: 'Monday to Saturday, 9:00 AM – 7:00 PM',
  },
  {
    icon: HiMapPin,
    label: 'Registered Address',
    value: '2A, Lentin Chambers, Fort, Mumbai – 400001, India',
  },
  {
    icon: HiMapPin,
    label: 'Operational Address',
    value: '2nd Floor, Krishna Business Park, Opp. Digha Railway Station, Airoli, Navi Mumbai – 400708, India',
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to transform your collection operations? Let&apos;s talk.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Get in touch with us
            </h3>
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-teal-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-800 font-medium hover:text-teal-700 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-800 font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="text-sm font-medium text-slate-700 mb-1.5 block">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors text-slate-800 placeholder:text-slate-400"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors text-slate-800 placeholder:text-slate-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="text-sm font-medium text-slate-700 mb-1.5 block">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors text-slate-800 placeholder:text-slate-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-700 mb-1.5 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors text-slate-800 placeholder:text-slate-400 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3.5 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
