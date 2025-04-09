import HeroSection from "./components/hero"

export default function Home() {
  // You can later fetch this data from Sanity
  const heroData = {
    title: "Welcome to Modern Blog",
    description: "Explore our collection of thoughtful articles, guides, and stories crafted to inspire and inform.",
    heroImage: "/placeholder.svg?height=1080&width=1920", // Replace with your Sanity image URL
    ctaText: "Explore Articles",
    ctaLink: "/blog",
  }

  return (
    <main>
      <HeroSection {...heroData} />

      {/* Rest of your page content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        {/* Article cards would go here */}
      </div>
    </main>
  )
}
