import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, oklch(0.75 0.15 200 / 0.03) 25%, transparent 25%),
              linear-gradient(-45deg, oklch(0.75 0.15 200 / 0.03) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, oklch(0.75 0.15 200 / 0.03) 75%),
              linear-gradient(-45deg, transparent 75%, oklch(0.75 0.15 200 / 0.03) 75%)
            `,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Main content */}
        <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
          Ready to Start?
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6 text-balance">
          {"Let's Build Something"}
          <br />
          <span className="text-primary">Extraordinary Together</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
          Have a project in mind? We would love to hear about it. Get in touch and
          {"let's"} create something amazing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 group">
            <Link href="/contact">
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8"
          >
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
