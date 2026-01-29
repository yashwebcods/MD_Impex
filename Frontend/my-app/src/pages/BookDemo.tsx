import { useEffect, useMemo, useState } from 'react'
import {
    BadgeCheck,
    Facebook,
    Instagram,
    Linkedin,
    MapPin,
    Megaphone,
    TrendingUp,
    User,
    Youtube,
    ArrowRight,
} from 'lucide-react'
import Header from '../components/Header'
import { demoApi, type DemoPayload } from '../services/api'
import HomeTestimonials from '../components/home/HomeTestimonials'

const BookDemo = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [statusMessage, setStatusMessage] = useState('')

    const [touched, setTouched] = useState({ name: false, city: false, phone: false })
    const [submitAttempted, setSubmitAttempted] = useState(false)

    const canSubmit = useMemo(() => {
        return name.trim().length > 0 && city.trim().length > 0 && phone.trim().length >= 10
    }, [city, name, phone])

    const errors = useMemo(() => {
        const next: { name?: string; city?: string; phone?: string } = {}

        if (!name.trim()) next.name = 'Please enter your name.'
        if (!city.trim()) next.city = 'Please enter your city.'
        if (!phone.trim()) next.phone = 'Please enter your phone number.'
        else if (phone.trim().length < 10) next.phone = 'Phone number must be 10 digits.'

        return next
    }, [city, name, phone])

    const showError = (field: keyof typeof touched) => {
        return (touched[field] || submitAttempted) && Boolean(errors[field])
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' })
    }, [])

    const roadSteps = useMemo(
        () => [
            {
                title: 'Share Your Requirement',
                description: 'Tell us product specs, quantity, target price, and delivery location.',
                icon: User,
            },
            {
                title: 'Sourcing & Quotation',
                description: 'We shortlist suppliers, verify availability, and share a clear quotation.',
                icon: Megaphone,
            },
            {
                title: 'Quality & Documentation',
                description: 'Sampling/inspection support with invoice, packing list, and required documents.',
                icon: BadgeCheck,
            },
            {
                title: 'Dispatch & Repeat Orders',
                description: 'Safe packaging, timely dispatch, and smooth re-ordering for scale.',
                icon: TrendingUp,
            },
        ],
        [],
    )

    return (
        <>
            <div className="min-h-screen pt-[76px]" style={{ backgroundColor: 'rgb(20,41,65)' }}>
                {/* Hero Section */}
                <Header disableScrolledStyle />
                <section className="relative overflow-hidden py-12 md:py-20">
                    <div className="absolute inset-0"></div>
                    <div className="relative mx-auto max-w-7xl px-4 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Animated Images & Content */}
                            <div className="space-y-8">
                                <div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                                        Book Your <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Free Demo</span>
                                    </h1>
                                    <p className="text-xl text-white/70 mb-8">
                                        Experience how md impex.ai transforms your sourcing process with professional support
                                    </p>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-30"></div>
                                <div className="relative bg-gradient-to-b from-[#0F1830]/80 to-[#0F1830]/40 border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                                    <form
                                        onSubmit={async (e) => {
                                            e.preventDefault()
                                            setSubmitAttempted(true)
                                            if (!canSubmit || status === 'loading') return
                                            setStatus('loading')
                                            setStatusMessage('')
                                            try {
                                                const payload: DemoPayload = { name, city, phoneNumber: phone }
                                                const result = await demoApi.submitDemo(payload)
                                                if (!result.success) throw new Error(result.message || 'Submission failed')
                                                setStatus('success')
                                                setStatusMessage(result.message || 'Demo request submitted successfully!')
                                                setName('')
                                                setCity('')
                                                setPhone('')
                                                setTouched({ name: false, city: false, phone: false })
                                                setSubmitAttempted(false)
                                            } catch (err: any) {
                                                setStatus('error')
                                                setStatusMessage(err.message || 'Something went wrong. Please try again.')
                                            }
                                        }}
                                    >
                                        <div className="space-y-6">
                                            {/* Name Field */}
                                            <div className="group">
                                                <label className="block text-sm font-semibold text-white/80 mb-2">
                                                    Your Name <span className="text-red-400">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                                                    <input
                                                        className={`relative w-full rounded-xl border bg-white/5 px-5 py-4 text-white outline-none transition-all duration-200 placeholder-white/30 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-cyan-500/20 ${showError('name') ? 'border-red-500/40' : 'border-white/10'}`}
                                                        placeholder="Enter Your Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                                                        autoComplete="name"
                                                        aria-invalid={showError('name')}
                                                        required
                                                    />
                                                    <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
                                                </div>
                                                {showError('name') ? (
                                                    <div className="mt-2 text-xs font-semibold text-red-300">{errors.name}</div>
                                                ) : null}
                                            </div>

                                            <div className="group">
                                                <label className="block text-sm font-semibold text-white/80 mb-2">
                                                    City <span className="text-red-400">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                                                    <input
                                                        className={`relative w-full rounded-xl border bg-white/5 px-5 py-4 text-white outline-none transition-all duration-200 placeholder-white/30 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-cyan-500/20 ${showError('city') ? 'border-red-500/40' : 'border-white/10'}`}
                                                        placeholder="Enter City"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                        onBlur={() => setTouched((p) => ({ ...p, city: true }))}
                                                        autoComplete="address-level2"
                                                        aria-invalid={showError('city')}
                                                        required
                                                    />
                                                    <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
                                                </div>
                                                {showError('city') ? (
                                                    <div className="mt-2 text-xs font-semibold text-red-300">{errors.city}</div>
                                                ) : null}
                                            </div>

                                            {/* Phone Field */}
                                            <div className="group">
                                                <label className="block text-sm font-semibold text-white/80 mb-2">
                                                    Phone Number <span className="text-red-400">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                                                    <div className="relative flex">
                                                        <span className="flex items-center justify-center rounded-l-xl border border-white/10 bg-white/5 px-4 text-sm text-white/70 border-r-0">
                                                            +91
                                                        </span>
                                                        <input
                                                            className={`w-full rounded-r-xl border bg-white/5 px-5 py-4 text-white outline-none transition-all duration-200 placeholder-white/30 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-cyan-500/20 ${showError('phone') ? 'border-red-500/40' : 'border-white/10'}`}
                                                            inputMode="numeric"
                                                            placeholder="Enter 10 Digit Phone Number"
                                                            value={phone}
                                                            onChange={(e) => {
                                                                const next = e.target.value.replace(/\D/g, '').slice(0, 10)
                                                                setPhone(next)
                                                            }}
                                                            onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                                                            autoComplete="tel"
                                                            aria-invalid={showError('phone')}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
                                                </div>
                                                {showError('phone') ? (
                                                    <div className="mt-2 text-xs font-semibold text-red-300">{errors.phone}</div>
                                                ) : (
                                                    <div className="mt-2 text-xs font-semibold text-white/45">We’ll only use this to contact you about your demo.</div>
                                                )}
                                            </div>

                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className={`mt-8 w-full py-4 px-6 rounded-xl font-semibold text-lg shadow-lg transition-all duration-200 transform ${canSubmit && status !== 'loading' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0' : 'cursor-not-allowed bg-white/10 text-white/50'}`}
                                            disabled={!canSubmit || status === 'loading'}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                {status === 'loading' ? (
                                                    <>
                                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                                        </svg>
                                                        Submitting...
                                                    </>
                                                ) : canSubmit ? 'Book Free Demo' : 'Complete required fields'}
                                                {canSubmit && status !== 'loading' && <ArrowRight className="w-5 h-5" />}
                                            </span>
                                        </button>

                                        {/* Status Message */}
                                        {statusMessage && (
                                            <div className={`mt-4 p-3 rounded-lg text-sm text-center ${status === 'success' ? 'bg-green-500/10 text-green-300 border border-green-500/20' : 'bg-red-500/10 text-red-300 border border-red-500/20'}`}>
                                                {statusMessage}
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section - UPDATED BACKGROUND */}
                {/* <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                What Our <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Clients</span> Say
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                Businesses trust MD Impex for reliable sourcing and professional support
                            </p>
                        </div>

                        <div className="mt-10 overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${activeTestimonialPage * 100}%)` }}
                            >
                                {testimonialPages.map((page, pageIdx) => (
                                    <div className="min-w-full" key={`page-${pageIdx}`}>
                                        <div
                                            className={`grid gap-6 ${testimonialPerPage === 1 ? 'grid-cols-1' : testimonialPerPage === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
                                        >
                                            {page.map((t) => (
                                                <div
                                                    key={t.title}
                                                    className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0F1830]/40 to-[#0F1830]/20 p-6 transition-all duration-200 "
                                                >
                                                    <div className="text-lg font-bold text-white">{t.title}</div>
                                                    <div className="mt-4 text-sm leading-relaxed text-white/75">&quot;{t.quote}&quot;</div>
                                                    <div className="mt-6 text-xs font-semibold text-white/70">{t.brand}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-7 flex justify-center gap-2">
                            {testimonialPages.map((_, idx) => (
                                <button
                                    key={`dot-${idx}`}
                                    type="button"
                                    aria-label={`Go to testimonials page ${idx + 1}`}
                                    onClick={() => setActiveTestimonialPage(idx)}
                                    className={`h-2 rounded-full transition-all ${idx === activeTestimonialPage ? 'w-7 bg-gradient-to-r from-blue-500 to-cyan-500' : 'w-2 bg-white/25 hover:bg-white/35'}`}
                                />
                            ))}
                        </div>
                    </div>
                </section> */}
                <HomeTestimonials/>
                {/* Roadmap Section - UPDATED BACKGROUND */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0F1830]/40 to-[#0F1830]/20 px-6 py-12">
                            <h2 className="text-center text-4xl font-bold text-white">
                                Your <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Roadmap</span> with md impex.ai
                            </h2>

                            <div className="relative mx-auto mt-12 max-w-6xl">
                                <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-emerald-500/20" />

                                <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
                                    {roadSteps.map((step, index) => {
                                        const Icon = step.icon
                                        return (
                                            <div key={step.title} className="text-center group">
                                                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                                                    <Icon className="text-blue-400" size={20} />
                                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                                                        {index + 1}
                                                    </div>
                                                </div>
                                                <div className="mt-6 text-lg font-bold text-white">{step.title}</div>
                                                <div className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/10  py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-5">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MI</span>
                                    </div>
                                    <div className="text-2xl font-bold text-white">md impex.ai</div>
                                </div>

                                <p className="text-white/70 text-sm mb-6">
                                    Your trusted partner for global sourcing, quality assurance, and seamless trade operations.
                                </p>

                                <div className="flex items-center gap-3 mb-6">
                                    <a
                                        href="#"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/85 transition-all hover:bg-[#2F86FF] hover:text-white"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/85 transition-all hover:bg-[#2F86FF] hover:text-white"
                                        aria-label="Facebook"
                                    >
                                        <Facebook size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/85 transition-all hover:bg-[#2F86FF] hover:text-white"
                                        aria-label="YouTube"
                                    >
                                        <Youtube size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/85 transition-all hover:bg-[#2F86FF] hover:text-white"
                                        aria-label="Instagram"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                </div>

                                <div className="flex items-start gap-3 text-sm text-white/70">
                                    <MapPin className="mt-0.5 text-white/60" size={18} />
                                    <div>
                                        MD Impex, India
                                        <br />
                                        Serving PAN India & Global Clients
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
                                <div>
                                    <div className="text-sm font-semibold text-white/85 mb-4">Product</div>
                                    <div className="space-y-3 text-sm text-white/70">
                                        <a className="block hover:text-white transition-colors" href="#">
                                            Products & Categories
                                        </a>
                                        <a className="block hover:text-white transition-colors" href="#">
                                            Client Stories
                                        </a>
                                        <a className="block hover:text-white transition-colors" href="#">
                                            Request a Quote
                                        </a>
                                        <a className="block hover:text-white transition-colors" href="#">
                                            Get in Touch
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm font-semibold text-white/85 mb-4">Company</div>
                                    <div className="space-y-3 text-sm text-white/70">
                                        <a className="block hover:text-white transition-colors" href="#">
                                            Home
                                        </a>
                                        <a className="block hover:text-white transition-colors" href="#">
                                            About MD Impex
                                        </a>
                                        <a className="block hover:text-white transition-colors" href="#">
                                            Industries We Serve
                                        </a>
                                        <a className="block hover:text-white transition-colors" href="#">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm font-semibold text-white/85 mb-4">Legal</div>
                                    <div className="space-y-3 text-sm text-white/70">
                                        <a className="block hover:text-white transition-colors" href="#">
                                            Privacy Policy
                                        </a>
                                        <a className="block hover:text-white transition-colors" href="#">
                                            Terms and Conditions
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/55 text-center">
                            &copy; {new Date().getFullYear()} Md Impex. All rights reserved
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default BookDemo