import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { StatsSection } from "@/components/sections/stats"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
