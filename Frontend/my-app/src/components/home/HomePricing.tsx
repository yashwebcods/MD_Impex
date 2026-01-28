const HomePricing = () => {
    const cards = [
        {
            title: 'Transparent Quotation',
            value: 'Clear',
            desc: 'Item-wise pricing with quantities and timelines.',
        },
        {
            title: 'Bulk Order Support',
            value: 'Yes',
            desc: 'Repeat orders with planned procurement cycles.',
        },
        {
            title: 'Documentation Help',
            value: 'Included',
            desc: 'Invoice & packing list guidance as required.',
        },
        {
            title: 'Dispatch Coordination',
            value: 'Timely',
            desc: 'Updates and coordination until delivery handover.',
        },
    ]

    return (
        <section className="pricing-section my-10 px-4">
            <div className="Pricing-Header mx-auto max-w-6xl text-center">
                <div>
                    <h2 className="text-3xl sm:text-4xl my-5 font-semibold text-white">Trade Support</h2>
                </div>
                <div className="flex justify-center">
                    <div className="pricing-text">
                        <h2 className="text-2xl sm:text-3xl font-semibold mt-5 mb-2 text-white">
                            Professional handling with <span className="text-primary">transparent communication.</span>
                        </h2>
                        <p className="text-base sm:text-lg text-white/70">Simple process. Clear updates. Reliable dispatch.</p>
                    </div>
                </div>

                <div className="Pricing-hover mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((c) => (
                        <div key={c.title} className="Pricing-box border border-white/10 bg-[#0F1830]/35">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-semibold mt-2 mb-2">
                                {c.value}
                            </h2>
                            <p className="text-base sm:text-md text-white/80 font-semibold">{c.title}</p>
                            <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomePricing
