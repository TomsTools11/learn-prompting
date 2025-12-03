import { Link } from "wouter";
import { useEffect } from "react";
import { courseOverview, courseModules } from "@/data/courseData";
import { ArrowRight, BookOpen, Users, Target, Sparkles, Terminal, Code, Zap } from "lucide-react";
import Header from "@/components/Header";
import ModuleCard from "@/components/ModuleCard";
import TerminalBlock from "@/components/TerminalBlock";

export default function Home() {
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

      <main id="main-content" className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24" aria-labelledby="hero-title">
          <div className="max-w-4xl mx-auto text-center">
            {/* Terminal-style badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-muted border border-accent/30 mb-6">
              <Terminal className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="font-mono text-sm text-accent">
                Interactive Learning Experience
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
            >
              Master{" "}
              <span className="text-gradient">Prompt Engineering</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              {courseOverview.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/modules">
                <button className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Code className="w-5 h-5" aria-hidden="true" />
                  Start Learning
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
              <Link href="/techniques">
                <button className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto">
                  <BookOpen className="w-5 h-5" aria-hidden="true" />
                  Browse Techniques
                </button>
              </Link>
            </div>

            {/* Hero Terminal */}
            <div className="max-w-2xl mx-auto">
              <TerminalBlock
                title="getting-started.sh"
                lines={[
                  { type: "prompt", content: "learn-prompt init" },
                  { type: "empty", content: "" },
                  { type: "output", content: `Discovered ${courseModules.length} modules with ${totalLessons} lessons` },
                  { type: "output", content: "Loading interactive examples..." },
                  { type: "success", content: "Ready to learn! Run 'start' to begin." },
                  { type: "empty", content: "" },
                  { type: "comment", content: "From basics to advanced techniques" },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 md:mb-24" aria-label="Course statistics">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card-terminal p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {courseModules.length}
              </div>
              <div className="font-mono text-sm text-text-secondary">Modules</div>
            </div>
            <div className="card-terminal p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {totalLessons}
              </div>
              <div className="font-mono text-sm text-text-secondary">Lessons</div>
            </div>
            <div className="card-terminal p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                10+
              </div>
              <div className="font-mono text-sm text-text-secondary">Techniques</div>
            </div>
            <div className="card-terminal p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                Free
              </div>
              <div className="font-mono text-sm text-text-secondary">Always</div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="mb-16 md:mb-24" aria-labelledby="audience-title">
          <div className="text-center mb-8">
            <h2 id="audience-title" className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              <span className="text-accent font-mono">//</span> Who It's For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card card-terminal p-6 group">
              <Users className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
              <h3 className="font-mono text-lg text-text-primary mb-2">Developers</h3>
              <p className="text-sm text-text-secondary">
                Build AI-powered applications with effective prompts that get consistent results.
              </p>
            </div>

            <div className="card card-terminal p-6 group">
              <Target className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
              <h3 className="font-mono text-lg text-text-primary mb-2">Professionals</h3>
              <p className="text-sm text-text-secondary">
                Boost productivity by mastering AI communication for your daily workflows.
              </p>
            </div>

            <div className="card card-terminal p-6 group">
              <Sparkles className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
              <h3 className="font-mono text-lg text-text-primary mb-2">Curious Minds</h3>
              <p className="text-sm text-text-secondary">
                Understand how to effectively communicate with Large Language Models.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-16 md:mb-24" aria-labelledby="outcomes-title">
          <div className="card card-terminal p-6 md:p-8">
            <h2
              id="outcomes-title"
              className="text-2xl md:text-3xl font-bold text-text-primary mb-6"
            >
              <span className="text-accent font-mono">&gt;</span> What You'll Learn
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {courseOverview.learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="font-mono text-success flex-shrink-0">[✓]</span>
                  <p className="text-text-secondary">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section className="mb-16 md:mb-24" aria-labelledby="modules-title">
          <div className="text-center mb-8">
            <h2
              id="modules-title"
              className="text-2xl md:text-3xl font-bold text-text-primary mb-4"
            >
              <span className="text-accent font-mono">$</span> Course Modules
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Progress through {courseModules.length} comprehensive modules, from fundamentals to advanced techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="text-center mt-8">
            <Link href="/modules">
              <button className="btn-secondary inline-flex items-center gap-2">
                View All Modules
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </section>

        {/* Key Topics */}
        <section className="mb-16 md:mb-24" aria-labelledby="topics-title">
          <div className="text-center mb-8">
            <h2
              id="topics-title"
              className="text-2xl md:text-3xl font-bold text-text-primary mb-4"
            >
              <span className="text-accent font-mono">#</span> Key Techniques
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {courseOverview.keyTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 card card-terminal"
              >
                <span className="font-mono text-accent w-8 text-center">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-text-primary">{topic}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="mb-8"
          aria-labelledby="cta-title"
        >
          <div className="card border-accent/30 bg-gradient-to-br from-dark-navy to-navy p-8 md:p-12 text-center">
            <Zap className="w-12 h-12 text-accent mx-auto mb-6" aria-hidden="true" />

            <h2
              id="cta-title"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Ready to Master Prompt Engineering?
            </h2>

            <p className="text-pale-blue text-lg mb-8 max-w-2xl mx-auto">
              Start your journey today and unlock the full potential of AI through effective communication.
            </p>

            <div className="terminal max-w-md mx-auto mb-8">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-accent">&gt;</span>
                <span className="text-white">npm start learn-prompt</span>
                <span className="animate-blink text-accent">_</span>
              </div>
            </div>

            <Link href="/modules">
              <button className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3">
                Begin Your Journey
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </Link>
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
