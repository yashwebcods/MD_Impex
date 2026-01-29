import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type HeaderProps = {
    disableScrolledStyle?: boolean
}

const Header = ({ disableScrolledStyle }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const scrollOffset = 90

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const links = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Clients', id: 'clients' },
        { label: 'Services', id: 'HomeServices' },
        { label: 'Profitability', id: 'ServicesOfferings' },
        { label: 'Testimonials', id: 'testimonials' },
        { label: 'Contact', id: 'contact' },
    ]

    const scrollToSection = (id: string, attempt = 0) => {
        const el = document.getElementById(id)
        if (!el) {
            if (attempt < 24) {
                window.setTimeout(() => scrollToSection(id, attempt + 1), 50)
            }
            return
        }

        const top = el.getBoundingClientRect().top + window.scrollY - scrollOffset
        window.scrollTo({ top, behavior: 'smooth' })
    }

    const handleNav = (id: string) => {
        setIsOpen(false)
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } })
            return
        }
        scrollToSection(id)
    }

    return (
        <header

            className={`site-header fixed top-0 left-0 right-0 z-[80] pb-3 ${!disableScrolledStyle && isScrolled
                ? 'is-scrolled bg-[#0A1020]/30 backdrop-blur border-b border-white/10'
                : ''
                }`}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Gotu&display=swap');
                .gotu-regular {
                    font-family: 'Gotu', sans-serif;
                    font-weight: 400;
                    font-style: normal;
                }
            `}</style>
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="relative flex h-14 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="text-lg gotu-regular font-Georgia font-semibold tracking-wide text-white"
                            onClick={() => handleNav('home')}
                        >
                            md impex.ai
                        </button>
                    </div>

                    <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-white/80">
                        {links.map((l) => (
                            <button
                                key={l.label}
                                type="button"
                                className="hover:text-white transition-colors"
                                onClick={() => handleNav(l.id)}
                            >
                                {l.label}
                            </button>
                        ))}
                    </nav>

                    <button
                        type="button"
                        className="menu-toggle relative z-[70] md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:bg-white/10"
                        aria-label="Open menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((v) => !v)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {isOpen ? (
                        <div className="mobile-menu md:hidden absolute left-0 right-0 top-[calc(100%+12px)] z-[60] rounded-2xl border border-white/10 bg-[#0A1020]/95 p-3 shadow-xl backdrop-blur">
                            <nav className="flex flex-col">
                                {links.map((l) => (
                                    <button
                                        key={l.label}
                                        type="button"
                                        className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-white"
                                        onClick={() => handleNav(l.id)}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    ) : null}
                </div>
            </div>
        </header>
    )
}

export default Header