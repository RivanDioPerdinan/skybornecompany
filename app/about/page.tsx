import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { VisionMission } from "@/components/about/vision-mission"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"

export const metadata = {
  title: "About Us | Skyborne",
  description: "Learn about our team, vision, and mission at Skyborne - a leading technology and creative agency.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <VisionMission />
      <TeamSection />
      <ValuesSection />
      <Footer />
    </main>
  )
}
