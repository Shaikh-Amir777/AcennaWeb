import React from 'react';
import {
  HiPhone,
  HiMapPin,
  HiMagnifyingGlass,
  HiScale,
  HiChartBar,
  HiCreditCard,
} from 'react-icons/hi2';

const services = [
  {
    icon: HiPhone,
    title: 'Tele-Calling Operations',
    description:
      'Structured tele-calling with auto-dialers, floor managers, and multi-lingual callers supporting English, Hindi, Marathi, Kannada, Tamil, Telugu, and Malayalam with 360° customer CRM view.',
  },
  {
    icon: HiMapPin,
    title: 'Field Collection',
    description:
      'Robust in-house field force with agents, managers, and state heads equipped with dedicated Android mobile apps for quality visits, real-time tracking, and secure data handling.',
  },
  {
    icon: HiMagnifyingGlass,
    title: 'Skip Tracing',
    description:
      'Proprietary skip module utilizing 500+ legitimate data sources and bureau data to enhance customer contactability and locate hard-to-reach defaulters.',
  },
  {
    icon: HiScale,
    title: 'Digital Legal Services',
    description:
      'Automated digital legal workflows including notice generation via WhatsApp, SMS, email, and post. Local lawyer tracking and court date management.',
  },
  {
    icon: HiChartBar,
    title: 'Analytics & Campaign Management',
    description:
      'Analytics-driven campaign design, implementation, and monitoring. Customer segmentation, clustering, and repayment behavior analysis for targeted digital payment campaigns.',
  },
  {
    icon: HiCreditCard,
    title: 'Digital Payment Solutions',
    description:
      'Integrated digital payment processing and collection through multiple channels. Automated payment reminders and tracking with seamless gateway integration.',
  },
];

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <article className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="rounded-xl bg-teal-50 w-14 h-14 flex items-center justify-center">
        <Icon className="text-teal-700 text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mt-5">{title}</h3>
      <p className="text-slate-600 mt-3 leading-relaxed">{description}</p>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            End-to-end debt resolution services powered by technology and analytics
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
