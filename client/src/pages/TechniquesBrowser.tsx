import { Link } from "wouter";
import { promptEngineeringTechniques } from "@/data/courseData";
import {
  Home,
  Lightbulb,
  Copy,
  Check,
  Search,
  ArrowRight,
  Filter,
  X,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";

export default function TechniquesBrowser() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Filter techniques based on search
  const filteredTechniques = useMemo(() => {
    if (!searchQuery.trim()) return promptEngineeringTechniques;

    const query = searchQuery.toLowerCase();
    return promptEngineeringTechniques.filter(
      (technique) =>
        technique.name.toLowerCase().includes(query) ||
        technique.description.toLowerCase().includes(query) ||
        technique.example.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setShowToast(true);
      setTimeout(() => {
        setCopiedId(null);
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />

      <main id="main-content" className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors font-mono text-sm"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </nav>

        {/* Page Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-accent" aria-hidden="true" />
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
              Prompt Engineering Techniques
            </h1>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl mb-6">
            Explore {promptEngineeringTechniques.length} essential techniques with
            practical examples you can copy and use.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search techniques..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input w-full pl-10 pr-10"
                aria-label="Search techniques"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm font-mono text-text-muted">
              <Filter className="w-4 h-4" aria-hidden="true" />
              <span>
                Showing{" "}
                <span className="text-accent">{filteredTechniques.length}</span>{" "}
                of {promptEngineeringTechniques.length}
              </span>
            </div>
          </div>
        </header>

        {/* Techniques Grid */}
        {filteredTechniques.length > 0 ? (
          <section aria-label="Prompt engineering techniques">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredTechniques.map((technique, index) => (
                <article
                  key={technique.id}
                  className="card card-terminal group"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono text-sm flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block font-mono text-xs px-2 py-0.5 rounded bg-accent/10 text-accent mb-2">
                        technique
                      </span>
                      <h2 className="text-lg font-semibold text-text-primary">
                        {technique.name}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {technique.description}
                  </p>

                  {/* Example */}
                  <div className="terminal relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-text-muted">
                        // Example prompt
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(technique.example, technique.id)
                        }
                        className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-text-muted hover:text-text-primary hover:bg-navy/50 transition-colors"
                        aria-label={
                          copiedId === technique.id
                            ? "Copied!"
                            : "Copy example to clipboard"
                        }
                      >
                        {copiedId === technique.id ? (
                          <>
                            <Check
                              className="w-3.5 h-3.5 text-success"
                              aria-hidden="true"
                            />
                            <span className="text-success">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-pale-blue font-mono whitespace-pre-wrap">
                      {technique.example}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : (
          /* Empty State */
          <div className="card card-terminal p-12 text-center">
            <Search
              className="w-12 h-12 text-text-muted mx-auto mb-4"
              aria-hidden="true"
            />
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              No techniques found
            </h2>
            <p className="text-text-secondary mb-6">
              Try adjusting your search query or{" "}
              <button
                onClick={clearSearch}
                className="text-accent hover:underline"
              >
                clear the filter
              </button>
            </p>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-12" aria-labelledby="cta-title">
          <div className="card border-accent/30 bg-gradient-to-br from-dark-navy to-navy p-8 md:p-12 text-center">
            <h2
              id="cta-title"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Ready to Master These Techniques?
            </h2>
            <p className="text-pale-blue text-lg mb-8 max-w-2xl mx-auto">
              Learn when and how to apply each technique effectively in our
              comprehensive course modules.
            </p>

            <div className="terminal max-w-sm mx-auto mb-8">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-accent">&gt;</span>
                <span className="text-white">start --course "prompt-engineering"</span>
              </div>
            </div>

            <Link href="/modules">
              <button className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3">
                Start Learning
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Toast notification */}
      {showToast && (
        <div
          role="alert"
          aria-live="polite"
          className="fixed bottom-4 right-4 z-tooltip bg-bg-elevated border border-border rounded-lg p-4 shadow-lg animate-fade-up flex items-center gap-3"
        >
          <Check className="w-5 h-5 text-success" aria-hidden="true" />
          <span className="text-text-primary font-medium">
            Copied to clipboard
          </span>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-sm text-text-muted">
            Made with ❤️ by{" "}
            <a
              href="https://tom-panos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              Tom in Milwaukee, WI
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
