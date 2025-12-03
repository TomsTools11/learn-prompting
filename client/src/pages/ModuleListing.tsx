import { Link } from "wouter";
import { useEffect } from "react";
import { courseModules } from "@/data/courseData";
import { Home, ChevronRight, BookOpen, Folder } from "lucide-react";
import Header from "@/components/Header";
import ModuleCard from "@/components/ModuleCard";

export default function ModuleListing() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const totalLessons = courseModules.reduce(
    (sum, module) => sum + module.lessons.length,
    0
  );

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
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Folder className="w-8 h-8 text-accent" aria-hidden="true" />
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
              Course Modules
            </h1>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl">
            Progress through {courseModules.length} comprehensive modules covering{" "}
            {totalLessons} lessons, from fundamentals to advanced techniques.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-4 mt-6 font-mono text-sm">
            <div className="flex items-center gap-2 text-text-muted">
              <span className="text-accent">{courseModules.length}</span> modules
            </div>
            <span className="text-border">|</span>
            <div className="flex items-center gap-2 text-text-muted">
              <span className="text-accent">{totalLessons}</span> lessons
            </div>
            <span className="text-border">|</span>
            <div className="flex items-center gap-2 text-text-muted">
              <span className="text-success">0%</span> complete
            </div>
          </div>
        </header>

        {/* Modules Grid */}
        <section aria-label="Course modules">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {courseModules.map((module) => (
              <ModuleCard
                key={module.id}
                id={module.id}
                title={module.title}
                lessonCount={module.lessons.length}
                description={module.description}
              />
            ))}
          </div>
        </section>

        {/* Detailed Module List */}
        <section aria-labelledby="detailed-modules">
          <h2
            id="detailed-modules"
            className="text-2xl font-bold text-text-primary mb-6"
          >
            <span className="text-accent font-mono">$</span> Module Details
          </h2>

          <div className="space-y-6">
            {courseModules.map((module, index) => (
              <article
                key={module.id}
                className="card card-terminal overflow-hidden"
              >
                {/* Module header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-mono font-bold flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-1">
                        {module.title}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  <Link href={`/modules/${module.id}`}>
                    <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                      Start Module
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </Link>
                </div>

                {/* Lessons list */}
                <div>
                  <h4 className="font-mono text-sm text-text-muted mb-3">
                    // Lessons in this module
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <Link
                        key={lesson.id}
                        href={`/modules/${module.id}/lessons/${lesson.id}`}
                      >
                        <div className="flex items-center gap-3 p-3 rounded-md bg-dark-navy/50 hover:bg-navy/50 border border-transparent hover:border-accent/30 transition-all cursor-pointer group">
                          <span className="font-mono text-xs text-text-muted w-6 flex-shrink-0">
                            {String(lessonIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate flex-1">
                            {lesson.title}
                          </span>
                          <ChevronRight
                            className="w-4 h-4 text-text-muted group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all"
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
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
