'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [financeVotes, setFinanceVotes] = useState(160)
  const [apparelVotes, setApparelVotes] = useState(270)
  const [fitnessVotes, setFitnessVotes] = useState(115)
  const [hasVotedFinance, setHasVotedFinance] = useState(false)
  const [hasVotedApparel, setHasVotedApparel] = useState(false)
  const [hasVotedFitness, setHasVotedFitness] = useState(false)

  useEffect(() => {
    // Check localStorage for vote status
    if (typeof window !== 'undefined') {
      setHasVotedFinance(localStorage.getItem('votedFinance') === 'true')
      setHasVotedApparel(localStorage.getItem('votedApparel') === 'true')
      setHasVotedFitness(localStorage.getItem('votedFitness') === 'true')
    }
  }, [])

  const handleVote = (type: 'finance' | 'apparel' | 'fitness') => {
    if (typeof window === 'undefined') return

    if (type === 'finance' && !hasVotedFinance) {
      setFinanceVotes(prev => prev + 1)
      setHasVotedFinance(true)
      localStorage.setItem('votedFinance', 'true')
    } else if (type === 'apparel' && !hasVotedApparel) {
      setApparelVotes(prev => prev + 1)
      setHasVotedApparel(true)
      localStorage.setItem('votedApparel', 'true')
    } else if (type === 'fitness' && !hasVotedFitness) {
      setFitnessVotes(prev => prev + 1)
      setHasVotedFitness(true)
      localStorage.setItem('votedFitness', 'true')
    }
  }

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
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#finance" className="text-gray-400 hover:text-white transition-colors">Finance</a>
              <a href="#apparel" className="text-gray-400 hover:text-white transition-colors">Apparel</a>
              <a href="#fitness" className="text-gray-400 hover:text-white transition-colors">Fitness</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Invest With Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Metallic Background */}
        <div className="hero-metallic-bg"></div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
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
                A brand as premium as your closest connections.
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
        <div className="container mx-auto max-w-7xl">
          
          {/* Resemblance Finance - Picture Left, Text Right */}
          <div id="finance" className="mb-32 scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">💰</div>
                    <div className="text-gray-400 text-sm">Finance App Interface</div>
                  </div>
                </div>
            </div>
            
              {/* Content Right */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Resemblance Finance
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Simplifying money management for the next generation. Financial tools have become overly complex, leaving young professionals and entrepreneurs struggling to understand their own finances. Resemblance Finance breaks down barriers with intuitive, modern finance apps that make budgeting, investing, and wealth building accessible to everyone.
                </p>
                <p className="text-gray-400 mb-8">
                  Our platform combines AI-powered insights with a clean, user-friendly interface, transforming how people interact with their money. From automated expense tracking to personalized investment recommendations, we&apos;re building the financial companion you actually want to use.
                </p>
                
                {/* Upvote Button */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleVote('finance')}
                    disabled={hasVotedFinance}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      hasVotedFinance
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white transform hover:scale-105'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a1 1 0 001.6.8l5.333-4a1 1 0 00.4-.8v-5.834a1 1 0 00-1.6-.8l-5.333 4a1 1 0 00-.4.8zM12 2a1 1 0 011 1v8a1 1 0 11-2 0V3a1 1 0 011-1z" />
                    </svg>
                    <span>{financeVotes}</span>
                  </button>
                  {hasVotedFinance && (
                    <span className="text-gray-500 text-sm">You&apos;ve voted!</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Resemblance Apparel - Text Left, Picture Right */}
          <div id="apparel" className="mb-32 scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content Left */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Resemblance Apparel
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Premium clothing that embodies the Resemblance ethos. We&apos;re creating a line of high-quality apparel that reflects our commitment to excellence, craftsmanship, and authentic connection. Each piece is designed with intention, built to last, and made for those who value both style and substance.
                </p>
                <p className="text-gray-400 mb-8">
                  From minimalist basics to statement pieces, Resemblance Apparel bridges the gap between luxury and accessibility. Our signature &quot;R&quot; logo represents more than a brand—it&apos;s a symbol of the connections we build and the ventures we create together.
                </p>
                
                {/* Upvote Button */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleVote('apparel')}
                    disabled={hasVotedApparel}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      hasVotedApparel
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white transform hover:scale-105'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a1 1 0 001.6.8l5.333-4a1 1 0 00.4-.8v-5.834a1 1 0 00-1.6-.8l-5.333 4a1 1 0 00-.4.8zM12 2a1 1 0 011 1v8a1 1 0 11-2 0V3a1 1 0 011-1z" />
                    </svg>
                    <span>{apparelVotes}</span>
                  </button>
                  {hasVotedApparel && (
                    <span className="text-gray-500 text-sm">You&apos;ve voted!</span>
                  )}
                          </div>
                          </div>
              
              {/* Image Right */}
              <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4 font-bold text-white bg-gray-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto">R</div>
                    <div className="text-gray-400 text-sm mt-4">Premium T-Shirt</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

          {/* Resemblance Fitness - Picture Left, Text Right */}
          <div id="fitness" className="mb-32 scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-96 bg-gray-700 rounded-3xl mx-auto flex flex-col items-center justify-center border-4 border-gray-600">
                      <div className="text-4xl mb-2">💪</div>
                      <div className="text-white text-sm font-semibold">Resemblance</div>
                      <div className="text-gray-400 text-xs mt-1">Fitness</div>
              </div>
                    <div className="text-gray-400 text-sm mt-4">iPhone App Interface</div>
            </div>
          </div>
        </div>
              
              {/* Content Right */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Resemblance Fitness
          </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  A comprehensive fitness platform that turns consistency into competition. We&apos;re building an iPhone app that gamifies fitness tracking, making workouts engaging, social, and rewarding. No more abandoned gym memberships or forgotten fitness goals.
                </p>
                <p className="text-gray-400 mb-8">
                  Resemblance Fitness combines cutting-edge technology with proven training methodologies. Track your progress, compete with friends, unlock achievements, and join challenges that push you to be your best. It&apos;s fitness reimagined for the modern athlete—whether you&apos;re a beginner or a seasoned pro.
                </p>
                
                {/* Upvote Button */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleVote('fitness')}
                    disabled={hasVotedFitness}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      hasVotedFitness
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white transform hover:scale-105'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a1 1 0 001.6.8l5.333-4a1 1 0 00.4-.8v-5.834a1 1 0 00-1.6-.8l-5.333 4a1 1 0 00-.4.8zM12 2a1 1 0 011 1v8a1 1 0 11-2 0V3a1 1 0 011-1z" />
                    </svg>
                    <span>{fitnessVotes}</span>
                  </button>
                  {hasVotedFitness && (
                    <span className="text-gray-500 text-sm">You&apos;ve voted!</span>
                  )}
            </div>
            </div>
            </div>
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
            Get in on our next venture.
          </p>
          
          <form className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 space-y-6">
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
              Submit
            </button>
          </form>
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
