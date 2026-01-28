import { useMemo, useState } from 'react'
import { contactApi, type ContactPayload } from '../../services/api'

const HomeContact = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [statusMessage, setStatusMessage] = useState('')

    const canSubmit = useMemo(() => {
        return fullName.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0
    }, [email, fullName, message])

    return (
        <section id="contact" className="my-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="relative">
                        <div className="relative">
                            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
                                Let&apos;s discuss your <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">requirement</span>
                            </h2>
                            <p className="mt-6 text-white/70 text-lg">
                                Share product details and quantity — we&apos;ll get back with options and a quotation.
                            </p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="relative">                     
                        <form
                            className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F1830]/70 to-[#0F1830]/40 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm overflow-hidden"
                            onSubmit={async (e) => {
                                e.preventDefault()
                                // Handle form submission
                                if (!canSubmit || status === 'loading') return

                                setStatus('loading')
                                setStatusMessage('')

                                const payload: ContactPayload = {
                                    fullName,
                                    email,
                                    phoneNumber: phoneNumber.trim().length ? phoneNumber : undefined,
                                    message,
                                }

                                const result = await contactApi.submitContact(payload)
                                if (result.success) {
                                    setStatus('success')
                                    setStatusMessage(result.message || 'Message sent successfully')
                                    setFullName('')
                                    setEmail('')
                                    setPhoneNumber('')
                                    setMessage('')
                                } else {
                                    setStatus('error')
                                    setStatusMessage(result.message)
                                }
                            }}
                        >
                            {/* Form Fields */}
                            <div className="space-y-6">
                                {/* Full Name Field */}
                                <div className="group">
                                    <label className="block text-sm font-medium text-white/70 mb-2">
                                        Full name <span className="text-red-400">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                                        <input
                                            className="relative w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-white/10 placeholder-white/30"
                                            type="text"
                                            placeholder="Enter your full name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                        />
                                        <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Email Field */}
                                    <div className="group">
                                        <label className="block text-sm font-medium text-white/70 mb-2">
                                            Email <span className="text-red-400">*</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                                            <input
                                                className="relative w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-white/10 placeholder-white/30"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
                                        </div>
                                    </div>

                                    {/* Phone Field */}
                                    <div className="group">
                                        <label className="block text-sm font-medium text-white/70 mb-2">
                                            Phone number
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                                            <input
                                                className="relative w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-white/10 placeholder-white/30"
                                                type="tel"
                                                placeholder="+91 12345 67890"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                            <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="group">
                                    <label className="block text-sm font-medium text-white/70 mb-2">
                                        Message <span className="text-red-400">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                                        <textarea
                                            className="relative w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-white/10 placeholder-white/30 min-h-[140px] resize-none"
                                            placeholder="Tell us about your sourcing requirements..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                        <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className={`group w-full py-4 px-6 rounded-xl text-white font-semibold text-lg shadow-lg transition-all duration-300 transform ${canSubmit && status !== 'loading' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 active:translate-y-0' : 'cursor-not-allowed bg-white/10 text-white/50'}`}
                                    disabled={!canSubmit || status === 'loading'}
                                >
                                    <span className="flex items-center justify-center">
                                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            {statusMessage && (
                                <div className={`mt-4 p-3 rounded-lg text-sm text-center ${status === 'success' ? 'bg-green-500/10 text-green-300 border border-green-500/20' : 'bg-red-500/10 text-red-300 border border-red-500/20'}`}>
                                    {statusMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeContact