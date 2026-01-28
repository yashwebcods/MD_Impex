import { CheckCircle } from 'lucide-react';

const WhyChooseMDImpex = () => {
  const coreStrengths = [
    "Authorized Amazon Partner",
    "Amazon-Powered Checkout & Logistics",
    "1 Month Free Marketing Service",
    "Transparent Pricing (No Hidden Charges)",
    "Go Live Within a Week (7–10 Days)",
    "Dedicated Account Manager",
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
                Why Brands Choose <span className="text-blue-300">md impex.ai</span>
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