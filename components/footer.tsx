import Link from "next/link"
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"
import Image from "next/image"
const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/portfolio" },
    { label: "Mobile Apps", href: "/portfolio" },
    { label: "Branding & Design", href: "/portfolio" },
    { label: "UI/UX Design", href: "/portfolio" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Behance", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/skybornelogo.png"
                alt="Skyborne Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-xl font-bold text-foreground tracking-tight">
                Skyborne
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transforming ideas into digital excellence. We craft innovative solutions for brands that dare to stand out.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>skyborne.agency@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+62 815 4718 2876</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Bandung, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Follow Us</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Skyborne. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
