"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import { useEffect, useState } from "react"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        <div 
          className="absolute inset-0 transition-transform duration-300"
          style={{
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
        >
          <Image
            src="/images/hero-background.png"
            alt="Canes Motorsports Racing Car"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 flex h-full items-center justify-center flex-col text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Built by Students.
            <br />
            Driven to Win.
          </h1>
        </div>
      </section>

      {/* What is Formula SAE Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">What is Formula SAE?</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollAnimation animation="slide-in-left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg">
                  Formula SAE is a collegiate design competition where students design, build, and race small-scale
                  formula-style racing cars. Teams from universities around the world compete in static and dynamic
                  events that test the performance, cost, and design of their vehicles.
                </p>
                <p className="text-lg">
                  The competition challenges students to apply classroom knowledge to real-world engineering problems,
                  fostering innovation, teamwork, and project management skills that are highly valued in the automotive
                  and engineering industries.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right" delay={0.3}>
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/images/video-thumbnail.png"
                >
                  <source src="/videos/formula-sae.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Canes Motorsports Section */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Canes Motorsports</h2>
            <div className="max-w-3xl mx-auto space-y-6 mb-10">
              <p className="text-lg">
                At Canes Motorsports, our mission is to build a performance-focused, cost-effective race car that pushes
                the boundaries of student engineering. We're dedicated to creating innovative solutions that balance
                speed, efficiency, and reliability.
              </p>
              <p className="text-lg">
                Our team thrives on collaboration, bringing together diverse skills and perspectives to tackle complex
                challenges. Through smart engineering and relentless dedication, we're not just building a race
                car—we're building the next generation of automotive engineers.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-white">
                <Link href="/contact">Work with us</Link>
              </Button>
              <Button asChild className="bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-white">
                <Link href="/our-team">Meet the team</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
