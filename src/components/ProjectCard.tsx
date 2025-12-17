import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/mockData';
import { cn } from '@/lib/utils';

export function ProjectCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  return (
    <Link to={`/case-study/${study.id}`} className="block group h-full">
      <motion.div
        className="relative h-full overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500"
        whileHover={{ 
          y: -8,
          boxShadow: "var(--shadow-card-hover)"
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: index * 0.1,
          duration: 0.5,
          type: "spring",
          stiffness: 100
        }}
      >
        {/* Gradient Header with Context */}
        <div className={cn("relative h-56 bg-gradient-to-br overflow-hidden", study.color)}>
          {/* Animated overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 0.4 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"
            whileHover={{ scale: 1.5, opacity: 0.2 }}
            transition={{ duration: 0.5 }}
          />
          
          <div className="relative z-10 h-full flex flex-col justify-between p-6">
            {/* Industry Badge */}
            <motion.span 
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium w-fit"
              whileHover={{ scale: 1.05 }}
            >
              {study.industry}
            </motion.span>
            
            {/* Title and Subtitle */}
            <div>
              <h3 className="font-display text-2xl font-semibold text-white mb-2 leading-tight">
                {study.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {study.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Context / Problem Statement */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2">
            {study.description}
          </p>

          {/* Impact Metrics */}
          <div className="flex flex-wrap gap-2 mb-5">
            {study.impact.slice(0, 2).map((item, i) => (
              <motion.span 
                key={i} 
                className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-xs font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent) / 0.15)" }}
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-5 border-t border-border/50">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-medium">{study.role}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>{study.duration}</span>
            </div>
            <motion.div 
              className="flex items-center gap-1.5 text-accent font-medium text-sm"
              whileHover={{ x: 4 }}
            >
              <span className="hidden sm:inline">Read Case Study</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
