const HomeServices = () => {
    const services = [
        {
            title: ' D2C Website Development',
            desc: 'We build high-converting, scalable D2C websites designed to grow your online business. Authorized Amazon-Trusted Website Solutions Shopify Website Development',
        },
        {
            title: ' Performance Marketing',
            desc: 'Result-driven marketing strategies focused on growth, ROI, and conversions.Facebook & Google Ads ManagementROI-Focused Campaigns with performance tracking  Conversion Optimization for higher sales and lower ad costs',
        },
        {
            title: ' Shipping & Logistics Setup',   
            desc: ' End-to-end logistics solutions for smooth and reliable order fulfilment. Amazon Fulfilment Integration Courier Partner Integrations COD & Prepaid Order Management',
        },
        {
            title: 'Analytics & Reporting',
            desc: 'Make data-driven decisions with real-time insights and performance tracking. Google Analytics Dashboard Setup Profit & Sales Tracking Reports Seller Performance & Growth Insights',
        },
    ]

  return (
        <section id="HomeServices" className="my-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Our <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-white/70 text-lg">
                        MD Impex is built for businesses that need reliable sourcing, professional handling, and on-time dispatch.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((s,) => (
                        <div
                            key={s.title}
                            className="group relative"
                        >
                            {/* Animated background effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                            
                            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#0F1830]/80 to-[#0F1830]/40 p-7 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_60px_rgba(0,200,255,0.15)] h-full">                                
                                {/* Title with gradient line */}
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                                        {s.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
                                </div>
                                
                                {/* Description */}
                                <p className="text-white/70 text-sm leading-relaxed mb-6">
                                    {s.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default HomeServices
