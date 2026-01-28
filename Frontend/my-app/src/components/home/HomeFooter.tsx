import { Facebook, Instagram, Linkedin, MapPin, Youtube } from 'lucide-react'

const HomeFooter = () => {
    return (
        <footer className=" py-16">
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
    )
}

export default HomeFooter
