"use client"

import { Code2, Smartphone, Palette, Layers, Sparkles, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies for optimal performance and scalability.",
    features: ["Next.js & React", "E-commerce", "CMS Integration", "API Development"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description:
      "Comprehensive brand identities that capture your essence and resonate with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "User-centered designs that combine aesthetics with functionality to create memorable experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Sparkles,
    title: "Creative Design",
    description:
      "Eye-catching visuals and creative assets that communicate your message with impact.",
    features: ["Illustrations", "Motion Graphics", "Social Media", "Print Design"],
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description:
      "Data-driven strategies that help you reach your audience and achieve your business goals.",
    features: ["SEO", "Analytics", "Marketing", "Consulting"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-card relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.75 0.15 200 / 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6 text-balance">
            Comprehensive Digital Solutions for Modern Brands
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            From concept to launch, we provide end-to-end services that transform
            your vision into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative p-8 rounded-2xl bg-background border border-border transition-all duration-500",
                "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
                "hover:-translate-y-1"
              )}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
