import { useEffect, useMemo, useRef, useState } from 'react'

const HomeJourney = () => {
    const journeySteps = [
       {
        phase: 'Step 1',
        title: 'Requirement & Planning',
        description: 'We analyze your product needs and create a customized sourcing strategy.',
    },
    {
        phase: 'Step 2',
        title: 'Website Setup & Integrations',
        description: 'We build your procurement portal with supplier management tools.',
    },
    {
        phase: 'Step 3',
        title: 'Product Upload & Configuration',
        description: 'Our team manages your product catalog with detailed specifications.',
    },
    {
        phase: 'Step 4',
        title: 'Testing & Launch',
        description: 'We conduct platform testing and ensure smooth operational launch.',
    },
    {
        phase: 'Step 5',
        title: 'Marketing & Scaling',
        description: 'We implement growth strategies to expand your supplier network.',
    },
        
    ]

    const journeyStepsList = useMemo(() => journeySteps, [])
    const [activeJourneyIndex, setActiveJourneyIndex] = useState(0)
    const journeyCardRefs = useRef<Array<HTMLDivElement | null>>([])

    useEffect(() => {
        const elements = journeyCardRefs.current.filter(Boolean) as HTMLDivElement[]
        if (elements.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue
                    const idx = Number((entry.target as HTMLElement).dataset.journeyIndex)
                    if (!Number.isNaN(idx)) setActiveJourneyIndex(idx)
                }
            },
            {
                root: null,
                rootMargin: '-45% 0px -45% 0px',
                threshold: 0.01,
            },
        )

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [journeyStepsList])

    return (
        // Journey Section
        <section className="journey-section">
            <div className="mx-auto px-4 py-12">
                <h2 className="journey-title text-white">
                    Your <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Sourcing Journey</span> with md impex.ai
                </h2>

                <div className="journey-timeline">
                    <div className="journey-line" />

                    {journeyStepsList.map((step, index) => (
                        <div
                            className={`journey-item ${index % 2 === 0 ? 'journey-right' : 'journey-left'}`}
                            key={step.phase}
                        >
                            <div className="journey-side journey-side-left">
                                {index % 2 === 1 && (
                                    <div
                                        className={`journey-card ${activeJourneyIndex === index ? 'journey-card-blue journey-card-active' : 'journey-card-dark'}`}
                                        data-journey-index={index}
                                        ref={(el) => {
                                            journeyCardRefs.current[index] = el
                                        }}
                                    >
                                        <div className="journey-phase">{step.phase}</div>
                                        <div className="journey-heading">{step.title}</div>
                                        <div className="journey-desc">{step.description}</div>
                                    </div>
                                )}
                            </div>

                            <div className="journey-mid">
                                <div className={`journey-dot${activeJourneyIndex === index ? ' journey-dot-active' : ''}`} />
                            </div>

                            <div className="journey-side journey-side-right">
                                {index % 2 === 0 && (
                                    <div
                                        className={`journey-card ${activeJourneyIndex === index ? 'journey-card-blue journey-card-active' : 'journey-card-dark'}`}
                                        data-journey-index={index}
                                        ref={(el) => {
                                            journeyCardRefs.current[index] = el
                                        }}
                                    >
                                        <div className="journey-phase">{step.phase}</div>
                                        <div className="journey-heading">{step.title}</div>
                                        <div className="journey-desc">{step.description}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeJourney
