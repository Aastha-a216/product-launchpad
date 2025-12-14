import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-12">I'm open to Associate Product Designer opportunities. Let's connect!</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <a href="mailto:aasthasrivastav627@gmail.com" className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-colors"><Mail className="w-5 h-5 text-accent" /><span>aasthasrivastav627@gmail.com</span></a>
              <a href="tel:+919151596421" className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-colors"><Phone className="w-5 h-5 text-accent" /><span>+91 9151596421</span></a>
              <a href="https://github.com/Aastha-a216" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-colors"><Github className="w-5 h-5 text-accent" /><span>GitHub</span></a>
              <a href="https://www.linkedin.com/in/aastha-srivastava-b85314219/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-colors"><Linkedin className="w-5 h-5 text-accent" /><span>LinkedIn</span></a>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" required />
              <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" required />
              <textarea placeholder="Your Message" rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent resize-none" required />
              <Button variant="hero" size="lg" type="submit" className="w-full"><Send className="w-4 h-4" />Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
