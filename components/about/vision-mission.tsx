import { Eye, Target, Lightbulb } from "lucide-react"

export function VisionMission() {
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
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance">
            Vision & Mission
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="lg:col-span-2 p-8 lg:p-12 rounded-2xl bg-background border border-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              To be the leading digital agency in Southeast Asia, recognized for our innovative
              approach and commitment to delivering exceptional digital experiences that transform
              businesses and inspire audiences worldwide.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 lg:p-12 rounded-2xl bg-primary text-primary-foreground">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed opacity-90">
              To empower businesses through creative technology solutions, combining strategic
              thinking with cutting-edge design to create meaningful digital experiences.
            </p>
          </div>
        </div>

        {/* Values Preview */}
        <div className="mt-8 p-8 lg:p-12 rounded-2xl bg-background border border-border">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Lightbulb className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">What Drives Us</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty mb-6">
                At Skyborne, we believe that great design is not just about aesthetics—it{"'"}s
                about solving problems, creating connections, and driving results. Every project
                we undertake is guided by our core values of innovation, integrity, and impact.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Innovation", "Integrity", "Impact", "Collaboration", "Excellence"].map(
                  (value) => (
                    <span
                      key={value}
                      className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground"
                    >
                      {value}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
