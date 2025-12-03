import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface TerminalLine {
  type: "prompt" | "command" | "output" | "comment" | "success" | "warning" | "error" | "empty";
  content: string;
}

interface TerminalBlockProps {
  lines: TerminalLine[];
  title?: string;
  copyable?: boolean;
  className?: string;
}

export default function TerminalBlock({
  lines,
  title,
  copyable = false,
  className = "",
}: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const textToCopy = lines
      .filter((line) => line.type !== "comment" && line.type !== "empty")
      .map((line) => {
        if (line.type === "prompt") return `> ${line.content}`;
        if (line.type === "command") return `$ ${line.content}`;
        return line.content;
      })
      .join("\n");

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getLineClasses = (type: TerminalLine["type"]) => {
    switch (type) {
      case "prompt":
        return "terminal-prompt";
      case "command":
        return "terminal-command";
      case "output":
        return "terminal-output";
      case "comment":
        return "terminal-comment";
      case "success":
        return "terminal-success";
      case "warning":
        return "terminal-warning";
      case "error":
        return "terminal-error";
      case "empty":
        return "";
      default:
        return "text-text-primary";
    }
  };

  const getPrefix = (type: TerminalLine["type"]) => {
    switch (type) {
      case "prompt":
        return <span className="text-bright-blue mr-2">&gt;</span>;
      case "command":
        return <span className="text-light-blue mr-2">$</span>;
      case "comment":
        return <span className="text-gray-500 mr-2">//</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`terminal relative group ${className}`}>
      {/* Header with title and copy button */}
      {(title || copyable) && (
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-navy">
          {title && (
            <span className="text-xs text-text-muted font-mono">{title}</span>
          )}
          {copyable && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-text-muted hover:text-text-primary hover:bg-navy/50 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label={copied ? "Copied!" : "Copy to clipboard"}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-success" />
                  <span className="text-success">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Terminal content */}
      <div className="space-y-1">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`flex items-start ${getLineClasses(line.type)} ${
              line.type === "empty" ? "h-4" : ""
            }`}
          >
            {getPrefix(line.type)}
            <span className="flex-1 whitespace-pre-wrap break-words">
              {line.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Convenience component for simple prompt displays
interface SimpleTerminalProps {
  prompt?: string;
  command?: string;
  output?: string;
  className?: string;
}

export function SimpleTerminal({
  prompt,
  command,
  output,
  className = "",
}: SimpleTerminalProps) {
  const lines: TerminalLine[] = [];

  if (prompt) lines.push({ type: "prompt", content: prompt });
  if (command) lines.push({ type: "command", content: command });
  if (output) lines.push({ type: "output", content: output });

  return <TerminalBlock lines={lines} className={className} />;
}
