import React, { useMemo } from 'react';
import { marked } from 'marked';

interface MarkdownViewProps {
  content: string;
  className?: string;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({ content, className = '' }) => {
  const html = useMemo(() => {
    try {
      // Configure marked
      marked.setOptions({
        gfm: true,
        breaks: true,
      });

      // Clean up common AI markdown artifacts before parsing
      let cleaned = content
        // Clean excessive double bullet asterisks like "* **Nuansa:** **Text**"
        .replace(/\*\s+\*\*([^*]+)\*\*:\s+\*\*([^*]+)\*\*/g, '• **$1:** $2')
        .replace(/\*\s+\*\*([^*]+)\*\*:/g, '• **$1:**')
        .replace(/^\s*\*\s+/gm, '• ');

      return marked.parse(cleaned) as string;
    } catch (e) {
      return content;
    }
  }, [content]);

  return (
    <div
      className={`ai-markdown-content leading-relaxed text-[#1E1B18] ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
