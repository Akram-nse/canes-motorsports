"use client"

import Image from "next/image"
import ScrollAnimation from "@/components/scroll-animation"
import { Mic, Wrench, Users } from "lucide-react"

export default function OurTeam() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-black">
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        <Image
          src="/images/our-team/hero-background.jpeg"
          alt="Canes Motorsports Team"
          fill
          className="object-cover"
        />
        <div className="relative z-20 flex h-full items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Meet Our Team</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Who We Are</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollAnimation animation="slide-in-left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/our-team/who-we-are-1.jpg"
                    alt="Team Member 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/our-team/who-we-are-2.jpg"
                    alt="Team Member 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/our-team/who-we-are-3.jpeg"
                    alt="Team Member 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/our-team/who-we-are-4.jpg"
                    alt="Team Member 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right" delay={0.3}>
              <div className="space-y-4">
                <p className="text-lg">
                  We're a crew of engineers, designers, and makers who do more than just build a race car — we build
                  each other up. Every bolt we turn and every line we CAD is a product of tight collaboration and shared
                  ambition. Our strength isn't just in our tools — it's in our team.
                </p>
                <p className="text-lg">
                  From mechanical engineering to business management, our diverse team brings together a wide range of
                  skills and perspectives. United by our passion for motorsports and innovation, we push each other to
                  excel in everything we do.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">What We Do</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Speaker Events */}
            <ScrollAnimation animation="fade-up" delay={0.1}>
              <div className="relative h-80 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-300 z-10"></div>
                <Image src="/images/our-team/speaker-events.jpg" alt="Speaker Events" fill className="object-cover" />
                <div className="relative z-20 h-full flex flex-col items-center p-6">
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="mb-4 bg-white/10 p-3 rounded-full">
                      <Mic className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Speaker Events</h3>
                  </div>
                  <p className="text-white text-center">
                    We host industry professionals who share insights and experiences from the automotive and
                    motorsports world.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Workshops */}
            <ScrollAnimation animation="fade-up" delay={0.2}>
              <div className="relative h-80 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-300 z-10"></div>
                <Image src="/images/our-team/workshops.jpeg" alt="Workshops" fill className="object-cover" />
                <div className="relative z-20 h-full flex flex-col items-center p-6">
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="mb-4 bg-white/10 p-3 rounded-full">
                      <Wrench className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Workshops</h3>
                  </div>
                  <p className="text-white text-center">
                    Hands-on learning experiences where team members and students develop practical engineering skills.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Outreach */}
            <ScrollAnimation animation="fade-up" delay={0.3}>
              <div className="relative h-80 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-300 z-10"></div>
                <Image src="/images/our-team/outreach.jpg" alt="Outreach" fill className="object-cover" />
                <div className="relative z-20 h-full flex flex-col items-center p-6">
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="mb-4 bg-white/10 p-3 rounded-full">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Outreach</h3>
                  </div>
                  <p className="text-white text-center">
                    Connecting with leaders in the community to inspire the next generation of motorsport enthusiasts and engineers.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
