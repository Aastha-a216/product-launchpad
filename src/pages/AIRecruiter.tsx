import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Sparkles, CheckCircle2, TrendingUp, Briefcase, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIRecruiter = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const atsScore = 87;
  const strengths = ["Strong product thinking fundamentals", "Dashboard and workflow design expertise", "Research-driven approach", "Tool proficiency (Figma, Miro, Notion)"];
  const skills = ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Information Architecture"];

  return (
    <Layout>
      <PageTransition>
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4" />
                  AI-Powered Analysis
                </motion.div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">AI Recruiter View</h1>
                <p className="text-lg text-muted-foreground">Get an instant assessment of Aastha's profile for Associate Product Designer roles.</p>
              </div>
            </ScrollReveal>

            <AnimatePresence mode="wait">
              {!showAnalysis ? (
                <motion.div 
                  key="button"
                  className="max-w-md mx-auto text-center"
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="hero" size="xl" onClick={() => setShowAnalysis(true)}>
                      <Sparkles className="w-5 h-5" />
                      Run AI Analysis
                    </Button>
                  </motion.div>
                  <p className="text-xs text-muted-foreground mt-4">*Simulated analysis for demonstration</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="analysis"
                  className="max-w-4xl mx-auto space-y-8"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* ATS Score */}
                  <ScrollReveal>
                    <motion.div 
                      className="bg-card rounded-2xl p-8 border border-border/50 text-center"
                      whileHover={{ scale: 1.01 }}
                    >
                      <motion.div 
                        className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                      >
                        <motion.span 
                          className="text-5xl font-bold text-accent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {atsScore}
                        </motion.span>
                      </motion.div>
                      <h2 className="text-2xl font-bold mb-2">ATS Compatibility Score</h2>
                      <p className="text-muted-foreground">High match for Associate Product Designer roles</p>
                      <div className="mt-4 h-3 bg-secondary rounded-full overflow-hidden max-w-md mx-auto">
                        <motion.div 
                          className="h-full bg-accent rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${atsScore}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  </ScrollReveal>

                  {/* Strengths & Skills */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <ScrollReveal delay={0.1} direction="left">
                      <div className="bg-card rounded-2xl p-6 border border-border/50 h-full">
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-accent" />
                          Key Strengths
                        </h3>
                        <ul className="space-y-3">
                          {strengths.map((s, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start gap-2 text-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                              {s}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} direction="right">
                      <div className="bg-card rounded-2xl p-6 border border-border/50 h-full">
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-accent" />
                          Skill Alignment
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((s, i) => (
                            <motion.span 
                              key={s} 
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                            >
                              {s}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Why Strong Fit */}
                  <ScrollReveal delay={0.3}>
                    <motion.div 
                      className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground"
                      whileHover={{ scale: 1.01 }}
                    >
                      <h3 className="text-xl font-bold mb-4">Why I'm a Strong Fit for Associate Product Designer</h3>
                      <p className="leading-relaxed opacity-90">As a B.Tech IT graduate with focused product design training, I bring a unique blend of technical understanding and design thinking. My case studies demonstrate real-world problem-solving across fintech, marketplace, and hyperlocal domains—exactly the industries product startups operate in. I approach design decisions with business context, user research, and measurable outcomes in mind, making me ready to contribute from day one.</p>
                    </motion.div>
                  </ScrollReveal>

                  {/* Chat CTA */}
                  <ScrollReveal delay={0.4}>
                    <div className="text-center">
                      <p className="text-muted-foreground mb-4">Have questions about my profile?</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm">
                        <MessageCircle className="w-4 h-4" />
                        Use the chat button in the bottom-right to ask the AI assistant
                      </div>
                    </div>
                  </ScrollReveal>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default AIRecruiter;
