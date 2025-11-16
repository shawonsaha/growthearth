'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is the difference between raw and dried cow dung?',
    answer: 'Raw cow dung has higher moisture content and is fresher, making it ideal for composting pits. Dried cow dung is sun-dried for 30 days, making it easier to handle and transport. Both have identical nutrient profiles.'
  },
  {
    question: 'How much fertilizer do I need for my farm?',
    answer: 'This depends on your soil condition and crop type. Generally, 2-3 tons per acre is recommended for field crops, and 5-10 tons per acre for vegetables. We offer free consultation to help determine your needs.'
  },
  {
    question: 'Is your product suitable for organic farming certification?',
    answer: 'Yes, all our products meet Bangladesh organic farming standards. We provide lab reports with every bulk order to support your certification process.'
  },
  {
    question: 'What is the shelf life of your products?',
    answer: 'Raw and dried cow dung can be stored for 6-12 months in dry conditions. Vermicompost lasts 12+ months. Compost remains viable for 24 months when stored properly.'
  },
  {
    question: 'Do you offer bulk discounts?',
    answer: 'Yes! Orders of 500kg or more receive 10-20% discount. For custom quotes and larger volumes, contact our sales team.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Standard delivery within Bangladesh takes 2-3 days. We arrange pickup for bulk orders (1 ton+). Same-day delivery available in Dhaka for orders before 11 AM.'
  }
]

export function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition text-left"
              >
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-primary transition-transform ${
                    expandedId === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedId === idx && (
                <div className="px-6 pb-6 border-t border-border pt-4 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
