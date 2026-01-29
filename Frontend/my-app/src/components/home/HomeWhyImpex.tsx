import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseMDImpex = () => {
  const coreStrengths = [
    "Authorized Amazon Partner",
    "Amazon-Powered Checkout & Logistics",
    "1 Month Free Marketing Service",
    "Transparent Pricing (No Hidden Charges)",
    "Go Live Within a Week (7–10 Days)",
    "Designated Account Manager",
  ];

  const consultingCards = [
    {
      title: 'Marketing Strategy',
      description:
        'Strategize campaigns as per category, optimise for RTO, refresh creatives, and rebalance daily campaign budgets.',
    },
    {
      title: 'Pricing Strategy',
      description:
        'Set optimal prices through competitor benchmarking, unit economic analysis and product wise marketing feedback.',
    },
    {
      title: 'RTO Management',
      description:
        'User segmentation basis intent, allocate best-fit couriers, and increase NDR conversions.',
    }
  ];

  return (
    <div style={{ backgroundColor: 'rgb(20,41,65)' }}>
      {/* Hero Section */}
      <div className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-6 mt-8 md:text-5xl">
                Why Brands Choose <span className="text-blue-300"> <br></br>md impex.ai</span>
              </h2>
              <p className="text-xl text-white/80">
                Unlike typical agencies, we don't just "run ads." We engineer predictable lead & revenue systems.
              </p>
            </div>

            <div className="w-full">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0F1830]/40 to-[#0F1830]/20 px-6 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                <div className="text-lg font-semibold text-white">Our Core Strengths</div>
                <div className="mt-6 space-y-4">
                  {coreStrengths.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/25 to-cyan-500/25 border border-blue-500/20">
                        <CheckCircle className="h-4 w-4 text-blue-300" />
                      </div>
                      <div className="text-sm font-semibold text-white/85">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#0F1830]/70 via-[#0F1830]/45 to-[#0F1830]/25 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
              <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
            </div>

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold tracking-wide text-blue-300">MD Impex.ai</div>
                <h3 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                  Creative strategy that looks premium and converts
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-white/75 md:text-base">
                  We combine conversion-first landing pages, high-performing creatives, and performance marketing to help brands scale with clarity and control.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Link
                    to="/book-demo"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
                  >
                    Book Free Demo
                  </Link>
                  <div className="text-xs font-semibold text-white/60">
                    Go live in 7–10 days
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white">What you get</div>
                    <div className="text-xs font-semibold text-white/60">End-to-end</div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                      <div className="text-sm text-white/80">Premium creatives & ad hooks for Meta/Google</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
                      <div className="text-sm text-white/80">Landing pages optimized for conversion & trust</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />
                      <div className="text-sm text-white/80">Weekly reporting, testing, and optimization</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="max-w-xl">
              <div className="text-sm font-semibold tracking-wide text-blue-300">Growth Consulting</div>
              <h3 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
                Our Experts focus on
                <br />
                your true profitability
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-white/70">
                Dedicated experts who help you sustain profitability & grow revenue by supporting you with
              </p>
            </div>

            <div className="grid gap-4">
              {consultingCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0F1830]/40 to-[#0F1830]/20 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
                >
                  <div className="text-sm font-semibold text-white">{card.title}</div>
                  <div className="mt-2 text-xs leading-relaxed text-white/70">{card.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMDImpex;