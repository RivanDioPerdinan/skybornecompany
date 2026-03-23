"use client"

import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Rivan Dio Perdinan",
    role: "Web Developer",
    image: "/team/ahmad.jpg",
    bio: "Visionary in digital innovation.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Farel Anugrah Al Fauzan",
    role: "Web Developer",
    image: "/team/ahmad.jpg",
    bio: "Visionary in digital innovation.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "M Sakha Sandia",
    role: "Web Developer",
    image: "/team/ahmad.jpg",
    bio: "Visionary in digital innovation.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rizky Aqil Hibatullah",
    role: "Web Developer",
    image: "/team/ahmad.jpg",
    bio: "Visionary in digital innovation.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rahadrin M Hikaru Faqath S",
    role: "Web Developer",
    image: "/team/ahmad.jpg",
    bio: "Visionary in digital innovation.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "M Taufiq Rahman Hakim",
    role: "Web Developer",
    image: "/team/ahmad.jpg",
    bio: "Visionary in digital innovation.",
    linkedin: "#",
    twitter: "#",
  }
]

export function TeamSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6 text-balance">
            Meet the Talents Behind Skyborne
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            A diverse team of creative professionals dedicated to bringing your vision to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative h-72 bg-secondary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <Link
                    href={member.linkedin}
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </Link>
                  <Link
                    href={member.twitter}
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
