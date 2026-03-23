"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "TechFlow Dashboard",
    category: "Web Development",
    description: "A comprehensive analytics dashboard for a fintech startup.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Greenly Mobile App",
    category: "Mobile App",
    description: "Eco-friendly shopping app with carbon footprint tracking.",
    tags: ["React Native", "Node.js", "MongoDB"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "Luxe Brand Identity",
    category: "Branding",
    description: "Complete brand overhaul for a luxury fashion retailer.",
    tags: ["Logo Design", "Brand Guidelines", "Print"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 4,
    title: "HealthHub Platform",
    category: "UI/UX Design",
    description: "Healthcare platform redesign focusing on patient experience.",
    tags: ["Figma", "User Research", "Prototyping"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: 5,
    title: "FoodieGo Delivery",
    category: "Mobile App",
    description: "Food delivery app with real-time tracking and AI recommendations.",
    tags: ["Flutter", "Firebase", "Machine Learning"],
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 6,
    title: "CloudSync SaaS",
    category: "Web Development",
    description: "Enterprise file management and collaboration platform.",
    tags: ["Vue.js", "AWS", "PostgreSQL"],
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: 7,
    title: "Artisan Coffee Branding",
    category: "Branding",
    description: "Brand identity for an artisanal coffee roastery chain.",
    tags: ["Visual Identity", "Packaging", "Merchandise"],
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: 8,
    title: "EduLearn Platform",
    category: "UI/UX Design",
    description: "E-learning platform with gamification and progress tracking.",
    tags: ["UX Research", "Design System", "Accessibility"],
    color: "from-sky-500/20 to-blue-500/20",
  },
]

export function PortfolioGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href="#"
              className="group relative rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Project Preview */}
              <div className={`relative h-64 lg:h-80 bg-gradient-to-br ${project.color}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-background/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-foreground font-medium">
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  )
}
