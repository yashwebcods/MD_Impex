import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = {
  compact?: boolean
}

const AboutMdImpexSection = ({ compact = false }: Props) => {
  const points = [
    '3000+ e-commerce websites  experience',
    'performance marketing expertise',
    'Amazon Authorized SmartBiz Partner',
    'Complete website + marketing + logistics support',
    'Dedicated team for sellers',
  ]

  return (
    <section id="about" className={compact ? 'py-14' : 'py-16'}>
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="text-sm font-semibold tracking-wide text-blue-300">About MD Impex</div>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              Who We Are
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/75 md:text-base">
              MD Impex is a performance-driven e-commerce agency and Authorized SmartBiz Partner, helping brands launch,
              scale, and grow their D2C websites powered by Amazon technology.
            </p>

            <div className="mt-8 grid gap-3">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/15 to-cyan-500/15">
                    <CheckCircle2 className="h-4 w-4 text-blue-300" />
                  </div>
                  <div className="text-sm font-semibold text-white/85">{p}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-blue-500/20 transition-all hover:shadow-blue-500/40"
              >
                Book a Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F1830]/45 to-[#0F1830]/20 p-8 shadow-[0_18px_55px_rgba(0,0,0,0.35)]">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-r from-blue-500/25 to-cyan-500/25 blur-3xl" />
              <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl" />

              <div className="relative">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-bold text-white">3000+</div>
                    <div className="mt-1 text-xs font-semibold text-white/70">Websites Experience</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-bold text-white">Amazon</div>
                    <div className="mt-1 text-xs font-semibold text-white/70">SmartBiz Partner</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-bold text-white">End-to-End</div>
                    <div className="mt-1 text-xs font-semibold text-white/70">Setup + Marketing + Logistics</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-bold text-white">Dedicated</div>
                    <div className="mt-1 text-xs font-semibold text-white/70">Seller Support Team</div>
                  </div>
                </div>

                {compact ? null : (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold text-white">Built for D2C Growth</div>
                    <div className="mt-2 text-sm leading-relaxed text-white/70">
                      From store launch to performance marketing and fulfilment workflows, we help you scale faster with a
                      predictable system.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMdImpexSection
