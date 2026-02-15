'use client';

import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll';

export default function Skills() {
  const { ref: titleRef, isVisible: titleVisible } = useRevealOnScroll({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useRevealOnScroll({ threshold: 0.2 });
  const { ref: profiRef, isVisible: profiVisible } = useRevealOnScroll({ threshold: 0.2 });

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel", "Firebase", "GitHub"]
    },
    {
      category: "Product & Design",
      skills: ["Figma", "User Research", "Product Strategy", "Wireframing", "Prototyping", "A/B Testing"]
    }
  ];

  return (
    <section id="skills" className="bg-secondary/10 py-10 md:py-10 px-6 md:px-[60px]">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef as any}
          className={`text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance transition-all duration-700 ${titleVisible ? 'reveal-up' : 'opacity-0'
            }`}
        >
          Skills & Technologies
        </h2>

        <div
          ref={gridRef as any}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${gridVisible ? 'reveal-up' : 'opacity-0 translate-y-10'
            }`}
        >
          {skillCategories.map((cat) => (
            <div key={cat.category} className="glass-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg group">
              <h3 className="text-lg font-black text-foreground mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                <span className="w-1 h-5 bg-primary rounded-full" />
                {cat.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary/40 text-foreground/90 px-3 py-1.5 rounded-lg text-[10px] font-bold border border-border/40 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Level */}
        <div
          ref={profiRef as any}
          className={`mt-12 glass-card rounded-3xl p-8 md:p-12 border border-border/50 transition-all duration-1000 delay-500 ${profiVisible ? 'reveal-up' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="mb-12 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">Mastery Overview</h3>
            <p className="text-foreground/85 text-lg">A deep dive into my core technical competencies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { label: "Full-Stack Development", level: 95 },
              { label: "Product Management", level: 90 },
              { label: "UI/UX Design", level: 85 },
              { label: "Cloud Architecture", level: 80 }
            ].map((item) => (
              <div key={item.label} className="group">
                <div className="flex justify-between mb-4">
                  <span className="text-foreground font-black tracking-tight text-base">{item.label}</span>
                  <span className="text-primary font-black text-base">{item.level}%</span>
                </div>
                <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden border border-border/30">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out group-hover:brightness-110"
                    style={{ width: profiVisible ? `${item.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
