"use client"

import Image from "next/image"
import { Mail, Phone, Check } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [copied, setCopied] = useState<"email" | "phone" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const mailtoLink = `mailto:canesmotorsports@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`
    )}`

    // Open default email client
    window.location.href = mailtoLink

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)
  }

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(null)
    }, 2000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-black">
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        <Image
          src="/images/contact/hero-background.png"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="relative z-20 flex h-full items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Contact Us</h1>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg">
                Have questions about Canes Motorsports? Want to learn more about sponsorship opportunities?
                We'd love to hear from you. Reach out using the contact information below or fill out the form.
              </p>
            </div>
          </ScrollAnimation>

          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <ScrollAnimation animation="fade-up" delay={0.1}>
              <div 
                className="bg-[#1A1A1A] p-6 rounded-lg text-center w-full md:w-64 h-full transition-all duration-300 hover:bg-[#252525] hover:shadow-xl hover:shadow-[#FF5F00]/20 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
                onClick={() => copyToClipboard("canesmotorsports@gmail.com", "email")}
              >
                <div className="bg-[#FF5F00]/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-[#FF5F00]/30">
                  <Mail className="h-6 w-6 text-[#FF5F00] transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold mb-1">Email</h3>
                <div className="text-gray-300 hover:text-white transition-colors text-sm flex items-center justify-center">
                  {copied === "email" ? (
                    <span className="flex items-center text-[#FF5F00]">
                      <Check className="h-4 w-4 mr-1" /> Copied!
                    </span>
                  ) : (
                    "canesmotorsports@gmail.com"
                  )}
                </div>
              </div>
            </ScrollAnimation>

            {/* Phone */}
            <ScrollAnimation animation="fade-up" delay={0.2}>
              <div 
                className="bg-[#1A1A1A] p-6 rounded-lg text-center w-full md:w-64 h-full flex flex-col transition-all duration-300 hover:bg-[#252525] hover:shadow-xl hover:shadow-[#FF5F00]/20 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
                onClick={() => copyToClipboard("(786) 502-7949", "phone")}
              >
                <div className="bg-[#FF5F00]/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-[#FF5F00]/30">
                  <Phone className="h-6 w-6 text-[#FF5F00] transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold mb-1">Phone</h3>
                <div className="text-gray-300 hover:text-white transition-colors text-sm flex items-center justify-center">
                  {copied === "phone" ? (
                    <span className="flex items-center text-[#FF5F00]">
                      <Check className="h-4 w-4 mr-1" /> Copied!
                    </span>
                  ) : (
                    "(786) 502-7949"
                  )}
                </div>
                <div className="flex-grow"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5F00]"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5F00]"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5F00]"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5F00]"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-white px-8 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {submitSuccess && (
                    <p className="mt-4 text-green-400">
                      Your message has been sent! Check your email client.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
