import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        message: form.message,
      });

      if (error) throw error;

      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    { href: "mailto:aasthasrivastav627@gmail.com", icon: Mail, label: "aasthasrivastav627@gmail.com" },
    { href: "tel:+919151596421", icon: Phone, label: "+91 9151596421" },
    { href: "https://github.com/Aastha-a216", icon: Github, label: "GitHub", external: true },
    { href: "https://www.linkedin.com/in/aastha-srivastava-b85314219/", icon: Linkedin, label: "LinkedIn", external: true },
  ];

  return (
    <Layout>
      <PageTransition>
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <ScrollReveal>
              <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground mb-12">I'm open to Associate Product Designer opportunities. Let's connect!</p>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <ScrollReveal key={link.label} delay={index * 0.1} direction="left">
                    <motion.a 
                      href={link.href} 
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300"
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <link.icon className="w-5 h-5 text-accent" />
                      <span>{link.label}</span>
                    </motion.a>
                  </ScrollReveal>
                ))}
              </div>
              
              <ScrollReveal delay={0.2} direction="right">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    type="text" 
                    placeholder="Your Name" 
                    value={form.name} 
                    onChange={e => setForm({...form, name: e.target.value})} 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent transition-all" 
                    required 
                  />
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    type="email" 
                    placeholder="Your Email" 
                    value={form.email} 
                    onChange={e => setForm({...form, email: e.target.value})} 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent transition-all" 
                    required 
                  />
                  <motion.textarea 
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Your Message" 
                    rows={4} 
                    value={form.message} 
                    onChange={e => setForm({...form, message: e.target.value})} 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-all" 
                    required 
                  />
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="hero" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                      <Send className="w-4 h-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
