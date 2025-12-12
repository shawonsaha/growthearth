"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                NE
              </span>
            </div>
            <span className="font-bold text-lg text-foreground">
              Nawab Exporter
            </span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="#products"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Products
            </a>
            <a
              href="#why"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Why Us
            </a>
            <a
              href="#faq"
              className="text-sm text-foreground hover:text-primary transition"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Contact
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a
              href="#products"
              className="text-sm text-foreground hover:text-primary"
            >
              Products
            </a>
            <a
              href="#why"
              className="text-sm text-foreground hover:text-primary"
            >
              Why Us
            </a>
            <a
              href="#faq"
              className="text-sm text-foreground hover:text-primary"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm text-foreground hover:text-primary"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
