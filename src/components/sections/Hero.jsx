
const stats = [
  { value: '47+', label: 'Cities Covered' },
  { value: '6000+', label: 'PIN Codes' },
  { value: '80+', label: 'Team Members' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-teal-50 via-white to-cyan-50"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28 lg:px-8">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-teal-100 bg-white px-4 py-2 text-sm font-semibold text-teal-800">
            Collection & Recovery Experts
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            The Best Way to{' '}
            <span className="text-teal-700">
              Manage Collections
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
            Analytics-driven campaigning and technology-enabled
            operations designed to improve collection efficiency.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-teal-700 px-6 py-3.5 font-semibold text-white hover:bg-teal-800"
            >
              Book Demo
            </a>

            <a
              href="#services"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 hover:border-teal-700 hover:text-teal-700"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white bg-white p-6 shadow-xl sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Our Reach
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            Technology meets collections
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            A data-led approach to customer engagement, field operations,
            and recovery management.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-teal-50 p-4"
              >
                <p className="text-2xl font-bold text-teal-800">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
