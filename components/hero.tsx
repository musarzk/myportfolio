'use client';

import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll';

export default function Hero() {
  const { ref: leftRef, isVisible: leftVisible } = useRevealOnScroll({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useRevealOnScroll({ threshold: 0.2 });

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center py-16 md:py-24  md:px-[6rem] lg:px-[14rem] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05), var(--background)), url("/bg.png")',
        backgroundAttachment: 'fixed'
      }}
    >
      
      <div className="max-w-7xl mx-auto w-full ">
        <div className="grid grid-cols-1 md:grid-cols-13 gap-20 md:gap-21 items-center">
          {/* Left side - Profile Image */}
          <div
            ref={leftRef as any}
            className={`md:col-span-5 flex flex-col items-center md:items-start transition-all duration-1000 ${
              leftVisible ? 'reveal-left' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <div className="relative group w-full max-w-[400px]">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-[4/5] bg-card rounded-[2rem] overflow-hidden shadow-1.5xl border-4 border-white/10 glass-card animate-float">
                <img
                  src="/profile.png"
                  alt="Abdulrazak Musa Profile"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6  pl-20 glass p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Professional Summary */}
          <div
            ref={rightRef as any}
            className={`md:col-span-7 flex flex-col justify-center transition-all duration-1000 delay-300 ${
              rightVisible ? 'reveal-right' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 self-center md:self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Available for Hiring</span>
            </div>

            <h2 className="text-4xl md:text-4xl lg:text-5xl font-black text-foreground mb-2 tracking-tight leading-[1] text-center md:text-left drop-shadow-sm">
              Abdulrazak Musa <br />
              <span className="text-primary ">Product & Graphic Designer</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-foreground/80 mb-5 text-center md:text-left tracking-tight">
              Product Manager & Fullstack Developer
            </h3>

            <div className="space-y-6 text-foreground/90 text-lg md:text-xl leading-relaxed text-center md:text-left max-w-2xl">
              <p>
                I am a multi-talented solution provider, bridging the gap between creative excellence and user-centric design. Building the future with strategic precision.
              </p>
              <p className="text-primary/95 font-medium">
                "Technical excellence meets strategic thinking."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--primary),0.3)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 glass px-8 py-4 rounded-2xl font-bold text-foreground hover:bg-secondary/50 transition-all"
              >
                Let's connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
