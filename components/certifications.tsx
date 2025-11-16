import { CheckCircle } from 'lucide-react'

const certifications = [
  {
    title: 'Lab Testing Report',
    description: 'Every batch tested for nutrient content, pH, and chemical residue'
  },
  {
    title: 'Organic Certification',
    description: 'Complies with Bangladesh organic farming standards'
  },
  {
    title: 'Quality Control',
    description: 'Rigorous quality checks from production to delivery'
  },
  {
    title: 'Food Safety',
    description: 'Safe for vegetable and fruit production'
  }
]

export function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Quality Guarantees</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven quality and safety standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-md transition">
              <CheckCircle className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
