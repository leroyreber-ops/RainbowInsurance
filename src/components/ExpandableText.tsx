import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableTextProps {
  children: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  maxLines?: number; // Kept for compatibility
  isManual?: boolean;
  preview?: React.ReactNode;
}

export default function ExpandableText({ 
  children, 
  className = "", 
  buttonClassName = "",
  maxLines,
  isManual = false,
  preview = null
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { visibleContent, hiddenContent, shouldExpand } = useMemo(() => {
    if (isManual) {
      return { visibleContent: preview, hiddenContent: children, shouldExpand: true };
    }

    if (typeof children !== 'string') {
      // If it's not a string, we can't easily apply the 1/3 word count logic
      // For now, we'll just treat it as not needing expansion unless we want to implement complex node parsing
      return { visibleContent: children, hiddenContent: null, shouldExpand: false };
    }

    const paragraphs = children.split(/\n\s*\n/).filter(p => p.trim() !== '');
    const wordCount = children.trim().split(/\s+/).length;

    if (wordCount <= 100 || paragraphs.length < 2) {
      return { visibleContent: children, hiddenContent: null, shouldExpand: false };
    }

    const cutoffIndex = Math.max(1, Math.floor(paragraphs.length / 3));
    const visible = paragraphs.slice(0, cutoffIndex).join('\n\n');
    const hidden = paragraphs.slice(cutoffIndex).join('\n\n');

    return { 
      visibleContent: visible, 
      hiddenContent: hidden, 
      shouldExpand: true 
    };
  }, [children]);

  if (!shouldExpand) {
    return (
      <div className={`whitespace-pre-wrap ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="whitespace-pre-wrap">
        {visibleContent}
      </div>
      
      {isExpanded && (
        <div className="whitespace-pre-wrap mt-4">
          {hiddenContent}
        </div>
      )}

      {/* Hidden content for SEO when collapsed */}
      {!isExpanded && (
        <div className="sr-only">
          {hiddenContent}
        </div>
      )}

      <div className="mt-6 mb-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-2 font-black text-lg transition-all hover:scale-105 ${buttonClassName}`}
        >
          {isExpanded ? (
            <>Read Less <ChevronUp className="w-5 h-5" /></>
          ) : (
            <>Read More <ChevronDown className="w-5 h-5" /></>
          )}
        </button>
      </div>
    </div>
  );
}
