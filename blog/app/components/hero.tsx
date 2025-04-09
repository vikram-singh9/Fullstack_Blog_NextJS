"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
// import { motion } from "framer-motion"

interface HeroProps {
  title: string
  description: string
  heroImage: string
  ctaText: string
  ctaLink: string
}

export default function HeroSection({
  title = "Welcome to Our Blog",
  description = "Discover insightful articles, guides, and stories crafted to inspire and inform.",
  heroImage = "/placeholder.svg?height=1080&width=1920",
  ctaText = "Read Latest Posts",
  ctaLink = "/blog",
}: Partial<HeroProps>) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt="Blog hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          > */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{title}</h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{description}</p>

            <div className="pt-4">
              <Link
                href={ctaLink}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {ctaText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  )
}
