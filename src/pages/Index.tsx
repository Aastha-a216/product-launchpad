import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Target, BarChart3, PenTool, Users, Zap, CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';
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
      title: 'Research & Discovery',
      description: 'Understanding user needs, business goals, and market context before designing.',
      color: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-500'
    },
    {
      icon: PenTool,
      title: 'UX Strategy',
      description: 'Information architecture, user flows, and wireframes that solve real problems.',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500'
    },
    {
      icon: Zap,
      title: 'AI-Assisted Build',
      description: 'Using AI tools like Lovable to rapidly prototype and iterate on designs.',
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-500'
    },
    {
      icon: BarChart3,
      title: 'Measure & Iterate',
      description: 'Testing with real users and iterating based on feedback and data.',
      color: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-500'
    }
  ];

  const contentSamples = [
    {
      type: 'Chai Sutta Bar',
      title: 'Loyalty Redesign',
      description: '₹300Cr+ brand with 550+ outlets—redesigned their digital loyalty to turn casual drinkers into repeat users through gamification.',
      engagement: 'Real brand case study',
      platform: MessageCircle
    },
    {
      type: 'FirstClub',
      title: 'Premium Onboarding',
      description: 'Invite-only experiences platform—improved exclusivity perception and interest-based discovery for new users.',
      engagement: 'UX case study',
      platform: Users
    },
    {
      type: 'AI + Design',
      title: 'How I Work',
      description: 'I use AI (Lovable, ChatGPT, Midjourney) as execution partners while driving all UX decisions, flows, and strategy myself.',
      engagement: 'Human-led, AI-assisted',
      platform: Sparkles
    }
  ];

  const tools = [
    { name: 'Figma', category: 'Design' },
    { name: 'Lovable AI', category: 'AI' },
    { name: 'ChatGPT', category: 'AI' },
    { name: 'Midjourney', category: 'AI' },
    { name: 'Miro', category: 'Research' },
    { name: 'Notion', category: 'Planning' },
    { name: 'React', category: 'Code' },
    { name: 'Tailwind CSS', category: 'Code' },
    { name: 'Framer Motion', category: 'Animation' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'Vercel', category: 'Deploy' },
    { name: 'GitHub', category: 'Version Control' }
  ];

  const whyHireMe = [
    {
      title: 'Product Thinker',
      description: 'I design with business goals in mind—not just pixels, but outcomes that matter.'
    },
    {
      title: 'AI-Fluent',
      description: 'I leverage AI tools (Lovable, ChatGPT, Midjourney) to accelerate execution while maintaining design quality.'
    },
    {
      title: 'Full-Stack Aware',
      description: 'I understand how designs translate to code—React, Tailwind, databases, and deployment.'
    },
    {
      title: 'Fast Learner',
      description: 'New tools, frameworks, patterns—I pick them up quickly and apply them effectively.'
    },
    {
      title: 'Ownership Mentality',
      description: 'I treat projects like my own. I care about the details, the deadlines, and the outcomes.'
    }
  ];

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section - Social Media Manager Focus */}
        <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
          {/* 3D Animated Background */}
          <div className="absolute inset-0 bg-gradient-mesh overflow-hidden">
            {/* Floating 3D Orbs */}
            <motion.div 
              className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, hsl(var(--accent) / 0.3), hsl(var(--accent) / 0.05) 60%, transparent)',
                boxShadow: 'inset 0 0 60px hsl(var(--accent) / 0.2), 0 0 80px hsl(var(--accent) / 0.1)'
              }}
              animate={{ 
                scale: [1, 1.15, 1],
                x: [0, 40, 0],
                y: [0, -30, 0],
                rotateY: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-10 left-5 w-[350px] h-[350px] rounded-full"
              style={{
                background: 'radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.03) 60%, transparent)',
                boxShadow: 'inset 0 0 50px hsl(var(--primary) / 0.15), 0 0 60px hsl(var(--primary) / 0.08)'
              }}
              animate={{ 
                scale: [1, 1.25, 1],
                x: [0, -25, 0],
                y: [0, 40, 0],
                rotateX: [0, 180, 360]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-accent/40"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, i % 2 === 0 ? 20 : -20, 0],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                                  linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Content - 7 cols */}
              <motion.div 
                className="lg:col-span-7 order-2 lg:order-1"
                style={{ y, opacity }}
              >
                {/* AI-Powered Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <Sparkles className="w-4 h-4" />
                  AI-Powered Product Design
                </motion.div>
                
                {/* Main Headline */}
                <motion.h1 
                  className="font-display text-display-lg lg:text-display-xl text-foreground mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="block">I design products</span>
                  <span className="block gradient-text">with AI-powered</span>
                  <span className="block">
                    execution
                    <motion.span 
                      className="inline-block ml-2"
                      animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
                    Product designer who uses <span className="text-foreground font-medium">AI as an execution partner</span>—delivering real, working products faster than traditional workflows.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-secondary/50">Research</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                    <span className="px-3 py-1 rounded-full bg-secondary/50">UX Design</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                    <span className="px-3 py-1 rounded-full bg-secondary/50">AI Build</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                    <span className="px-3 py-1 rounded-full bg-secondary/50">Ship</span>
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
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span>AI-Assisted Workflow</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <Target className="w-4 h-4" />
                    </div>
                    <span>Product-Focused Design</span>
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
                      alt="Aastha Srivastava - Product Designer"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating Card - AI Tools */}
                  <motion.div 
                    className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-elevated"
                    initial={{ opacity: 0, x: -30, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.9, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <motion.div 
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center"
                          animate={{ rotateY: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                          <PenTool className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">AI-Powered</div>
                        <div className="text-xs text-muted-foreground">Design Workflow</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Card - Skills */}
                  <motion.div 
                    className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-elevated"
                    initial={{ opacity: 0, x: 30, y: -30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">UX • UI • Product</span>
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
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle" />
          {/* 3D Background Element */}
          <motion.div 
            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)',
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  My Process
                </motion.span>
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-4">
                  How I Design Products
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  A human-led, AI-assisted workflow that delivers real products faster.
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

        {/* Projects Section with 3D Effects */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle" />
          {/* 3D Floating Elements */}
          <motion.div 
            className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, hsl(var(--accent) / 0.2), transparent 70%)',
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Real Work
                </motion.span>
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-4">
                  Projects & Case Studies
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Real brands, real challenges—showcasing product thinking and AI-assisted execution.
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
                  I combine product thinking with AI-powered execution to create experiences that users love and businesses need.
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
