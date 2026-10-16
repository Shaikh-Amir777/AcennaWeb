import React from 'react';
import { HiMapPin, HiMap, HiUserGroup, HiArrowTrendingUp } from 'react-icons/hi2';

const stats = [
  { icon: HiMapPin, value: '47+', label: 'Cities Covered' },
  { icon: HiMap, value: '6000+', label: 'PIN Codes' },
  { icon: HiUserGroup, value: '80+', label: 'Team Members' },
  { icon: HiArrowTrendingUp, value: '30%+', label: 'Efficiency Improvement' },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
            Who We Are
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          About Acenna
        </h2>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text content */}
          <div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              <span className="font-semibold text-slate-900">Acenna</span>{' '}
              (Acenna Technology Solutions Pvt. Ltd.) is a Mumbai-based fintech
              firm specializing in debt resolution, collection, and recovery
              services for banks, NBFCs, and fintech companies. Founded by
              seasoned banking professionals with decades of experience across
              Citi, Standard Chartered, HDFC, and Kotak.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our mission is transforming traditional debt collection into an
              optimized, data-driven, and tech-enabled journey to maximize
              recovery efficiency while lowering operational costs. We combine
              deep domain expertise with cutting-edge technology to deliver
              superior outcomes for our partners.
            </p>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <article
                  key={stat.label}
                  className="bg-teal-50 rounded-2xl p-6 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 bg-teal-700 text-white rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </span>
                  <span className="text-sm text-slate-600 mt-1 font-medium">
                    {stat.label}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
