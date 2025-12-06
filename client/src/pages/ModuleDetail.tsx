import { useRoute, Link } from "wouter";
import { useEffect } from "react";
import { courseModules } from "@/data/courseData";
import {
  Home,
  ChevronRight,
  ArrowLeft,
  BookOpen,
  Folder,
  Play,
  Code,
} from "lucide-react";
import Header from "@/components/Header";
import TerminalBlock from "@/components/TerminalBlock";

export default function ModuleDetail() {
  const [, params] = useRoute("/modules/:moduleId");

  const module = courseModules.find((m) => m.id === params?.moduleId);

  // Scroll to top whenever the module changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [params?.moduleId]);

  if (!module) {
    return (
      <div className="min-h-screen bg-bg-primary">
        <Header />
        <main
          id="main-content"
          className="container mx-auto px-4 py-8 flex items-center justify-center"
        >
          <div className="card card-terminal max-w-md text-center p-8">
            <div className="text-error font-mono text-4xl mb-4">404</div>
            <h1 className="text-xl font-bold text-text-primary mb-2">
              Module Not Found
            </h1>
            <p className="text-text-secondary mb-6">
              The module you're looking for doesn't exist.
            </p>
            <Link href="/modules">
              <button className="btn-primary inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to All Modules
              </button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const moduleIndex = courseModules.findIndex((m) => m.id === module.id);
  const progress = 0; // TODO: Implement actual progress tracking

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />

      <main id="main-content" className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm font-mono">
            <li>
              <Link
                href="/"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <Home className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            <li className="text-text-muted">/</li>
            <li>
              <Link
                href="/modules"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                modules
              </Link>
            </li>
            <li className="text-text-muted">/</li>
            <li className="text-accent" aria-current="page">
              {module.id}
            </li>
          </ol>
        </nav>

        {/* Module Header */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Module number badge */}
            <div className="w-16 h-16 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-mono text-2xl font-bold flex-shrink-0">
              {String(moduleIndex + 1).padStart(2, "0")}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Folder className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="font-mono text-sm text-text-muted">
                  {module.id}/
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {module.title}
              </h1>
              <p className="text-text-secondary text-lg mb-4">
                {module.description}
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-text-muted">
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  <span className="text-accent">{module.lessons.length}</span>{" "}
                  lessons
                </div>
                <span className="text-border">|</span>
                <div className="flex items-center gap-2 text-text-muted">
                  <span className="text-success">{progress}%</span> complete
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Progress Section */}
        <section className="mb-12" aria-labelledby="progress-title">
          <div className="card card-terminal p-6">
            <h2
              id="progress-title"
              className="font-mono text-sm text-text-muted mb-4"
            >
              <span className="text-accent">&gt;</span> progress --module{" "}
              {module.id}
            </h2>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Progress bar */}
              <div className="flex-1">
                <div className="h-2 bg-navy rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-500"
                    style={{ width: `${progress}%` }}
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${progress}% complete`}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 font-mono text-sm">
                <span className="text-text-muted">
                  <span className="text-success">0</span>/{module.lessons.length}{" "}
                  lessons
                </span>
                <span className="text-text-muted">
                  status:{" "}
                  <span className="text-warning">pending</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons List */}
        <section aria-labelledby="lessons-title">
          <h2
            id="lessons-title"
            className="text-2xl font-bold text-text-primary mb-6"
          >
            <span className="text-accent font-mono">$</span> Lessons
          </h2>

          <div className="space-y-3">
            {module.lessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                href={`/modules/${module.id}/lessons/${lesson.id}`}
              >
                <article className="card card-terminal p-4 md:p-5 group cursor-pointer hover:border-accent/50 transition-all">
                  <div className="flex items-center gap-4">
                    {/* Lesson number */}
                    <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono text-sm flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Lesson info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors truncate">
                        {lesson.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        {/* Status indicator */}
                        <span className="font-mono text-xs text-text-muted">
                          [ ] pending
                        </span>
                        {/* Exercise badge */}
                        {lesson.handsOnExercise && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-warning/10 text-warning font-mono">
                            <Code className="w-3 h-3" aria-hidden="true" />
                            exercise
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Start CTA */}
        <section className="mt-12" aria-labelledby="cta-title">
          <div className="card border-accent/30 bg-gradient-to-br from-dark-navy to-navy p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2
                  id="cta-title"
                  className="text-xl md:text-2xl font-bold text-white mb-2"
                >
                  Ready to Start?
                </h2>
                <p className="text-pale-blue">
                  Begin with the first lesson and work your way through the
                  module.
                </p>
              </div>

              <Link
                href={`/modules/${module.id}/lessons/${module.lessons[0].id}`}
              >
                <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
                  <Play className="w-4 h-4" aria-hidden="true" />
                  Start First Lesson
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </div>

            {/* Terminal hint */}
            <div className="mt-6">
              <TerminalBlock
                lines={[
                  { type: "prompt", content: `cd ${module.id} && start` },
                  {
                    type: "output",
                    content: `Starting lesson 1 of ${module.lessons.length}...`,
                  },
                ]}
                className="bg-dark-navy/50"
              />
            </div>
          </div>
        </section>
      </main>

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
