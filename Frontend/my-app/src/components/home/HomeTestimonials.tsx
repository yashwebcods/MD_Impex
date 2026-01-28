const HomeTestimonials = () => {
    const testimonials = [
        {
            logo: '/BrandImages/b1.webp',
            brand: 'Aarav Traders',
            quote: 'Fast responses, clear options, and transparent communication. MD Impex made our sourcing process much smoother.',
        },
        {
            logo: '/BrandImages/b2.png',
            brand: 'NorthBridge Imports',
            quote: 'Documentation and dispatch were handled professionally. Shipments were on time and properly packed.',
        },
        {
            logo: '/BrandImages/b3.webp',
            brand: 'Kavya Enterprises',
            quote: 'We appreciated the quality checks and the updates during processing. The delivered quality matched expectations.',
        },
        {
            logo: '/BrandImages/b4.webp',
            brand: 'Sunrise Wholesale',
            quote: 'Great coordination for bulk orders. We were able to reorder without delays and keep our supply stable.',
        },
        {
            logo: '/BrandImages/b1.webp',
            brand: 'Global Exports Ltd',
            quote: 'Exceptional service from start to finish. Their quality control is unmatched in the industry.',
        },
        {
            logo: '/BrandImages/b2.png',
            brand: 'Premium Suppliers',
            quote: 'Reliable and professional. They handle all the complexities of international shipping seamlessly.',
        },
    ]

    return (
        <section id="testimonials" className="my-16 overflow-hidden">
            <div className="mx-auto max-w-6xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Client <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Stories</span>
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Hear what businesses say about their sourcing journey with MD Impex
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0F1830] to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0F1830] to-transparent z-10"></div>
                    
                    {/* Marquee Animation */}
                    <div className="flex overflow-hidden">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <div 
                                    key={`${testimonial.brand}-${index}`}
                                    className="inline-block mx-4 w-[380px] md:w-[420px] flex-shrink-0"
                                >
                                    <div className="bg-gradient-to-b from-[#0F1830]/60 to-[#0F1830]/30 border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-sm h-full">
                                        {/* Brand Logo */}
                                        <div className="flex justify-center mb-4">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center p-2">
                                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center">
                                                    <img
                                                        src={testimonial.logo}
                                                        alt={testimonial.brand}
                                                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Brand Name */}
                                        <div className="text-center mb-3">
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-1">{testimonial.brand}</h3>
                                        </div>
                                        
                                        {/* Quote - WRAPPED TEXT (no scroll) */}
                                        <div className="min-h-[120px]">
                                            <p className="text-white/80 text-center text-sm md:text-base leading-relaxed italic break-words whitespace-normal w-full">
                                                "{testimonial.quote}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pause on hover */}
                    <style jsx>{`
                        @keyframes marquee {
                            0% {
                                transform: translateX(0%);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        .animate-marquee {
                            animation: marquee 40s linear infinite;
                        }
                        .animate-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                </div>

                {/* Mobile View - Static Grid */}
                <div className="mt-8 md:hidden grid grid-cols-1 gap-6">
                    {testimonials.slice(0, 2).map((testimonial, index) => (
                        <div 
                            key={`mobile-${testimonial.brand}-${index}`}
                            className="bg-gradient-to-b from-[#0F1830]/60 to-[#0F1830]/30 border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-sm"
                        >
                            {/* Brand Logo */}
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                                    <img
                                        src={testimonial.logo}
                                        alt={testimonial.brand}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                            </div>
                            
                            {/* Brand Name */}
                            <div className="text-center mb-3">
                                <h3 className="text-lg font-bold text-white mb-1">{testimonial.brand}</h3>
                            </div>
                            
                            {/* Quote - WRAPPED for mobile */}
                            <div className="min-h-[120px]">
                                <p className="text-white/80 text-center text-sm leading-relaxed italic break-words whitespace-normal w-full">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeTestimonials