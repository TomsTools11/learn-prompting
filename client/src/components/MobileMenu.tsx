import { useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { X, ExternalLink, BookOpen, Lightbulb, Home } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

const internalLinks: NavItem[] = [
  { label: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  { label: "Modules", href: "/modules", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Techniques", href: "/techniques", icon: <Lightbulb className="w-5 h-5" /> },
];

const externalLinks: NavItem[] = [
  { label: "Main Site", href: "https://tom-panos.com", icon: <ExternalLink className="w-4 h-4" />, external: true },
  { label: "Software Library", href: "https://tom-panos.com/toms-tools-library", icon: <ExternalLink className="w-4 h-4" />, external: true },
  { label: "My Mission", href: "https://tom-panos.com/human-centered-ai", icon: <ExternalLink className="w-4 h-4" />, external: true },
  { label: "My Blog", href: "https://tom-panos.com/toms-blog", icon: <ExternalLink className="w-4 h-4" />, external: true },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [location] = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus first element when menu opens
      firstFocusableRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Trap focus within menu
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const menu = menuRef.current;
    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-navy/80 backdrop-blur-sm z-modal-backdrop animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu drawer */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-bg-primary border-l border-border z-modal animate-slide-in-right"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-mono text-sm text-text-secondary">
              <span className="text-accent">$</span> navigation
            </span>
            <button
              ref={firstFocusableRef}
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-md text-text-muted hover:text-text-primary hover:bg-bg-secondary transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Internal Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4 mb-2">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                // Course
              </span>
            </div>

            <ul className="space-y-1 px-2">
              {internalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-3 py-3 rounded-md font-mono text-sm transition-colors ${
                      location === item.href
                        ? "bg-accent-muted text-accent"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                    }`}
                    aria-current={location === item.href ? "page" : undefined}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-4 mt-6 mb-2">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                // External
              </span>
            </div>

            <ul className="space-y-1 px-2">
              {externalLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-3 rounded-md font-mono text-sm text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <div className="terminal p-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="terminal-prompt">&gt;</span>
                <span className="terminal-output">ready to learn</span>
                <span className="terminal-success">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
