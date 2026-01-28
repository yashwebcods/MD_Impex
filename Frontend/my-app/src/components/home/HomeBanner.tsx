import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current)
      }
    }
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center bg-[rgb(20,41,65)] px-4 py-20 md:px-8 md:py-24">
      {/* Dark gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950"></div>
        {/* Animated gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2 animate-float rounded-full bg-gradient-to-r from-cyan-900/15 to-emerald-900/15 blur-3xl animation-delay-2000"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      {/* Main content container */}
      <div
        ref={bannerRef}
        className={`w-full max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* Content wrapper with glass effect */}
        <div>
          {/* Main heading with perfect sizing */}
          <div className="text-center">
            <h1 className={`text-4xl font-bold leading-tight text-white transition-all duration-700 md:text-5xl lg:text-5xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
              <span className="block">Scaling Your Business Through Powerful </span>
              <span className={`mt-4 block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-[1.4] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                Digital Marketing Strategies
              </span>
            </h1>
            {/* Subheading with perfect line spacing */}
            <p className={`mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-gray-300 transition-all duration-700 delay-500 md:text-xl md:leading-relaxed ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}> We provide a complete one-stop solution covering performance marketing and end-to-end website setup to help brands scale faster.
            </p>

            {/* CTA Button - prominent on dark theme */}
            <div className={`mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
              <Link
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 px-12 py-5 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 active:scale-95"
                to="/book-demo"
              >
                {/* Hover gradient overlay */}
                <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-700 via-cyan-700 to-emerald-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

                {/* Button content */}
                <span className="relative z-10 inline-flex items-center gap-3 text-lg">
                  Get Free Consultation
                </span>

                {/* Pulse indicator */}
                <span className="relative ml-4 flex h-6 w-6 items-center justify-center">
                  <span className="absolute h-6 w-6 animate-ping rounded-full bg-white/40"></span>
                  <span className="h-2 w-2 rounded-full bg-white"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Glow effect for text */
        .text-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5),
                       0 0 40px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  )
}

export default HomeBanner