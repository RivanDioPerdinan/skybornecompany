import { Zap, Shield, Users, Sparkles } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Integrity Always",
    description:
      "Transparency and honesty guide everything we do, building trust with every interaction.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, both within our team and with our clients.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "We never settle for good enough. Every detail matters in creating exceptional work.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Core Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6 text-balance">
            The Principles That Guide Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            These values form the foundation of our work and define who we are as a team.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group flex gap-6 p-8 rounded-2xl bg-background border border-border transition-all duration-500 hover:border-primary/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
