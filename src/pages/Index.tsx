import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Target, BarChart3, PenTool, Users, Zap, CheckCircle2, Instagram, Youtube, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ProjectCard } from '@/components/ProjectCard';
import { caseStudies } from '@/data/mockData';
import profileImage from '@/assets/aastha-profile.jpg';

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const approachSteps = [
    {
      icon: Target,
      title: 'Research & Audience',
      description: 'Deep-dive into audience personas, competitor analysis, and market trends to inform strategy.',
      color: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-500'
    },
    {
      icon: PenTool,
      title: 'Content Planning',
      description: 'Story-driven content calendars with hooks, narratives, and platform-specific formats.',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500'
    },
    {
      icon: Zap,
      title: 'Platform Execution',
      description: 'Tailored content for each platform—Instagram reels, LinkedIn carousels, Twitter threads.',
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-500'
    },
    {
      icon: BarChart3,
      title: 'Measure & Optimize',
      description: 'Track engagement, analyze performance, and iterate for continuous growth.',
      color: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-500'
    }
  ];

  const contentSamples = [
    {
      type: 'Instagram Reel',
      title: 'Behind the Brand',
      description: 'A day in the life at Chai Sutta Bar—authentic, raw, relatable content that builds connection.',
      engagement: '15K+ potential views',
      platform: Instagram
    },
    {
      type: 'LinkedIn Post',
      title: 'Brand Story Thread',
      description: 'How a ₹3 chai became a ₹300Cr empire—storytelling that educates and inspires.',
      engagement: '500+ reactions',
      platform: Linkedin
    },
    {
      type: 'Campaign Concept',
      title: '#ChaiPeCharcha',
      description: 'User-generated content campaign encouraging customers to share their chai moments.',
      engagement: 'Community building',
      platform: MessageCircle
    }
  ];

  const tools = [
    { name: 'Instagram', category: 'Platform' },
    { name: 'LinkedIn', category: 'Platform' },
    { name: 'YouTube', category: 'Platform' },
    { name: 'Twitter/X', category: 'Platform' },
    { name: 'Canva', category: 'Creation' },
    { name: 'CapCut', category: 'Creation' },
    { name: 'Meta Business Suite', category: 'Analytics' },
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'Hootsuite', category: 'Management' },
    { name: 'Buffer', category: 'Management' },
    { name: 'Notion', category: 'Planning' },
    { name: 'ChatGPT', category: 'AI Tools' }
  ];

  const whyHireMe = [
    {
      title: 'Strategic Thinker',
      description: 'I don\'t just post—I plan with purpose. Every piece of content ties back to business goals.'
    },
    {
      title: 'Creative & Consistent',
      description: 'Fresh ideas delivered on schedule. I understand that consistency builds audiences.'
    },
    {
      title: 'Data-Informed',
      description: 'I track what works, learn what doesn\'t, and optimize relentlessly.'
    },
    {
      title: 'Fast Learner',
      description: 'Platforms evolve, algorithms change—I stay curious and adapt quickly.'
    },
    {
      title: 'Ownership Mentality',
      description: 'I treat brand accounts like my own. Every post represents the brand\'s voice and values.'
    }
  ];

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section - Social Media Manager Focus */}
        <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-mesh" />
          <motion.div 
            className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Content - 7 cols */}
              <motion.div 
                className="lg:col-span-7 order-2 lg:order-1"
                style={{ y, opacity }}
              >
                {/* Status Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Open for Social Media Manager roles
                </motion.div>
                
                {/* Main Headline */}
                <motion.h1 
                  className="font-display text-display-lg lg:text-display-xl text-foreground mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="block">I help brands grow</span>
                  <span className="block gradient-text">through strategy-led</span>
                  <span className="block">
                    social media
                    <motion.span 
                      className="inline-block ml-2"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ✦
                    </motion.span>
                  </span>
                </motion.h1>
                
                {/* Subheadline - Process Flow */}
                <motion.div 
                  className="mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 max-w-xl">
                    Not random posts. <span className="text-foreground font-medium">Strategic content</span> that builds audiences, drives engagement, and grows brands.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-secondary/50">Strategy</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                    <span className="px-3 py-1 rounded-full bg-secondary/50">Content</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                    <span className="px-3 py-1 rounded-full bg-secondary/50">Engagement</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                    <span className="px-3 py-1 rounded-full bg-secondary/50">Analytics</span>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div 
                  className="flex flex-wrap gap-4 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -2 }} 
                    whileTap={{ scale: 0.98 }}
                    className="group"
                  >
                    <Button variant="hero" size="xl" asChild className="group">
                      <Link to="/case-studies">
                        View Case Studies
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="subtle" size="xl" asChild>
                      <Link to="/contact">
                        <MessageCircle className="w-5 h-5" />
                        Let's Talk
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Credentials */}
                <motion.div 
                  className="flex flex-wrap items-center gap-6 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span>Strategy-First Approach</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                    <span>Audience-Centric Content</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Profile Image - 5 cols */}
              <motion.div 
                className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
              >
                <div className="relative">
                  {/* Decorative Ring */}
                  <motion.div 
                    className="absolute -inset-4 rounded-[2rem] border-2 border-dashed border-accent/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Image Container */}
                  <div className="relative w-72 h-72 lg:w-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={profileImage}
                      alt="Aastha Srivastava - Social Media Strategist"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating Card - Social Platforms */}
                  <motion.div 
                    className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-elevated"
                    initial={{ opacity: 0, x: -30, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.9, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                          <Instagram className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                          <Linkedin className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                          <Youtube className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">Multi-Platform</div>
                        <div className="text-xs text-muted-foreground">Strategy Expert</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Card - Content */}
                  <motion.div 
                    className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-elevated"
                    initial={{ opacity: 0, x: 30, y: -30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">Content • Strategy • Growth</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div 
              className="flex flex-col items-center gap-2 text-muted-foreground"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                  animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* My Approach Section */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-subtle" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  My Approach
                </motion.span>
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-4">
                  How I Grow Brands on Social
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  A systematic approach that turns followers into fans and content into conversions.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approachSteps.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 0.1}>
                  <motion.div 
                    className="relative bg-card rounded-2xl p-6 border border-border/50 h-full overflow-hidden group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 ${step.iconColor}`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Step {index + 1}</div>
                      <h3 className="font-display font-semibold text-foreground text-lg mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
                <div>
                  <motion.span 
                    className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    Featured Work
                  </motion.span>
                  <h2 className="font-display text-display-md lg:text-display-lg text-foreground">
                    Strategy Case Studies
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-md text-lg">
                  Real brand challenges with strategic thinking—from problem to execution.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={study.id} delay={index * 0.15}>
                  <ProjectCard study={study} index={index} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="text-center mt-16">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" size="lg" asChild className="group">
                    <Link to="/case-studies">
                      View All Case Studies
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Samples Section */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-subtle" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Content Ideas
                </motion.span>
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-4">
                  Sample Content Concepts
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  A glimpse into how I think about content strategy and creative execution.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {contentSamples.map((sample, index) => (
                <ScrollReveal key={sample.title} delay={index * 0.15}>
                  <motion.div 
                    className="bg-card rounded-2xl p-6 border border-border/50 h-full group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-accent">
                        <sample.platform className="w-5 h-5" />
                      </div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{sample.type}</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{sample.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sample.description}</p>
                    <div className="flex items-center gap-2 text-xs text-accent font-medium">
                      <TrendingUp className="w-3 h-3" />
                      {sample.engagement}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Skills Section */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Toolkit
                </motion.span>
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-4">
                  Tools & Platforms
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  The platforms and tools I use to create, manage, and analyze content.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="px-5 py-3 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <span className="text-sm font-medium text-foreground">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Hire Me Section */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-subtle" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Why Me
                </motion.span>
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-4">
                  Why Work With Me
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  What I bring to the table beyond just posting content.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyHireMe.map((reason, index) => (
                <ScrollReveal key={reason.title} delay={index * 0.1}>
                  <motion.div 
                    className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-2">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI Section Teaser */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <motion.div 
                className="relative overflow-hidden rounded-[2rem] bg-gradient-hero p-10 lg:p-16"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.4 }}
              >
                {/* Background Effects */}
                <div className="absolute inset-0">
                  <motion.div 
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
                    animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]"
                    animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <motion.div 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-medium mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <Sparkles className="w-4 h-4" />
                      AI-Powered Feature
                    </motion.div>
                    <h3 className="font-display text-display-sm lg:text-display-md text-primary-foreground mb-6">
                      Explore My Portfolio with AI
                    </h3>
                    <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                      Get an instant analysis of my skills, experience, and fit for Social Media Manager roles through an AI-powered assessment.
                    </p>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="accent" size="xl" asChild className="shadow-glow">
                        <Link to="/ai-recruiter">
                          Try AI Analysis
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                  
                  {/* Preview Card */}
                  <div className="hidden lg:flex justify-end">
                    <motion.div 
                      className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/10 w-full max-w-sm"
                      initial={{ opacity: 0, y: 30, rotate: 3 }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow">
                          <span className="text-accent-foreground text-2xl font-bold">92</span>
                        </div>
                        <div>
                          <div className="text-primary-foreground font-semibold text-lg">Fit Score</div>
                          <div className="text-primary-foreground/60">Social Media Manager</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-primary-foreground/70">Strategy Strength</span>
                            <span className="text-accent font-medium">92%</span>
                          </div>
                          <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-accent rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: "92%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                        <div className="pt-4 border-t border-primary-foreground/10">
                          <p className="text-primary-foreground/60 text-sm">
                            ✓ Strong strategic thinking & execution
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-6">
                  Let's grow your brand <span className="gradient-text">together</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-10">
                  I'm actively seeking Social Media Manager opportunities where I can drive real growth through strategic content.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/contact">
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" size="xl" asChild>
                      <Link to="/resume">
                        View Resume
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Index;
