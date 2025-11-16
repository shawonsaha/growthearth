export function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/agricultural-specialist-testing-soil-quality.jpg"
              alt="Quality testing"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Why We're Different</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2015, GrowthEarth has been committed to providing Bangladesh's farmers and gardeners with the highest quality organic fertilizers. We understand the soil, we respect the earth, and we deliver results.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">100% Pure & Natural</h3>
                  <p className="text-muted-foreground">No chemicals, no fillers. Just pure organic matter.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Lab-Tested Quality</h3>
                  <p className="text-muted-foreground">Every batch verified for purity and nutrient content.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Fast, Reliable Delivery</h3>
                  <p className="text-muted-foreground">Nationwide delivery within 2-3 days guaranteed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
