"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface TerminalProps {
  output: string[];
  isFullscreen?: boolean;
}

export function Terminal({ output, isFullscreen = false }: TerminalProps) {
  return (
    <div className={cn(
      "h-full rounded-lg overflow-hidden terminal",
      !isFullscreen && "terminal"
    )}>
      <ScrollArea className="h-full p-4">
        <div className="terminal-font text-sm text-[#D4D4D4] whitespace-pre-wrap">
          {output.map((line, i) => (
            <div key={i} className="min-h-[20px]">
              {line}
            </div>
          ))}
          <span className="terminal-cursor">_</span>
        </div>
      </ScrollArea>
    </div>
  );
}