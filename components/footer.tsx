import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">GE</span>
              </div>
              <span className="font-bold text-lg">GrowthEarth</span>
            </div>
            <p className="text-background/70 text-sm">
              Pure organic fertilizer for sustainable agriculture across Bangladesh.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#products" className="hover:text-background transition">Products</a></li>
              <li><a href="#why" className="hover:text-background transition">Why Us</a></li>
              <li><a href="#faq" className="hover:text-background transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-background transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#products" className="hover:text-background transition">Cow Dung</a></li>
              <li><a href="#products" className="hover:text-background transition">Compost</a></li>
              <li><a href="#products" className="hover:text-background transition">Vermicompost</a></li>
              <li><a href="#products" className="hover:text-background transition">Bio Fertilizer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>info@growthearth.com</span>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Mirpur, Dhaka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {currentYear} GrowthEarth. All rights reserved. Cultivating sustainable agriculture.</p>
        </div>
      </div>
    </footer>
  )
}
