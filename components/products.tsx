'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Cow Dung (Raw)',
    description: 'Fresh, untreated cow manure rich in nutrients',
    benefits: ['High nitrogen content', 'Improves soil structure', 'Sustainable source'],
    production: 'Collected fresh from certified dairy farms, processed within 24 hours',
    packaging: 'Available in 20kg, 50kg, and 100kg bags',
    priceRange: '৳2,000 - ৳8,000 (20kg - 100kg)',
    image: '/fresh-cow-manure-composting-material.jpg'
  },
  {
    id: 2,
    name: 'Cow Dung (Dried/Processed)',
    description: 'Sun-dried and processed for easier handling',
    benefits: ['Reduced moisture', 'Easy to spread', 'Long shelf life'],
    production: 'Sun-dried for 30 days, sifted for quality, and packed fresh',
    packaging: 'Available in 15kg, 40kg, and 80kg bags',
    priceRange: '৳2,500 - ৳9,000 (15kg - 80kg)',
    image: '/dried-processed-cow-manure-ready-for-use.jpg'
  },
  {
    id: 3,
    name: 'Organic Compost',
    description: 'Fully decomposed, nutrient-rich compost for all plants',
    benefits: ['Complete decomposition', 'Rich in micronutrients', 'Dark, crumbly texture'],
    production: 'Mixed organic waste composted for 90 days with proper aeration',
    packaging: 'Available in 25kg, 50kg, and 100kg bags',
    priceRange: '৳3,000 - ৳12,000 (25kg - 100kg)',
    image: '/rich-dark-organic-compost-mature-finished.jpg'
  },
  {
    id: 4,
    name: 'Vermicompost',
    description: 'Premium worm-processed compost with enhanced nutrients',
    benefits: ['Highest nutrient density', 'Beneficial microbes', 'Plant growth hormone rich'],
    production: 'Processed through earthworms for 60 days, creating bioactive compost',
    packaging: 'Available in 10kg, 20kg, and 40kg bags',
    priceRange: '৳4,000 - ৳10,000 (10kg - 40kg)',
    image: '/vermicompost-earthworm-processed-premium.jpg'
  },
  {
    id: 5,
    name: 'Bio Fertilizer (Mycorrhizal)',
    description: 'Living beneficial fungi for enhanced nutrient absorption',
    benefits: ['Nutrient uptake boost', 'Disease resistance', 'Drought tolerance'],
    production: 'Cultured mycorrhizal fungi mixed with organic carrier',
    packaging: 'Available in 5kg and 10kg bags',
    priceRange: '৳3,500 - ৳6,500 (5kg - 10kg)',
    image: '/bio-fertilizer-mycorrhizal-fungi-preparation.jpg'
  }
]

export function Products() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From raw cow dung to premium vermicompost, we offer solutions for every farming need
          </p>
        </div>

        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                className="w-full p-6 flex items-start justify-between gap-4 hover:bg-muted/50 transition text-left"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-primary transition-transform ${
                    expandedId === product.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === product.id && (
                <div className="px-6 pb-6 border-t border-border pt-6 grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Benefits</h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex gap-2 text-muted-foreground">
                            <span className="text-primary">•</span> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Production Process</h4>
                      <p className="text-muted-foreground">{product.production}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Packaging & Pricing</h4>
                      <p className="text-muted-foreground mb-2">{product.packaging}</p>
                      <p className="font-semibold text-primary">{product.priceRange}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">Bulk Discounts Available</h3>
          <p className="text-muted-foreground">
            Order 500kg or more and receive 10-20% discount. Contact our sales team for custom quotes.
          </p>
        </div>
      </div>
    </section>
  )
}
