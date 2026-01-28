const HomeTrustedBy = () => {
    const trustedLogos = [
        '/BrandImages/b1.webp',
        '/BrandImages/b2.png',
        '/BrandImages/b3.webp',
        '/BrandImages/b4.webp',
        '/BrandImages/b5.png',
        '/BrandImages/b6.webp',
        '/BrandImages/b7.png',
        '/BrandImages/b8.png',
        '/BrandImages/b9.png',
        '/BrandImages/b10.png',
        '/BrandImages/b11.png',
        '/BrandImages/b12.png',
        '/BrandImages/b13.webp',
        '/BrandImages/b14.png',
        '/BrandImages/b15.png',
        '/BrandImages/b16.webp',
        '/BrandImages/b17.png',
        '/BrandImages/b18.avif',
        '/BrandImages/b19.png',
        '/BrandImages/b20.png',
        '/BrandImages/b21.webp',
        '/BrandImages/b22.webp',
        '/BrandImages/b23.webp',
        '/BrandImages/b24.png',
    ]

    // Create seamless loop
    const trustedLogosLoop = [...trustedLogos, ...trustedLogos]

    return (
        <section id="clients" className="py-16 overflow-hidden" >
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                        {/* Left line - transparent to white */}
                        <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-white/50 to-white"></div>

                        <span className="text-sm font-semibold text-white uppercase tracking-wider px-3">
                            Trusted Partnerships
                        </span>

                        {/* Right line - white to transparent */}
                        <div className="h-[2px] w-16 bg-gradient-to-l from-transparent via-white/50 to-white"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7">
                        Trusted by{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            Buyers & Business Partners
                        </span>
                    </h2>
                </div>

                {/* Logo Marquee */}
                <div className="relative">
                    {/* Gradient edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[rgb(20,41,65)] to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[rgb(20,41,65)] to-transparent z-10"></div>

                    {/* Logo Container */}
                    <div className="py-8 overflow-hidden">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {trustedLogosLoop.map((src, idx) => (
                                <div
                                    className="inline-flex items-center justify-center mx-3 group"
                                    key={`logo-${idx}`}
                                >
                                    <div className="relative bg-gradient-to-br from-[rgb(25,46,70)] to-[rgb(15,36,60)] p-2 rounded-xl border border-yellow-500/10 shadow-lg transition-all duration-300 hover:border-yellow-500/30 hover:scale-[1.02] hover:shadow-yellow-500/10 min-w-[100px] h-[80px] flex items-center justify-center">
                                        <img
                                            src={src}
                                            className="h-full w-full object-contain transition-all duration-300 opacity-95 group-hover:opacity-100"
                                            alt="Partner logo"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                    will-change: transform;
                }
                
                /* Pause animation on hover */
                .relative:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}

export default HomeTrustedBy