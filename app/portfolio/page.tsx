import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { PortfolioCategories } from "@/components/portfolio/portfolio-categories"

export const metadata = {
  title: "Portfolio | Skyborne",
  description: "Explore our latest work - websites, mobile apps, branding, and creative projects.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PortfolioHero />
      <PortfolioCategories />
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
