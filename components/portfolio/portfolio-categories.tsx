"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Websites" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "branding", label: "Branding" },
  { id: "design", label: "UI/UX Design" },
]

export function PortfolioCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
