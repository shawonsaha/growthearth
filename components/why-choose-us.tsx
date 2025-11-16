import { Leaf, Zap, TrendingUp, Shield } from 'lucide-react'

const reasons = [
  {
    icon: Leaf,
    title: 'Quality Assurance',
    description: 'Every batch lab-tested for nutrient content, pH balance, and purity standards'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Nationwide delivery within 2-3 days with reliable courier partners'
  },
  {
    icon: TrendingUp,
    title: 'Wholesale Pricing',
    description: 'Competitive bulk rates for farmers, nurseries, and agricultural suppliers'
  },
  {
    icon: Shield,
    title: 'Eco-Friendly',
    description: 'Sustainable production methods that support environmental conservation'
  }
]

export function WhyChooseUs() {
  return (
    <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose GrowthEarth</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to supporting sustainable agriculture with reliable, high-quality products
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div key={idx} className="group">
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
