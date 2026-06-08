import { ArrowRight, PlayCircle } from "lucide-react";
import Lightfall from '../common/LightFall';

export default function Hero() {
    return (
        // Changed fixed 800px to min-h-screen so mobile content never gets cut off
        <div className="w-full min-h-screen relative overflow-hidden bg-[#0A29FF]">
            
            {/* 1. Background Component wrapper */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Lightfall
                    colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
                    backgroundColor="#0A29FF"
                    speed={0.3}
                    streakCount={1}
                    streakWidth={0.3}
                    streakLength={0.5}
                    glow={0.6}
                    density={0.6}
                    twinkle={1}
                    zoom={1.6}
                    backgroundGlow={0.1}
                    opacity={1}
                    mouseInteraction
                    mouseStrength={0.5}
                    mouseRadius={1.35}
                    color1="#A6C8FF"
                    color2="#5227FF"
                    color3="#FF9FFC"
                />
            </div>

            {/* Background Glow - Scaled down for mobile to avoid blinding screens */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-20 md:top-32 left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[700px] md:h-[700px] bg-violet-600/20 blur-[100px] md:blur-[180px] rounded-full" />
            </div>

            {/* 2. Content wrapper placed securely on top */}
            <div className="relative z-20 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto text-center">
                    
                    {/* Badge - Adjusted margin and text size for 320px screens */}
                    <div className="inline-flex items-center mt-12 sm:mt-20 gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-violet-500/20 bg-linear-to-r from-violet-500/10 via-cyan-500/10 to-pink-500/10 backdrop-blur-md text-white text-xs sm:text-sm font-medium animate-bounce">
                        🚀
                        <span className="bg-linear-to-r from-violet-400 via-cyan-400 to-pink-400 bg-length:200%_200% bg-clip-text text-transparent animate-gradient">
                            Trusted by Startups & Businesses Worldwide
                        </span>
                    </div>

                    {/* Heading - Fluid scaling from mobile (320px) to ultra-wide */}
                    <h1 className="mt-6 font-extrabold leading-[1.1] tracking-tight text-white text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                        Share Your Idea
                        <br />
                        <span className="bg-linear-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            And Make It Real
                        </span>
                    </h1>

                    {/* Description - Readability size optimizations */}
                    <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/60 leading-relaxed px-2 sm:px-0">
                        We design and develop modern web applications, mobile apps, AI
                        solutions, and scalable cloud platforms that help businesses grow
                        faster.
                    </p>

                    {/* CTA Buttons - Stacks on mobile, full side-by-side widths on small mobile screens */}
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto sm:max-w-none">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:scale-105 active:scale-95 transition-all text-sm sm:text-base shadow-lg shadow-indigo-600/20"
                        >
                            Get Free Consultation
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="#portfolio"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 active:scale-95 transition-all text-sm sm:text-base backdrop-blur-xs"
                        >
                            <PlayCircle size={18} />
                            View Our Work
                        </a>
                    </div>

                    {/* Stats - Grid drops seamlessly into 2 columns on mobile viewports */}
                    <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8 max-w-4xl mx-auto border-t border-white/5 pt-10">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">100+</h3>
                            <p className="text-white/50 text-xs sm:text-sm mt-1 sm:mt-2">Projects Delivered</p>
                        </div>

                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">50+</h3>
                            <p className="text-white/50 text-xs sm:text-sm mt-1 sm:mt-2">Happy Clients</p>
                        </div>

                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">10+</h3>
                            <p className="text-white/50 text-xs sm:text-sm mt-1 sm:mt-2">Countries Served</p>
                        </div>

                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">5+</h3>
                            <p className="text-white/50 text-xs sm:text-sm mt-1 sm:mt-2">Years Experience</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}