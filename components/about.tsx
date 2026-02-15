'use client';

import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll';

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useRevealOnScroll({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useRevealOnScroll({ threshold: 0.3 });

  return (
    <section id="about" className="relative bg-secondary/10 py-15 lg:py-15 px-6 md:px-[6rem] lg:px-[10rem] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 -z-10 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

          <div
            ref={titleRef as any}
            className={`md:col-span-5 transition-all duration-1000 ${titleVisible ? 'reveal-left' : 'opacity-0 translate-x-[-50px]'
              }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
              <span className="text-xs font-black uppercase tracking-widest">My Story</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight leading-[1]">
              Creativity meets <br />
              <span className="text-primary italic">Strategy.</span>
            </h2>

            <div className="space-y-6 text-foreground/90 text-lg md:text-xl leading-relaxed">
              <p>
                I thrive at the intersection of <span className="text-foreground font-bold">Product Strategy</span> and <span className="text-foreground font-bold">Full-Stack Development</span>.
              </p>
              <p>
                My approach is simple: understand the business goal, design for the human user, and build with technical precision.
              </p>
            </div>
          </div>

          <div
            ref={contentRef as any}
            className={`md:col-span-7 transition-all duration-1000 delay-300 ${contentVisible ? 'reveal-right' : 'opacity-0 translate-x-[50px]'
              }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Product Strategy", desc: "Data-driven roadmapping & stakeholder alignment.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { title: "UI/UX Design", desc: "Crafting beautiful, high-conversion interfaces.", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
                { title: "Full-Stack Dev", desc: "Building scalable & secure web architectures.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
                { title: "Industrial Design", desc: "Bridging the physical and digital worlds.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
              ].map((skill) => (
                <div key={skill.title} className="glass-card p-8 rounded-[2rem] border border-border/50 group hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={skill.icon} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-black text-foreground mb-3 tracking-tight">{skill.title}</h4>
                  <p className="text-foreground/80 leading-relaxed font-medium">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
