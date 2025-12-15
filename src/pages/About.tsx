import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { ScrollReveal } from '@/components/ScrollReveal';
import profileImage from '@/assets/aastha-profile.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <motion.img 
                  src={profileImage} 
                  alt="Aastha Srivastava" 
                  className="rounded-3xl shadow-elevated"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </ScrollReveal>
              <div>
                <ScrollReveal delay={0.1}>
                  <h1 className="text-4xl font-bold text-foreground mb-6">About Me</h1>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I'm Aastha Srivastava, an aspiring Product Designer with a B.Tech in Information Technology. I'm passionate about creating intuitive, user-centered products that solve real problems.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    My approach combines research-driven insights with clean, functional design. I focus on understanding user needs, business goals, and technical constraints to create solutions that work for everyone.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm particularly interested in fintech, SaaS, and marketplace products where good design can create meaningful impact at scale.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default About;
