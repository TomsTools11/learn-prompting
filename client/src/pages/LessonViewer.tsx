import { useRoute, Link } from "wouter";
import { useEffect, useState } from "react";
import { courseModules } from "@/data/courseData";
import {
  Home,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Menu,
  X,
  FileText,
  Code,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";

export default function LessonViewer() {
  const [, params] = useRoute("/modules/:moduleId/lessons/:lessonId");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const module = courseModules.find((m) => m.id === params?.moduleId);
  const lesson = module?.lessons.find((l) => l.id === params?.lessonId);

  // Scroll to top whenever the lesson changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setSidebarOpen(false); // Close mobile sidebar on navigation
  }, [params?.lessonId, params?.moduleId]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  if (!module || !lesson) {
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
              Lesson Not Found
            </h1>
            <p className="text-text-secondary mb-6">
              The lesson you're looking for doesn't exist.
            </p>
            <Link href="/modules">
              <button className="btn-primary inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to Modules
              </button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const currentLessonIndex = module.lessons.findIndex(
    (l) => l.id === lesson.id
  );
  const previousLesson =
    currentLessonIndex > 0 ? module.lessons[currentLessonIndex - 1] : null;
  const nextLesson =
    currentLessonIndex < module.lessons.length - 1
      ? module.lessons[currentLessonIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />

      <main id="main-content" className="container mx-auto px-4 py-8">
        {/* Top Navigation Bar */}
        <nav className="mb-6 flex items-center justify-between">
          {/* Breadcrumb */}
          <ol
            className="flex items-center gap-2 text-sm font-mono"
            aria-label="Breadcrumb"
          >
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
                href={`/modules/${module.id}`}
                className="text-text-secondary hover:text-accent transition-colors"
              >
                {module.id}
              </Link>
            </li>
            <li className="text-text-muted">/</li>
            <li className="text-accent truncate max-w-[150px]" aria-current="page">
              {lesson.id}
            </li>
          </ol>

          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
            aria-label="Open lesson navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Lesson Header */}
            <header className="card card-terminal p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs px-2 py-1 rounded bg-accent/10 text-accent">
                  Lesson {currentLessonIndex + 1} of {module.lessons.length}
                </span>
                {lesson.handsOnExercise && (
                  <span className="font-mono text-xs px-2 py-1 rounded bg-warning/10 text-warning flex items-center gap-1">
                    <Code className="w-3 h-3" aria-hidden="true" />
                    exercise
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
                {lesson.title}
              </h1>
            </header>

            {/* Lesson Content */}
            <div className="card card-terminal p-6 md:p-8 mb-6">
              <div className="prose prose-invert prose-lg max-w-none
                prose-headings:text-text-primary prose-headings:font-semibold
                prose-p:text-text-secondary prose-p:leading-relaxed
                prose-strong:text-text-primary prose-strong:font-semibold
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-ul:text-text-secondary prose-ol:text-text-secondary
                prose-li:marker:text-accent
                prose-code:text-accent prose-code:bg-navy/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
                prose-pre:bg-dark-navy prose-pre:border prose-pre:border-navy prose-pre:rounded-md
                prose-blockquote:border-l-accent prose-blockquote:bg-accent/5 prose-blockquote:text-text-secondary prose-blockquote:py-2 prose-blockquote:rounded-r
              ">
                <ReactMarkdown>{lesson.content}</ReactMarkdown>
              </div>
            </div>

            {/* Key Points */}
            {lesson.keyPoints && lesson.keyPoints.length > 0 && (
              <section
                className="card card-terminal p-6 mb-6 border-l-4 border-l-success"
                aria-labelledby="key-points-title"
              >
                <h2
                  id="key-points-title"
                  className="flex items-center gap-2 text-lg font-semibold text-success mb-4"
                >
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                  Key Takeaways
                </h2>
                <ul className="space-y-3">
                  {lesson.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="font-mono text-success flex-shrink-0">
                        [✓]
                      </span>
                      <span className="text-text-secondary">{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Hands-on Exercise */}
            {lesson.handsOnExercise && (
              <section
                className="card card-terminal p-6 mb-6 border-l-4 border-l-warning"
                aria-labelledby="exercise-title"
              >
                <h2
                  id="exercise-title"
                  className="flex items-center gap-2 text-lg font-semibold text-warning mb-4"
                >
                  <Lightbulb className="w-5 h-5" aria-hidden="true" />
                  Hands-on Exercise
                </h2>
                <p className="text-text-secondary">{lesson.handsOnExercise}</p>
              </section>
            )}

            {/* Navigation Buttons */}
            <nav
              className="flex flex-col sm:flex-row justify-between gap-4 mt-8"
              aria-label="Lesson navigation"
            >
              {previousLesson ? (
                <Link
                  href={`/modules/${module.id}/lessons/${previousLesson.id}`}
                  className="flex-1 sm:flex-none"
                >
                  <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    Previous Lesson
                  </button>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}

              {nextLesson ? (
                <Link
                  href={`/modules/${module.id}/lessons/${nextLesson.id}`}
                  className="flex-1 sm:flex-none"
                >
                  <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                    Next Lesson
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </Link>
              ) : (
                <Link href="/modules" className="flex-1 sm:flex-none">
                  <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                    Complete Module
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  </button>
                </Link>
              )}
            </nav>
          </article>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="card card-terminal sticky top-24">
              <div className="p-4 border-b border-navy">
                <h2 className="font-mono text-sm text-text-muted">
                  <span className="text-accent">&gt;</span> Module Lessons
                </h2>
              </div>
              <nav className="max-h-[60vh] overflow-y-auto scrollbar-custom">
                <ul className="divide-y divide-navy/50">
                  {module.lessons.map((l, index) => (
                    <li key={l.id}>
                      <Link
                        href={`/modules/${module.id}/lessons/${l.id}`}
                        className={`flex items-start gap-3 p-4 transition-colors ${
                          l.id === lesson.id
                            ? "bg-accent/10 border-l-2 border-l-accent"
                            : "hover:bg-navy/30 border-l-2 border-l-transparent"
                        }`}
                        aria-current={l.id === lesson.id ? "page" : undefined}
                      >
                        <span
                          className={`font-mono text-xs w-6 text-center flex-shrink-0 ${
                            l.id === lesson.id
                              ? "text-accent"
                              : "text-text-muted"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-sm ${
                            l.id === lesson.id
                              ? "text-accent font-medium"
                              : "text-text-secondary"
                          }`}
                        >
                          {l.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-dark-navy/80 backdrop-blur-sm z-modal-backdrop lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Lesson navigation"
            className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-bg-primary border-l border-border z-modal animate-slide-in-right lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-mono text-sm text-text-secondary">
                  <span className="text-accent">$</span> lessons
                </span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-md text-text-muted hover:text-text-primary hover:bg-bg-secondary transition-colors"
                  aria-label="Close lesson navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto">
                <ul className="divide-y divide-border">
                  {module.lessons.map((l, index) => (
                    <li key={l.id}>
                      <Link
                        href={`/modules/${module.id}/lessons/${l.id}`}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-start gap-3 p-4 transition-colors ${
                          l.id === lesson.id
                            ? "bg-accent/10 border-l-4 border-l-accent"
                            : "hover:bg-bg-secondary border-l-4 border-l-transparent"
                        }`}
                        aria-current={l.id === lesson.id ? "page" : undefined}
                      >
                        <span
                          className={`font-mono text-xs w-6 text-center flex-shrink-0 ${
                            l.id === lesson.id
                              ? "text-accent"
                              : "text-text-muted"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-sm ${
                            l.id === lesson.id
                              ? "text-accent font-medium"
                              : "text-text-secondary"
                          }`}
                        >
                          {l.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-4 border-t border-border">
                <Link href={`/modules/${module.id}`}>
                  <button className="btn-secondary w-full flex items-center justify-center gap-2 text-sm">
                    <FileText className="w-4 h-4" aria-hidden="true" />
                    Back to Module
                  </button>
                </Link>
              </div>
            </div>
          </aside>
        </>
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
