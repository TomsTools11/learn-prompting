import { Link } from "wouter";
import { Folder, ChevronRight } from "lucide-react";

export type ModuleStatus = "pending" | "in_progress" | "completed" | "locked";

interface ModuleCardProps {
  id: string;
  title: string;
  lessonCount: number;
  completedLessons?: number;
  status?: ModuleStatus;
  description?: string;
  className?: string;
}

export default function ModuleCard({
  id,
  title,
  lessonCount,
  completedLessons = 0,
  status = "pending",
  description,
  className = "",
}: ModuleCardProps) {
  const getStatusIndicator = () => {
    switch (status) {
      case "completed":
        return { symbol: "[✓]", color: "text-success", label: "complete" };
      case "in_progress":
        return { symbol: "[~]", color: "text-warning", label: "in progress" };
      case "locked":
        return { symbol: "[x]", color: "text-gray-600", label: "locked" };
      default:
        return { symbol: "[ ]", color: "text-gray-500", label: "pending" };
    }
  };

  const statusInfo = getStatusIndicator();
  const progress = lessonCount > 0 ? Math.round((completedLessons / lessonCount) * 100) : 0;

  return (
    <Link href={`/modules/${id}`}>
      <article
        className={`module-card group cursor-pointer ${className}`}
        aria-label={`Module: ${title}, ${completedLessons} of ${lessonCount} lessons completed`}
      >
        {/* Module header */}
        <div className="flex items-center gap-2 mb-3">
          <Folder className="w-4 h-4 text-accent" aria-hidden="true" />
          <span className="text-white font-medium text-sm truncate">
            {id}/
          </span>
        </div>

        {/* Module properties */}
        <div className="space-y-1.5 text-sm mb-4">
          {/* Name */}
          <div className="flex">
            <span className="text-gray-500">├── </span>
            <span className="module-card-prop-key">"name"</span>
            <span className="text-gray-500">: </span>
            <span className="module-card-prop-value truncate">"{title}"</span>
          </div>

          {/* Lessons */}
          <div className="flex">
            <span className="text-gray-500">├── </span>
            <span className="module-card-prop-key">"lessons"</span>
            <span className="text-gray-500">: </span>
            <span className="text-warning">{lessonCount}</span>
          </div>

          {/* Progress */}
          <div className="flex">
            <span className="text-gray-500">├── </span>
            <span className="module-card-prop-key">"progress"</span>
            <span className="text-gray-500">: </span>
            <span className="text-pale-blue">{progress}%</span>
          </div>

          {/* Status */}
          <div className="flex">
            <span className="text-gray-500">└── </span>
            <span className="module-card-prop-key">"status"</span>
            <span className="text-gray-500">: </span>
            <span className={statusInfo.color}>{statusInfo.label}</span>
          </div>
        </div>

        {/* Description (if provided) */}
        {description && (
          <p className="text-xs text-gray-500 italic mb-4 line-clamp-2">
            // {description}
          </p>
        )}

        {/* Command footer */}
        <div className="flex items-center justify-between pt-3 border-t border-navy/50">
          <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-accent transition-colors">
            <span className="text-light-blue">$</span>
            <span>cd {id} && start</span>
          </div>
          <ChevronRight
            className="w-4 h-4 text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all"
            aria-hidden="true"
          />
        </div>

        {/* Progress bar */}
        {progress > 0 && (
          <div className="mt-3 h-1 bg-navy rounded-full overflow-hidden">
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
        )}
      </article>
    </Link>
  );
}

// Skeleton loader for ModuleCard
export function ModuleCardSkeleton() {
  return (
    <div className="module-card animate-pulse">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-4 h-4 bg-navy/50 rounded" />
        <div className="h-4 w-24 bg-navy/50 rounded" />
      </div>

      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-navy/50 rounded" />
        <div className="h-4 w-3/4 bg-navy/50 rounded" />
        <div className="h-4 w-1/2 bg-navy/50 rounded" />
        <div className="h-4 w-2/3 bg-navy/50 rounded" />
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-navy/50">
        <div className="h-4 w-32 bg-navy/50 rounded" />
        <div className="w-4 h-4 bg-navy/50 rounded" />
      </div>
    </div>
  );
}
