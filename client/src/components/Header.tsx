import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, BookOpen, Lightbulb, ExternalLink } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function NavLink({ href, children, external }: NavLinkProps) {
  const [location] = useLocation();
  const isActive = location === href;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link flex items-center gap-1"
      >
        {children}
        <ExternalLink className="w-3 h-3" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`nav-link ${isActive ? "text-text-primary" : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 h-16 glass border-b border-border z-fixed">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-mono font-semibold text-lg text-text-primary">
              <span className="text-accent">&gt;</span> LearnToPrompt
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            <NavLink href="/modules">
              <BookOpen className="w-4 h-4 inline mr-1.5" aria-hidden="true" />
              Modules
            </NavLink>
            <NavLink href="/techniques">
              <Lightbulb className="w-4 h-4 inline mr-1.5" aria-hidden="true" />
              Techniques
            </NavLink>

            {/* Divider */}
            <span className="w-px h-5 bg-border" aria-hidden="true" />

            <NavLink href="https://tom-panos.com" external>
              Main Site
            </NavLink>
            <NavLink href="https://tom-panos.com/toms-blog" external>
              Blog
            </NavLink>
          </nav>

          {/* Right side: Mobile menu button */}
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Spacer for fixed header */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
