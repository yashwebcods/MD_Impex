import { type ComponentType, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, BarChart3, Globe, TrendingUp } from 'lucide-react'

type OfferingKey = 'website' | 'marketing' | 'conversion'

type Offering = {
    key: OfferingKey
    label: string
    title: string
    subtitle: string
    shortPoints: string[]
    longPoints: string[]
    icon: ComponentType<{ className?: string }>
}

const ServicesOfferings = () => {
    const offerings = useMemo<Offering[]>(
        () => [
            {
                key: 'website',
                label: 'Website',
                title: 'Website - Build a strong brand presence',
                subtitle:
                    'MD Impex helps you launch a fast, modern website that looks premium and works smoothly on every device.',
                shortPoints: ['Mobile-first & fast loading', 'SEO-ready pages & structure', 'Lead capture & enquiry forms'],
                longPoints: [
                    'Custom UI aligned with your brand (MD Impex)',
                    'Speed optimization + performance best practices',
                    'Landing pages for campaigns & offers',
                    'Basic analytics setup & event tracking',
                    'WhatsApp click-to-chat & CTAs placement',
                ],
                icon: Globe,
            },
            {
                key: 'marketing',
                label: 'Marketing',
                title: 'Marketing - Content + growth campaigns',
                subtitle:
                    'From content marketing to paid growth, we plan and execute marketing that brings qualified traffic.',
                shortPoints: ['Content marketing strategy', 'Social media creatives & posting plan', 'Meta/Google ads setup'],
                longPoints: [
                    'Content calendar + copywriting support',
                    'Performance campaigns (Meta/Google) with weekly reporting',
                    'Retargeting to bring back interested users',
                    'Creative testing (hooks, visuals, angles)',
                    'Audience research + competitor analysis',
                ],
                icon: BarChart3,
            },
            {
                key: 'conversion',
                label: 'Conversion',
                title: 'Conversion - Turn visitors into customers',
                subtitle:
                    'We optimize user journeys so your traffic converts into leads, orders, and repeat customers.',
                shortPoints: ['CRO improvements', 'Better landing pages & funnels', 'A/B testing recommendations'],
                longPoints: [
                    'Heatmap-style insights (structure guidance)',
                    'Stronger CTAs, trust signals & offer positioning',
                    'Checkout + form optimization for fewer drop-offs',
                    'Tracking & funnel reporting for decisions',
                    'Retention basics (remarketing & email flow guidance)',
                ],
                icon: TrendingUp,
            },
        ],
        [],
    )

    const [activeKey, setActiveKey] = useState<OfferingKey>('website')
    const [expanded, setExpanded] = useState<Record<OfferingKey, boolean>>({
        website: false,
        marketing: false,
        conversion: false,
    })

    const activeOffering = offerings.find((o) => o.key === activeKey) ?? offerings[0]

    const [contentEntered, setContentEntered] = useState(false)

    useEffect(() => {
        setContentEntered(false)
        const t = window.setTimeout(() => setContentEntered(true), 10)
        return () => window.clearTimeout(t)
    }, [activeKey])

    const detailsRef = useRef<HTMLDivElement | null>(null)

    const isExpanded = expanded[activeKey]

    const [detailsMaxHeight, setDetailsMaxHeight] = useState('0px')

    useEffect(() => {
        if (!isExpanded) {
            setDetailsMaxHeight('0px')
            return
        }

        const el = detailsRef.current
        if (!el) return

        const update = () => {
            setDetailsMaxHeight(`${el.scrollHeight}px`)
        }

        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [activeKey, isExpanded])

    const Icon = activeOffering.icon

    return (
        <section id="ServicesOfferings" className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="text-center mb-12">
                    <h2 className="mt-3 text-4xl font-bold text-white">
                     Your Business, Our <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Profit Strategy</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-white/70 text-lg">
                       Choose exactly what your business needs — a high-impact website, performance marketing, or conversion optimization.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F1830]/55 to-[#0F1830]/25 p-5 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {offerings.map((o) => {
                            const isActive = o.key === activeKey
                            return (
                                <button
                                    key={o.key}
                                    type="button"
                                    onClick={() => setActiveKey(o.key)}
                                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all border ${
                                        isActive
                                            ? 'bg-white/10 text-white border-white/25'
                                            : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {o.label}
                                </button>
                            )
                        })}
                    </div>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-30" />
                            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F1830]/70 to-[#0F1830]/30 p-6 overflow-hidden">
                                <div className="absolute inset-0 opacity-30">
                                    <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl" />
                                    <div className="absolute -bottom-28 -right-24 h-56 w-56 rounded-full bg-cyan-500/25 blur-3xl" />
                                </div>

                                <div className="relative">
                                    <div className="text-sm font-semibold text-white/70">Demo Preview</div>
                                    <div className="mt-4 relative">
                                        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                                <div className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                                                <div className="ml-3 h-6 flex-1 rounded-lg bg-white/5" />
                                            </div>

                                            <div className="mt-4 rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-emerald-500/10 border border-white/10 p-6">
                                                <div className="text-xs font-semibold text-white/80">MD Impex</div>
                                                <div className="mt-2 text-lg font-bold text-white">{activeOffering.label}</div>
                                                <div className="mt-2 text-sm text-white/65">High-performing design that matches your business goals.</div>
                                                <div className="mt-5 grid grid-cols-3 gap-3">
                                                    {[1, 2, 3].map((i) => (
                                                        <div
                                                            key={i}
                                                            className="h-10 rounded-lg border border-white/10 bg-white/5"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute -bottom-6 -left-3 w-36 sm:w-40 rounded-2xl border border-white/10 bg-gradient-to-b from-[#0F1830]/70 to-[#0F1830]/30 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
                                            <div className="h-1.5 w-10 rounded-full bg-white/15 mx-auto" />
                                            <div className="mt-3 h-20 rounded-xl border border-white/10 bg-white/5" />
                                            <div className="mt-3 h-8 rounded-lg border border-white/10 bg-white/5" />
                                            <div className="mt-2 h-8 rounded-lg border border-white/10 bg-white/5" />
                                        </div>
                                    </div>

                                    <div className="mt-6 text-xs text-white/55">
                                        Click tabs to switch content. Use View details to expand information.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                className={`transition-all duration-300 ${
                                    contentEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                }`}
                                key={activeOffering.key}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                                        <Icon className="h-5 w-5 text-blue-300" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">{activeOffering.title}</div>
                                        <div className="mt-3 text-sm leading-relaxed text-white/70">{activeOffering.subtitle}</div>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-3">
                                    {activeOffering.shortPoints.map((p) => (
                                        <div key={p} className="flex items-start gap-3">
                                            <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                                            <div className="text-sm text-white/80">{p}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200 transition-colors"
                                        onClick={() =>
                                            setExpanded((prev) => ({
                                                ...prev,
                                                [activeKey]: !prev[activeKey],
                                            }))
                                        }
                                    >
                                        {isExpanded ? 'View Less' : 'View Detail'}
                                        <ArrowRight className={`h-4 w-4 transition-transform ${isExpanded ? '-rotate-90' : 'rotate-90'}`} />
                                    </button>

                                    <div
                                        ref={detailsRef}
                                        className="overflow-hidden transition-[max-height,opacity] duration-500 ease-out"
                                        style={{ maxHeight: detailsMaxHeight, opacity: isExpanded ? 1 : 0 }}
                                    >
                                        <div className="mt-5 space-y-3">
                                            {activeOffering.longPoints.map((p) => (
                                                <div key={p} className="flex items-start gap-3">
                                                    <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                                                    <div className="text-sm text-white/75">{p}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesOfferings
