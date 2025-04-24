"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

export default function Sponsors() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-black">
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        <Image
          src="/images/sponsors/hero-background.jpg"
          alt="Our Sponsors"
          fill
          className="object-cover"
        />
        <div className="relative z-20 flex h-full items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Our Sponsors</h1>
        </div>
      </section>

      {/* Support the Team Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Support the Team</h2>
              <p className="text-lg mb-8">
                Canes Motorsports is just getting started — and we're looking for innovative partners to join us on the
                road ahead. Whether it's through direct sponsorship, software tools, component donations, or engineering
                expertise, your support can make a real impact as we build our first Formula SAE car.
              </p>
              <Button asChild className="bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-white px-8 py-6 text-lg">
                <Link href="/contact">Let's Work Together</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Thank You to Those Who've Made This Possible</h2>
              <p className="text-lg mb-12">
                We're incredibly grateful to the partners who have already stepped in to support our mission. Your
                backing helps turn our designs into reality.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={0.2}>
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center items-center gap-8">
                {/* Mille Miglia */}
                <ScrollAnimation animation="zoom-in" delay={0.1}>
                  <div className="relative w-64 h-32 flex items-center justify-center">
                    <Image
                      src="/images/sponsors/mille-miglia.png"
                      alt="Mille Miglia"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </ScrollAnimation>

                {/* SOLIDWORKS */}
                <ScrollAnimation animation="zoom-in" delay={0.2}>
                  <div className="relative w-64 h-32 flex items-center justify-center">
                    <Image
                      src="/images/sponsors/solidworks.jpg"
                      alt="SOLIDWORKS"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </ScrollAnimation>

                {/* SAE International */}
                <ScrollAnimation animation="zoom-in" delay={0.3}>
                  <div className="relative w-64 h-32 flex items-center justify-center">
                    <Image
                      src="/images/sponsors/sae.png"
                      alt="SAE International"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </ScrollAnimation>

                {/* Miami Grand Prix */}
                <ScrollAnimation animation="zoom-in" delay={0.4}>
                  <div className="relative w-64 h-32 flex items-center justify-center">
                    <Image
                      src="/images/sponsors/miami-grand-prix-2.png"
                      alt="Miami Grand Prix"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Sponsor or Partner With Us</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Support the next generation of engineers and gain visibility for your brand. Our sponsors receive
              recognition at competitions, on our car, and across our digital platforms.
            </p>
            <Button asChild className="bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
