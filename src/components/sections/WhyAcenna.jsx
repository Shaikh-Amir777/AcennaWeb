import React from 'react';
import {
  HiUserGroup,
  HiCpuChip,
  HiGlobeAlt,
  HiChartBar,
} from 'react-icons/hi2';

const features = [
  {
    icon: HiUserGroup,
    title: 'Experienced Team',
    description:
      'Professionals skilled in financial negotiations and compliant debt resolution with decades of banking experience across leading institutions.',
  },
  {
    icon: HiCpuChip,
    title: 'Technology-Led Collection',
    description:
      'Cloud-based CMS integrated with AWS APIs, automated dialers, and field-agent mobile apps for seamless end-to-end operations.',
  },
  {
    icon: HiGlobeAlt,
    title: 'Extensive Field Presence',
    description:
      'PAN-India field presence across 47+ cities and 6000+ PIN codes with real-time tracking and geo-tagged visit verification.',
  },
  {
    icon: HiChartBar,
    title: 'Analytics-Driven Campaigns',
    description:
      'Behavioral clustering, customer segmentation, and repayment analysis to maximize engagement and optimize recovery outcomes.',
  },
];

export default function WhyAcenna() {
  return (
    <section id="why-acenna" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
            Why Choose Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
          Why Acenna
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-lg text-center max-w-2xl mx-auto mb-12">
          What makes us different from traditional collection agencies
        </p>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
