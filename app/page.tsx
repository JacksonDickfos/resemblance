'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const ventures = [
    {
      id: 1,
      title: 'Frank / Finance Tools',
      icon: '💰',
      description: 'Simplifying money management for the next generation.',
      problem: 'Financial tools are too complex',
      solution: 'Intuitive, modern finance apps',
      revenue: 'SaaS subscriptions'
    },
    {
      id: 2,
      title: 'Physio & Rehab App',
      icon: '🏥',
      description: 'Building smarter tools for health professionals.',
      problem: 'Outdated rehab software',
      solution: 'AI-powered patient management',
      revenue: 'B2B licensing'
    },
    {
      id: 3,
      title: 'Rogue Fitness Challenges',
      icon: '💪',
      description: 'Out-of-the-ordinary workouts for ordinary legends.',
      problem: 'Gyms are boring',
      solution: 'Extreme fitness experiences',
      revenue: 'Event tickets & merch'
    },
    {
      id: 4,
      title: 'Fitness Gamification App',
      icon: '🎮',
      description: 'Turning consistency into competition.',
      problem: 'People lack motivation',
      solution: 'Gamified fitness tracking',
      revenue: 'Freemium + premium features'
    },
    {
      id: 5,
      title: 'Hybrid Athlete Events',
      icon: '🏃',
      description: 'From Hyrox to homegrown fitness festivals.',
      problem: 'Limited event options',
      solution: 'Unique hybrid competitions',
      revenue: 'Event sponsorships & tickets'
    },
    {
      id: 6,
      title: 'Health & Wellness Marketplace',
      icon: '🛒',
      description: 'Connecting consumers and professionals.',
      problem: 'Fragmented health market',
      solution: 'Unified marketplace platform',
      revenue: 'Transaction fees'
    },
    {
      id: 7,
      title: 'Travel Concepts',
      icon: '✈️',
      description: 'Re-imagining how exploration meets experience.',
      problem: 'Travel is generic',
      solution: 'Curated adventure experiences',
      revenue: 'Packages & partnerships'
    },
    {
      id: 8,
      title: 'Resemblance Media',
      icon: '🎬',
      description: 'Comedy, music, and brotherhood content that powers it all.',
      problem: 'Content is fragmented',
      solution: 'Unified media brand',
      revenue: 'Sponsorships & ads'
    }
  ]

  return (
    <main className="relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex gap-6">
              <a href="#ventures" className="text-gray-400 hover:text-white transition-colors">Our Ventures</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Invest With Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col items-center justify-center">
            {/* Logo - Centered Above */}
            <div className="flex justify-center animate-fade-in mb-12">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/logo.png"
                  alt="Resemblance Logo"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover rounded-full opacity-90"
                />
              </div>
            </div>
            
            {/* Content - Centered Below Logo */}
            <div className="text-center animate-fade-in-delay">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Resemblance.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8">
                A brand as premium as your closest relationship.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-bold rounded-lg hover:from-gray-300 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Invest With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What We&apos;re Building
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            Ideas in motion. Ventures in progress.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventures.map((venture, index) => (
              <div
                key={venture.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-white"
                onMouseEnter={() => setHoveredCard(venture.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-4xl mb-4">{venture.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{venture.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{venture.description}</p>
                
                {hoveredCard === venture.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-lg p-6 border border-white animate-fade-in">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-white">{venture.title}</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="text-gray-500 mb-1">Problem:</p>
                            <p className="text-gray-300">{venture.problem}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">Solution:</p>
                            <p className="text-gray-300">{venture.solution}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">Revenue:</p>
                            <p className="text-gray-300">{venture.revenue}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Invest With Us
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            Let&apos;s start a conversation
          </p>
          
          <form className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white transition-colors resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-bold rounded-lg hover:from-gray-300 hover:to-white transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-8 text-center space-y-4">
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/resemblance.io_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Resemblance. Built by the Dickfos Brothers.
          </p>
        </div>
      </footer>
    </main>
  )
}
