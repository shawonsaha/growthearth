import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Nawab Exporter Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-lg">Nawab Exporter</span>
            </div>
            <p className="text-background/70 text-sm">
              A reliable company in exporting all types of legal products in
              Bangladesh.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a
                  href="#products"
                  className="hover:text-background transition"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-background transition">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-background transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a
                  href="#products"
                  className="hover:text-background transition"
                >
                  Cow Dung
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-background transition"
                >
                  Compost
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-background transition"
                >
                  Vermicompost
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-background transition"
                >
                  Bio Fertilizer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>01339-871370</span>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>nawabexporter@gmail.com</span>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Nawabganj, Dhaka-1320</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>
            &copy; {currentYear} Nawab Exporter. All rights reserved. Exporting
            quality products across Bangladesh.
          </p>
        </div>
      </div>
    </footer>
  );
}
