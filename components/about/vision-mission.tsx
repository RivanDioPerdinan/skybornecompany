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
            Tujuan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance">
            Visi & Misi
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="lg:col-span-2 p-8 lg:p-12 rounded-2xl bg-background border border-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Misi Kami</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              • Mengembangkan produk berbasis digital berkualitas di ruang lingkup teknologi dan desain. 
              • Memberikan layanan jasa berupa desain kreatif, dokumentasi acara, dan pembuatan laporan 
              profesional. 
              • Menyediakan layanan pelanggan yang responsif dan transparan. 
              • Meningkatkan keahlian tim secara berkelanjutan melalui pelatihan dan pengembangan diri. 
              • Membangun tim kerja yang solid dan kolaboratif dengan pembagian hasil yang adil dan 
              transparan. 
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 lg:p-12 rounded-2xl bg-primary text-primary-foreground">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Visi Kami</h3>
            <p className="text-lg leading-relaxed opacity-90">
              Menjadi penyedia solusi digital terkemuka dengan layanan yang kreatif, inovatif, dan profesional 
              untuk memenuhi kebutuhan klien di berbagai bidang kreatif dan teknologi. 
            </p>
          </div>
        </div>

        {/* Values Preview */}
        {/* <div className="mt-8 p-8 lg:p-12 rounded-2xl bg-background border border-border">
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
        </div> */}
      </div>
    </section>
  )
}
