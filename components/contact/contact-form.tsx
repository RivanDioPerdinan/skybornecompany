"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  "Web Development",
  "Mobile App",
  "Branding",
  "UI/UX Design",
  "Other",
]

const budgets = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+",
]

export function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Send className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          Message Sent!
        </h3>
        <p className="text-muted-foreground max-w-sm">
          Thank you for reaching out. We will get back to you within 24-48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Company Name <span className="text-muted-foreground">(Optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Your Company"
          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Services */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Services You are Interested In
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedServices.includes(service)
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:border-primary/50"
              )}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Budget Range
        </label>
        <div className="flex flex-wrap gap-2">
          {budgets.map((budget) => (
            <button
              key={budget}
              type="button"
              onClick={() => setSelectedBudget(budget)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedBudget === budget
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:border-primary/50"
              )}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, goals, and timeline..."
          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  )
}
