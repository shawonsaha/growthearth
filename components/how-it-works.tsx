import { ShoppingCart, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: ShoppingCart,
    title: 'Order Online',
    description: 'Browse our products, select your desired quantity, and place your order with a few clicks'
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'We process and dispatch your order within 24 hours. Delivery arrives in 2-3 days'
  },
  {
    icon: CheckCircle,
    title: 'Get Growing',
    description: 'Receive your product with quality guarantee and start improving your soil immediately'
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent process from order to delivery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <Icon className="text-primary-foreground" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Step {idx + 1}</h3>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-1 bg-border"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
