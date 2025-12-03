import { Link } from "wouter";
import { Home, ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import TerminalBlock from "@/components/TerminalBlock";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />

      <main
        id="main-content"
        className="container mx-auto px-4 py-16 flex items-center justify-center"
      >
        <div className="max-w-lg w-full text-center">
          {/* Error code */}
          <div className="mb-8">
            <div className="font-mono text-8xl md:text-9xl font-bold text-accent/20 select-none">
              404
            </div>
          </div>

          {/* Terminal error message */}
          <TerminalBlock
            className="mb-8 text-left"
            lines={[
              { type: "prompt", content: "navigate --to page" },
              { type: "empty", content: "" },
              { type: "error", content: "Error: Page not found" },
              { type: "output", content: "The requested resource does not exist." },
              { type: "empty", content: "" },
              { type: "comment", content: "Try navigating to a valid page" },
            ]}
          />

          {/* Heading and description */}
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                <Home className="w-4 h-4" aria-hidden="true" />
                Go Home
              </button>
            </Link>
            <Link href="/modules">
              <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                <Search className="w-4 h-4" aria-hidden="true" />
                Browse Modules
              </button>
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Go back
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-sm text-text-muted">
            <span className="text-accent">&gt;</span> Built with care by{" "}
            <a
              href="https://tom-panos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              Tom Panos
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
