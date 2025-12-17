import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Briefcase, GraduationCap, ArrowUpRight, MousePointer2 } from 'lucide-react';
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

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section - Premium */}
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
                  Available for Associate Product Designer roles
                </motion.div>
                
                {/* Main Headline */}
                <motion.h1 
                  className="font-display text-display-lg lg:text-display-xl text-foreground mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="block">I design</span>
                  <span className="block gradient-text">products that</span>
                  <span className="block">
                    scale
                    <motion.span 
                      className="inline-block ml-2"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ✦
                    </motion.span>
                  </span>
                </motion.h1>
                
                {/* Subheadline */}
                <motion.p 
                  className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Product Designer crafting intuitive experiences for <span className="text-foreground font-medium">fintech</span>, <span className="text-foreground font-medium">SaaS</span>, and <span className="text-foreground font-medium">marketplace</span> startups. I transform complex workflows into elegant, user-centered solutions.
                </motion.p>

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
                        Explore My Work
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="subtle" size="xl" asChild>
                      <Link to="/ai-recruiter">
                        <Sparkles className="w-5 h-5" />
                        AI Recruiter View
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
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span>B.Tech, Information Technology</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span>3+ Case Studies</span>
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
                  
                  {/* Floating Card - Stats */}
                  <motion.div 
                    className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-elevated"
                    initial={{ opacity: 0, x: -30, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.9, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                        <span className="text-accent-foreground text-lg font-bold">3+</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">End-to-End</div>
                        <div className="text-xs text-muted-foreground">Case Studies</div>
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
                      <MousePointer2 className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">UX • UI • Systems</span>
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

        {/* Featured Work Section */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-subtle" />
          <div className="container mx-auto px-4 lg:px-8 relative">
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
                    Case Studies
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-md text-lg">
                  Deep dives into real product challenges—from research to interactive prototypes.
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
                      AI-Powered Portfolio Feature
                    </motion.div>
                    <h3 className="font-display text-display-sm lg:text-display-md text-primary-foreground mb-6">
                      Experience My Portfolio Through AI
                    </h3>
                    <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                      Get an instant assessment with simulated ATS scoring, skill analysis, and fit evaluation for Associate Product Designer roles.
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
                  
                  {/* ATS Preview Card */}
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
                          <span className="text-accent-foreground text-2xl font-bold">87</span>
                        </div>
                        <div>
                          <div className="text-primary-foreground font-semibold text-lg">ATS Score</div>
                          <div className="text-primary-foreground/60">High Match</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-primary-foreground/70">Profile Strength</span>
                            <span className="text-accent font-medium">87%</span>
                          </div>
                          <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-accent rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: "87%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                        <div className="pt-4 border-t border-primary-foreground/10">
                          <p className="text-primary-foreground/60 text-sm">
                            ✓ Strong product design fundamentals
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

        {/* Skills Overview */}
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
                  Expertise
                </motion.span>
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-4">
                  Core Competencies
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  A strong foundation in research, design systems, and user-centered product thinking.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: 'User Research', 
                  items: ['User Interviews', 'Usability Testing', 'Journey Mapping', 'Persona Development'], 
                  icon: '🔍',
                  gradient: 'from-blue-500/10 to-indigo-500/10'
                },
                { 
                  title: 'UX Design', 
                  items: ['Information Architecture', 'Wireframing', 'Prototyping', 'Interaction Design'], 
                  icon: '✏️',
                  gradient: 'from-purple-500/10 to-pink-500/10'
                },
                { 
                  title: 'UI Design', 
                  items: ['Visual Design', 'Design Systems', 'Responsive Design', 'Motion Design'], 
                  icon: '🎨',
                  gradient: 'from-amber-500/10 to-orange-500/10'
                },
                { 
                  title: 'Tools & Process', 
                  items: ['Figma', 'Miro', 'Notion', 'Agile Workflow'], 
                  icon: '🛠️',
                  gradient: 'from-emerald-500/10 to-teal-500/10'
                },
              ].map((skill, index) => (
                <ScrollReveal key={skill.title} delay={index * 0.1}>
                  <motion.div 
                    className={`relative bg-card rounded-2xl p-6 border border-border/50 h-full overflow-hidden group`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{skill.icon}</div>
                      <h3 className="font-display font-semibold text-foreground text-lg mb-4">{skill.title}</h3>
                      <ul className="space-y-2">
                        {skill.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-6">
                  Let's build something <span className="gradient-text">meaningful</span> together
                </h2>
                <p className="text-muted-foreground text-lg mb-10">
                  I'm actively seeking Associate Product Designer opportunities where I can contribute to impactful products.
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
