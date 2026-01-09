import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { ScrollReveal } from '@/components/ScrollReveal';
import profileImage from '@/assets/aastha-profile.jpg';
import { motion } from 'framer-motion';
import { Sparkles, Target, Zap, Code, Palette, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = [
    { icon: Target, title: 'Product Thinking', description: 'Understanding business goals and user needs to design solutions that matter.' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating intuitive interfaces with clean aesthetics and purposeful interactions.' },
    { icon: Sparkles, title: 'AI Tools', description: 'Leveraging Lovable, ChatGPT, and Midjourney to accelerate design execution.' },
    { icon: Code, title: 'Design-to-Code', description: 'Understanding React, Tailwind, and how designs translate to production.' },
    { icon: Brain, title: 'User Research', description: 'Conducting research, testing, and iteration based on real user feedback.' },
    { icon: Zap, title: 'Rapid Prototyping', description: 'Moving fast from concept to clickable prototype using AI-assisted workflows.' },
  ];

  const timeline = [
    { year: '2024', title: 'AI-First Design', description: 'Started using AI tools like Lovable to build real, working products faster than traditional workflows.' },
    { year: '2023', title: 'Product Design Focus', description: 'Shifted focus to product design, combining UX research with visual design and prototyping.' },
    { year: '2022', title: 'B.Tech IT', description: 'Pursuing B.Tech in Information Technology, building foundation in tech and design thinking.' },
  ];

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* 3D Background */}
          <motion.div 
            className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle at 30% 30%, hsl(var(--accent) / 0.3), transparent 70%)',
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="relative">
                  <motion.div 
                    className="absolute -inset-4 rounded-[2rem] bg-gradient-accent opacity-20 blur-2xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.img 
                    src={profileImage} 
                    alt="Aastha Srivastava - Product Designer" 
                    className="relative rounded-3xl shadow-elevated w-full max-w-md mx-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollReveal>
              
              <div>
                <ScrollReveal delay={0.1}>
                  <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    AI-Powered Designer
                  </motion.span>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Hi, I'm <span className="gradient-text">Aastha</span>
                  </h1>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Product Designer who uses <span className="text-foreground font-medium">AI as an execution partner</span>. I combine product thinking with modern AI tools to design and ship real, working products faster than traditional workflows.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.3}>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm currently pursuing B.Tech in Information Technology while building case studies for real Indian brands like Chai Sutta Bar and FirstClub. My approach: understand the problem deeply, design with intention, and use AI to bring ideas to life quickly.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.4}>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    I believe in <span className="text-foreground font-medium">human-led, AI-assisted</span> design—where I drive the strategy, UX decisions, and product thinking while using tools like Lovable, ChatGPT, and Midjourney to accelerate execution.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <div className="flex flex-wrap gap-4">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="hero" size="lg" asChild>
                        <Link to="/case-studies">
                          View My Work
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="outline" size="lg" asChild>
                        <Link to="/contact">
                          Get in Touch
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 relative">
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
                  What I Do
                </motion.span>
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-4">
                  Skills & Expertise
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  A blend of product thinking, design skills, and AI fluency.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.title} delay={index * 0.1}>
                  <motion.div 
                    className="bg-card rounded-2xl p-6 border border-border/50 h-full group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 text-accent group-hover:bg-accent/10 transition-colors">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  My Journey
                </motion.span>
                <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-4">
                  How I Got Here
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-2xl mx-auto">
              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} delay={index * 0.15}>
                  <motion.div 
                    className="flex gap-6 mb-8 last:mb-0"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 w-16">
                      <span className="text-accent font-bold text-lg">{item.year}</span>
                    </div>
                    <div className="flex-1 pb-8 border-l-2 border-border/50 pl-6 relative">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
                      <h3 className="font-display font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI Philosophy Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-subtle" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <ScrollReveal>
              <motion.div 
                className="bg-card rounded-[2rem] p-10 lg:p-16 border border-border/50 relative overflow-hidden"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.4 }}
              >
                {/* Background glow */}
                <motion.div 
                  className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="relative z-10 max-w-3xl">
                  <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <Sparkles className="w-4 h-4" />
                    My Philosophy
                  </motion.span>
                  
                  <h3 className="font-display text-display-sm lg:text-display-md text-foreground mb-6">
                    Human-Led, AI-Assisted
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    I don't believe AI replaces designers—it amplifies them. I use AI tools like Lovable, ChatGPT, and Midjourney to execute faster, but the strategy, user understanding, and design decisions are always human.
                  </p>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    This approach lets me deliver real, working products—not just mockups—while maintaining the depth of thought that great design requires.
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default About;