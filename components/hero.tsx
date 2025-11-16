import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
            Pure Organic Growth, Naturally
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Premium quality cow dung, organic compost, and vermicompost for sustainable farming. Lab-tested, eco-friendly, and delivered fast across Bangladesh.
          </p>
          <div className="flex gap-4 pt-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Buy Now</Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">Contact Sales</Button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/organic-farm-with-fresh-green-fields-and-compostin.jpg"
            alt="Organic farming"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
