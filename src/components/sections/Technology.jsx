import React from 'react';
import { HiCloud, HiDevicePhoneMobile, HiUserGroup, HiPresentationChartBar } from 'react-icons/hi2';

const features = [
  {
    icon: HiCloud,
    title: 'Cloud-Based CMS',
    description:
      'Automated collection management system with AWS APIs for real-time processing and tracking.',
  },
  {
    icon: HiDevicePhoneMobile,
    title: 'Mobile Applications',
    description:
      'Dedicated Android apps for field agents and managers with real-time disposition tracking.',
  },
  {
    icon: HiUserGroup,
    title: 'Integrated CRM',
    description:
      '360° customer view calling CRM with auto-dialer integration and call recording.',
  },
  {
    icon: HiPresentationChartBar,
    title: 'Client Dashboard',
    description:
      '24x7 client panel access for real-time monitoring, trend analysis, and pin-wise performance metrics.',
  },
];

function Technology() {
  return (
    <section id="technology" className="bg-slate-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-12">
          <span className="inline-block border border-teal-700/30 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Our Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technology-Powered Collections
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Cloud-based infrastructure that drives efficiency and transparency
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side content */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our proprietary cloud-based Collection Management System is hosted on
              Amazon Web Services (AWS), providing enterprise-grade security,
              scalability, and 99.9% uptime. Every aspect of the collection lifecycle
              is digitized and automated.
            </p>
            <a
              href="#contact"
              className="inline-block bg-teal-700 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Book Demo
            </a>
          </div>

          {/* Right side feature cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6"
                >
                  <div className="text-teal-400 mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
