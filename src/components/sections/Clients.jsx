import React from 'react';
import {
  HiBuildingLibrary,
  HiBanknotes,
  HiDevicePhoneMobile,
  HiHome,
  HiUsers,
  HiGlobeAlt,
} from 'react-icons/hi2';

const clientCategories = [
  { icon: HiBuildingLibrary, name: 'Banks' },
  { icon: HiBanknotes, name: 'NBFCs' },
  { icon: HiDevicePhoneMobile, name: 'Fintech Lenders' },
  { icon: HiHome, name: 'Housing Finance' },
  { icon: HiUsers, name: 'Microfinance' },
  { icon: HiGlobeAlt, name: 'Digital Lenders' },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-12">
          <span className="inline-block bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Leading Financial Institutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We partner with banks, NBFCs, and fintech companies across India
          </p>
        </div>

        {/* Client Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <article
                key={category.name}
                className="bg-white rounded-xl border border-slate-100 p-6 text-center hover:border-teal-200 hover:shadow-md transition cursor-default"
              >
                <div className="flex items-center justify-center">
                  <IconComponent className="w-10 h-10 text-teal-700" />
                </div>
                <p className="text-sm font-semibold text-slate-700 mt-3">
                  {category.name}
                </p>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-teal-700 rounded-2xl p-10 text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Partner with Us?
          </h3>
          <p className="text-teal-100 max-w-2xl mx-auto mb-6">
            Join leading financial institutions who trust Acenna for their
            collection and recovery needs
          </p>
          <a
            href="#contact"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
