import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ProjectCard } from '@/components/ProjectCard';
import { caseStudies } from '@/data/mockData';
import profileImage from '@/assets/aastha-profile.jpg';

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Sparkles className="w-4 h-4" />
                  Open to Associate Product Designer roles
                </motion.div>
                
                <motion.h1 
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Hi, I'm <span className="text-accent">Aastha</span>
                  <br />
                  <span className="text-muted-foreground">Product Designer</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  I design intuitive, scalable products for fintech, SaaS, and marketplace startups. I focus on product thinking, UX decisions, systems, dashboards, and workflows.
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/case-studies">
                        View My Work
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="subtle" size="lg" asChild>
                      <Link to="/ai-recruiter">
                        AI Recruiter View
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div 
                  className="flex items-center gap-6 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    B.Tech IT
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    3 Product Case Studies
                  </div>
                </motion.div>
              </motion.div>

              {/* Profile Image */}
              <motion.div 
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20 scale-110"
                    animate={{ scale: [1.1, 1.15, 1.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-card shadow-float">
                    <img
                      src={profileImage}
                      alt="Aastha Srivastava - Product Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating Badge */}
                  <motion.div 
                    className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-elevated p-4 border border-border/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-xs text-muted-foreground">Case Studies</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Featured Case Studies
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Real product design work showcasing end-to-end thinking, from research to interactive prototypes.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={study.id} delay={index * 0.15}>
                  <ProjectCard study={study} index={index} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="text-center mt-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/case-studies">
                      View All Case Studies
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* AI Section Teaser */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <motion.div 
                className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 lg:p-12"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 opacity-10">
                  <motion.div 
                    className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
                    animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"
                    animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                      <Sparkles className="w-4 h-4" />
                      AI-Powered
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                      AI Recruiter View
                    </h3>
                    <p className="text-primary-foreground/70 mb-6">
                      Get an instant assessment of my profile with simulated ATS scoring, skill analysis, and fit evaluation for Associate Product Designer roles.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="accent" size="lg" asChild>
                        <Link to="/ai-recruiter">
                          Try AI Analysis
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                  
                  <div className="hidden lg:flex justify-end">
                    <motion.div 
                      className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="text-accent text-xl font-bold">87</span>
                        </div>
                        <div>
                          <div className="text-primary-foreground font-medium">ATS Score</div>
                          <div className="text-primary-foreground/60 text-sm">High Match</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-accent rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "87%" }}
                            transition={{ duration: 1, delay: 0.8 }}
                          />
                        </div>
                        <div className="text-primary-foreground/60 text-xs">
                          Strong product design fundamentals
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
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Core Competencies
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Focused on product thinking with a strong foundation in research, design systems, and user-centered workflows.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'User Research', items: ['User Interviews', 'Usability Testing', 'Journey Mapping'], icon: '🔍' },
                { title: 'UX Design', items: ['Information Architecture', 'Wireframing', 'Prototyping'], icon: '✏️' },
                { title: 'UI Design', items: ['Visual Design', 'Design Systems', 'Responsive Design'], icon: '🎨' },
                { title: 'Tools', items: ['Figma', 'Miro', 'Notion'], icon: '🛠️' },
              ].map((skill, index) => (
                <ScrollReveal key={skill.title} delay={index * 0.1}>
                  <motion.div 
                    className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="text-3xl mb-4">{skill.icon}</div>
                    <h3 className="font-semibold text-foreground mb-3">{skill.title}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Index;
