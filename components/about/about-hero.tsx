export function AboutHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">About Skyborne</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6 text-balance">
            We Are a Team of
            <br />
            <span className="text-primary">Digital Craftsmen</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            Founded with a passion for innovation, Skyborne brings together creative minds
            and technical experts to deliver digital experiences that matter. We believe
            in the power of design and technology to transform businesses.
          </p>
        </div>

        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          {[
            { value: "2025", label: "Founded" },
            { value: "8+", label: "Team Members" },
            { value: "2+", label: "Projects" },
            { value: "2+", label: "Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
