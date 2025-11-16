import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Karim Ahmed',
    role: 'Rice Farmer, Dhaka',
    image: '/portrait-farmer-smile.jpg',
    text: 'GrowthEarth\'s vermicompost increased my crop yield by 35% within the first season. The quality is consistently excellent.'
  },
  {
    name: 'Fatima Khan',
    role: 'Nursery Owner, Chittagong',
    image: '/portrait-woman-gardener-smile.jpg',
    text: 'Best organic compost I\'ve used. My plants are healthier and greener. The customer service is fantastic too!'
  },
  {
    name: 'Rashed Hossain',
    role: 'Vegetable Grower, Sylhet',
    image: '/portrait-man-farmer-smile.jpg',
    text: 'Reliable delivery, authentic products, and competitive pricing. They understand farmers\' needs. Highly recommended!'
  }
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by farmers, gardeners, and nurseries across Bangladesh
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
