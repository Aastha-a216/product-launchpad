import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { caseStudies } from '@/data/mockData';
import { cn } from '@/lib/utils';

export function ProjectCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  return (
    <Link
      to={`/case-study/${study.id}`}
      className={cn(
        "group block relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-elevated",
        "opacity-0 animate-fade-in-up",
        index === 0 && "stagger-1",
        index === 1 && "stagger-2",
        index === 2 && "stagger-3"
      )}
    >
      {/* Gradient Header */}
      <div className={cn("h-48 bg-gradient-to-br p-6 relative", study.color)}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium w-fit">
            {study.industry}
          </span>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
            <p className="text-white/80 text-sm">{study.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {study.description}
        </p>

        {/* Impact Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {study.impact.slice(0, 2).map((item, i) => (
            <span key={i} className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium">
              {item}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{study.role}</span>
            <span>•</span>
            <span>{study.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-accent font-medium text-sm group-hover:gap-2 transition-all">
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
