'use client';

import { useState } from 'react';
import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Real connect Platform",
    description: "Built a scalable real estate solution with real-time property search, property management and Investment, AI analytic integration. Handled 10k+ daily transactions with zero downtime.",
    image: "projects/realcon.png",
    tags: ["Next js", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Interactive Dashboard",
    description: "Designed and developed a comprehensive Interactive dashboard providing real-time insights. Features include custom reports, data visualization, and role-based access control.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    tags: ["Next js", "TypeScript", "PostgreSQL", "D3.js"],
    link: "#"
  },
  {
    id: 3,
    title: "Mobile - PayRide (App)",
    description: "Full-stack mobile application with backend API for ride booking, navigation, and payment processing. Implemented real-time notifications and data synchronization.",
    image: "projects/payride.png",
    tags: ["React Native", "Mapbox", "Node.js", "AWS"],
    link: "#"
  },
  {
    id: 4,
    title: "SaaS Platform",
    description: "Enterprise SaaS platform with multi-tenancy, advanced security features, and comprehensive admin dashboard. Supports 500+ concurrent users.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    tags: ["Next.js", "PostgreSQL", "AWS", "Kubernetes"],
    link: "#"
  }
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useRevealOnScroll({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useRevealOnScroll({ threshold: 0.2 });

  return (
    <section id="projects" className="bg-gray-300/50  py-10 md:py-10 px-6 md:px-[40px]">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef as any}
          className={`text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance transition-all duration-700 ${titleVisible ? 'reveal-up' : 'opacity-0'
            }`}
        >
          Featured Projects
        </h2>

        <div className="max-w-5xl mx-auto">
          <div
            ref={gridRef as any}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${gridVisible ? 'reveal-up' : 'opacity-0 translate-y-10'
              }`}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-[2rem] overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 cursor-pointer glass-card w-[90%] md:w-[80%] mx-auto"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div className="relative h-50 md:h-60 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${hoveredId === project.id ? 'scale-110' : 'scale-100'
                      }`}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Tags on Image */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[1rem] uppercase tracking-widest bg-black/30 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-foreground/85 mb-8 leading-relaxed text-lg line-clamp-3">
                    {project.description}
                  </p>

                  {/* Footer Tags & Link */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-border/50">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold text-foreground/70"
                      >
                        #{tag.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link Overlay */}
                <a href={project.link} className="absolute inset-0 z-10">
                  <span className="sr-only font-bold">View {project.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
