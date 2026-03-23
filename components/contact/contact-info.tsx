import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@skyborne.id",
    href: "mailto:hello@skyborne.id",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+62 812 3456 7890",
    href: "tel:+6281234567890",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Jl. Sudirman No. 123, Jakarta 12190",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: null,
  },
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Behance", href: "#" },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="p-8 rounded-2xl bg-background border border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">
          Contact Information
        </h3>
        <div className="space-y-6">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <detail.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {detail.label}
                </p>
                {detail.href ? (
                  <Link
                    href={detail.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {detail.value}
                  </Link>
                ) : (
                  <p className="text-foreground">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="p-8 rounded-2xl bg-background border border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">
          Follow Us
        </h3>
        <div className="space-y-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center justify-between py-3 border-b border-border last:border-b-0 group"
            >
              <span className="text-foreground group-hover:text-primary transition-colors">
                {link.label}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Response */}
      <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
        <h3 className="text-xl font-semibold mb-4">Quick Response Guarantee</h3>
        <p className="leading-relaxed opacity-90">
          We aim to respond to all inquiries within 24-48 hours during business
          days. For urgent matters, please reach out via phone.
        </p>
      </div>
    </div>
  )
}
