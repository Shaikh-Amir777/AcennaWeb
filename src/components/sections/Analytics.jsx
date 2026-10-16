import React from 'react';
import { HiUserGroup, HiMagnifyingGlassCircle, HiChartBarSquare } from 'react-icons/hi2';

const features = [
  {
    icon: HiUserGroup,
    title: 'Customer Segmentation & Clustering',
    points: [
      'Uses repayment behavior patterns and machine learning to segment customers into actionable clusters',
      'Predictive models identify optimal contact strategies for each segment',
    ],
  },
  {
    icon: HiMagnifyingGlassCircle,
    title: 'Skip Tracing Intelligence',
    points: [
      'AI-powered skip tracing engine with 500+ legitimate data sources',
      'Bureau reports, alternate datasets, and public records for maximum contactability',
      'Increases customer contact rate by over 60%',
    ],
  },
  {
    icon: HiChartBarSquare,
    title: 'Campaign Optimization',
    points: [
      'Multi-channel campaign monitoring (SMS, IVR, WhatsApp, Email)',
      'Real-time response tracking and engagement analytics',
      'Continuous refinement of recovery paths based on data',
    ],
  },
];

const stats = [
  { value: '60%+', label: 'Contact Rate Improvement' },
  { value: '30%+', label: 'Collection Efficiency' },
  { value: '500+', label: 'Data Sources' },
  { value: '24/7', label: 'Real-time Monitoring' },
];

export default function Analytics() {
  return (
    <section id="analytics" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Data-Driven Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Analytics That Drive Results
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Leveraging data science and AI to optimize every stage of the collection lifecycle
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={feature.title}
                className={`bg-white rounded-2xl border border-slate-100 p-8 md:p-12 flex flex-col ${
                  isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-8 md:gap-12 transition-shadow duration-300 hover:shadow-xl`}
              >
                {/* Icon Area */}
                <div className="flex-shrink-0 w-full md:w-5/12 flex justify-center">
                  <div className="bg-teal-50 rounded-2xl w-full max-w-xs md:max-w-none aspect-square flex items-center justify-center">
                    <Icon className="w-20 h-20 md:w-28 md:h-28 text-teal-700" />
                  </div>
                </div>

                {/* Text Area */}
                <div className="flex-1 w-full md:w-7/12">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    {feature.title}
                  </h3>
                  <ul className="space-y-4">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-teal-700" />
                        <span className="text-slate-600 text-base md:text-lg leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="bg-teal-700 rounded-2xl p-8 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-teal-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
