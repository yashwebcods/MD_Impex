const HomeImpact = () => {
    return (
        <section className="my-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="text-center mb-12">                   
                    <h2 className="text-4xl font-semibold text-center text-white mb-4">
                        Our <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Pricing</span>
                    </h2>
                    
                    <p className="text-center text-white/70 max-w-2xl mx-auto">
                        Flexible plans designed for businesses of all sizes. Choose what works best for your procurement needs.
                    </p>
                </div>

                {/* Main Layout - Left Box (30-Day Trial) + Right 3 boxes in 2×1 layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    
                    {/* Left Box - 30-Day Trial */}
                    <div className="lg:col-span-1">
                        <div className="rounded-2xl border p-8 bg-gradient-to-b from-[#0F1830] to-[#1a2b4d] text-white/90 border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.55)] h-full">
                            <h3 className="text-2xl font-semibold mb-4">Free Trial</h3>
                            <p className="text-white/80 mb-6">
                                Risk-free onboarding with full platform access and dedicated support.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span>Risk-free onboarding</span>
                                </div>
                                
                                <div className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span>Volume discounts available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - 3 Boxes in 2×1 Layout */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Top Left Box in Right Grid - Subscription Fee */}
                        <div className="rounded-2xl border p-8 bg-[#0F1830]/55 text-white/90 border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.55)]">
                            <div className="text-center">
                                <div className="text-7xl font-bold mb-2">₹0</div>
                                <h4 className=" font-semibold mb-2">Subscription Fee</h4>
                            </div>
                        </div>

                        {/* Top Right Box in Right Grid - Website Setup & Maintenance Cost */}
                        <div className="rounded-2xl border p-8 bg-[#2F86FF] text-white border-[rgba(47,134,255,0.60)] shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.55)]">
                            <div className="text-center">
                                <div className="text-7xl font-bold mb-2">5K</div>
                                <h4 className=" font-semibold mb-2">Website Setup & Maintenance Cost</h4>
                            </div>
                        </div>

                        {/* Bottom Full Width Box - Commission on Marketing Budget */}
                        <div className="md:col-span-2 rounded-2xl border p-8 bg-gradient-to-r from-[#0F1830] to-[#1a2b4d] text-white/90 border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.55)]">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="text-center md:text-left">
                                    <div className="text-4xl font-bold mb-2">0%</div>
                                    <h4 className="font-semibold mb-2">Commission on Marketing Budget</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeImpact