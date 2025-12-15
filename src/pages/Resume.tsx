import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { skills } from '@/data/mockData';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold text-foreground">Resume</h1>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="accent">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <motion.div 
                className="bg-card rounded-2xl p-8 border border-border/50 space-y-8"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-xl font-bold mb-2">Aastha Srivastava</h2>
                  <p className="text-muted-foreground">Associate Product Designer</p>
                  <p className="text-sm text-muted-foreground mt-2">aasthasrivastav627@gmail.com • +91 9151596421</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-muted-foreground">B.Tech in Information Technology</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-semibold text-foreground mb-4">Skills</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(skills).map(([cat, items], catIndex) => (
                      <motion.div 
                        key={cat}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + catIndex * 0.1 }}
                      >
                        <h4 className="text-sm font-medium text-accent uppercase mb-2">{cat}</h4>
                        <div className="flex flex-wrap gap-2">
                          {items.map((s, i) => (
                            <motion.span 
                              key={s} 
                              className="px-2 py-1 bg-secondary rounded text-xs"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + catIndex * 0.1 + i * 0.05 }}
                            >
                              {s}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Resume;
