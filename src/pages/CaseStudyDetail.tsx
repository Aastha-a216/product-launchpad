import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Clock, User, Wrench, TrendingUp, CheckCircle2, Users, Target, Lightbulb, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { caseStudies, transactions, dashboardStats, orders, inventory, sellerStats, earnings, shifts, deliveryStats } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { FintechDashboard } from '@/components/case-studies/FintechDashboard';
import { MarketplaceDashboard } from '@/components/case-studies/MarketplaceDashboard';
import { DeliveryDashboard } from '@/components/case-studies/DeliveryDashboard';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!study) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Button asChild>
            <Link to="/case-studies">Back to Case Studies</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const renderDashboard = () => {
    switch (id) {
      case 'fintech-dashboard':
        return <FintechDashboard transactions={transactions} stats={dashboardStats} />;
      case 'marketplace-seller':
        return <MarketplaceDashboard orders={orders} inventory={inventory} stats={sellerStats} />;
      case 'delivery-partner':
        return <DeliveryDashboard earnings={earnings} shifts={shifts} stats={deliveryStats} />;
      default:
        return null;
    }
  };

  const getCaseStudyContent = () => {
    switch (id) {
      case 'fintech-dashboard':
        return {
          overview: "Designed a comprehensive merchant operations dashboard for a growing fintech platform. The solution enabled 10,000+ merchants to track payments, manage settlements, handle refunds, and resolve disputes—all from a single, intuitive interface.",
          problem: "Merchants were struggling with fragmented payment information scattered across multiple systems. This led to delayed settlements, unresolved disputes, and an overwhelming number of support tickets. The existing interface was complex, lacked visual hierarchy, and didn't scale with growing transaction volumes.",
          persona: {
            name: "Priya Sharma",
            role: "Small Business Owner - Café Chain",
            pain: "Spends 2+ hours daily reconciling payments across multiple apps",
            goal: "A single dashboard to track all payment operations at a glance",
            quote: "I just want to know where my money is, without calling support every time."
          },
          process: [
            { step: "Discovery", desc: "Conducted 12 merchant interviews and analyzed 500+ support tickets to identify core pain points", icon: "🔍" },
            { step: "Synthesis", desc: "Mapped pain points to 4 key user journeys: payments, settlements, refunds, and disputes", icon: "📊" },
            { step: "Ideation", desc: "Explored 3 dashboard concepts through low-fidelity wireframes and stakeholder critiques", icon: "✏️" },
            { step: "Prototyping", desc: "Built interactive Figma prototype with real data patterns for authentic testing", icon: "🎨" },
            { step: "Validation", desc: "Ran usability tests with 8 merchants, iterated based on friction points", icon: "✅" },
          ],
          decisions: [
            { title: "Status-first Cards", reason: "Merchants need immediate visibility into pending/failed transactions. We prioritized status indicators over transaction details in the visual hierarchy.", insight: "87% of merchants check transaction status first" },
            { title: "Smart Filtering", reason: "High transaction volumes require powerful filtering without complexity. Progressive disclosure reveals advanced filters only when needed.", insight: "Reduced filter time by 60%" },
            { title: "Contextual Actions", reason: "Reduce clicks by surfacing relevant actions based on transaction state. Failed payments show retry options; pending ones show escalation.", insight: "Cut average task completion by 3 clicks" },
          ]
        };
      case 'marketplace-seller':
        return {
          overview: "Built an intuitive seller operations platform for a multi-category marketplace. The tool focuses on order management, returns handling, and inventory tracking—specifically designed for SMB sellers with varying levels of technical literacy.",
          problem: "Low-tech sellers were abandoning the platform due to complex order management workflows. Return processing took 3x longer than competitors, and inventory stockouts were causing seller revenue loss and customer dissatisfaction.",
          persona: {
            name: "Ramesh Kumar",
            role: "Owner - Family-run Textile Business",
            pain: "Loses orders due to delayed updates and stock mismatches with warehouse",
            goal: "Simple tool to manage orders without needing technical knowledge",
            quote: "I'm good with fabrics, not computers. I need something my staff can use too."
          },
          process: [
            { step: "Field Research", desc: "Shadowed 6 sellers in their shops to observe real workflow challenges and workarounds", icon: "🔍" },
            { step: "Journey Mapping", desc: "Identified 3 core workflows: order processing, returns handling, and inventory management", icon: "📊" },
            { step: "Mobile-First Design", desc: "Designed mobile-first interface for on-the-go management, recognizing many sellers work from phones", icon: "✏️" },
            { step: "Prototyping", desc: "Created click-through prototype with realistic order flows and seller scenarios", icon: "🎨" },
            { step: "Inclusive Testing", desc: "Tested with 10 sellers across different tech-literacy levels and languages", icon: "✅" },
          ],
          decisions: [
            { title: "Visual Order States", reason: "Color-coded status system helps sellers quickly scan pending work. Icons supplement text for lower literacy contexts.", insight: "Order scanning time reduced by 45%" },
            { title: "One-tap Actions", reason: "Reduce cognitive load with single-action buttons for common tasks. Batch actions hidden behind a secondary menu.", insight: "Task errors reduced by 70%" },
            { title: "Proactive Alerts", reason: "Push notifications for low stock and pending returns prevent stockouts and delays before they impact customers.", insight: "Stockouts reduced by 30%" },
          ]
        };
      case 'delivery-partner':
        return {
          overview: "Designed a mobile-first earnings and shift management app for hyperlocal delivery partners. The app focuses on transparent earnings breakdowns, incentive tracking, and flexible shift booking to build partner trust and reduce churn.",
          problem: "Delivery partners lacked clarity on how their earnings were calculated, leading to distrust and confusion. Shift booking was inflexible, and partners couldn't plan their work schedules effectively—contributing to a 40% monthly churn rate.",
          persona: {
            name: "Suresh Kumar",
            role: "Full-time Delivery Partner",
            pain: "Doesn't understand how incentives are calculated or why earnings vary",
            goal: "Clear visibility into earnings and control over work schedule",
            quote: "Sometimes I work more but earn less. I need to understand why."
          },
          process: [
            { step: "Partner Interviews", desc: "Interviewed 15 delivery partners across 3 cities during active delivery shifts", icon: "🔍" },
            { step: "Trust Analysis", desc: "Mapped the earnings journey and identified specific trust gaps and confusion points", icon: "📊" },
            { step: "Explainer Design", desc: "Designed earnings breakdown with incentive explainers and visual progress indicators", icon: "✏️" },
            { step: "Mobile Prototype", desc: "Built mobile prototype with animated earnings flow and interactive shift selection", icon: "🎨" },
            { step: "Field Validation", desc: "Field tested with partners during active shifts to validate in real-world conditions", icon: "✅" },
          ],
          decisions: [
            { title: "Transparent Breakdown", reason: "Show exactly how each component (base, incentives, tips) adds up. Transparency builds trust, even when earnings are lower.", insight: "Trust scores improved by 45%" },
            { title: "Incentive Gamification", reason: "Progress bars and milestone markers motivate partners to complete targets. Clear goals drive engagement.", insight: "Shift completion up 35%" },
            { title: "Flexible Scheduling", reason: "Partners want control—show all available shifts with clear earning potential. Enable cancellation without penalty.", insight: "Booking rate increased 35%" },
          ]
        };
      default:
        return null;
    }
  };

  const content = getCaseStudyContent();

  return (
    <Layout>
      <PageTransition>
        {/* Hero - Immersive */}
        <section 
          ref={heroRef}
          className={cn("relative min-h-[70vh] flex items-end overflow-hidden", study.color)}
        >
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br"
            style={{ y: heroY }}
          >
            <div className={cn("absolute inset-0 bg-gradient-to-br", study.color)} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <motion.div 
              className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.div 
            className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 pt-32"
            style={{ opacity: heroOpacity }}
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-8" asChild>
                <Link to="/case-studies">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All Case Studies
                </Link>
              </Button>
            </motion.div>

            <div className="max-w-4xl">
              {/* Industry Badge */}
              <motion.span 
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {study.industry} Case Study
              </motion.span>
              
              {/* Title */}
              <motion.h1 
                className="font-display text-display-lg lg:text-display-xl text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {study.title}
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                className="text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {study.subtitle}
              </motion.p>

              {/* Meta Info */}
              <motion.div 
                className="flex flex-wrap gap-6 text-white/70"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{study.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{study.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{study.team}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Quick Impact Stats */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {study.impact.map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                    {item.split(' ')[0]}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.split(' ').slice(1).join(' ')}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="mb-16">
                  <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">Overview</span>
                  <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
                    {content?.overview}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="p-8 bg-secondary/30 rounded-2xl border border-border/50 mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">Design Challenge</h3>
                      <p className="text-muted-foreground text-lg italic">"{study.challenge}"</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Problem & Persona */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <ScrollReveal direction="left">
                <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">The Problem</span>
                <h2 className="font-display text-display-sm text-foreground mb-6">Understanding the Pain</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {content?.problem}
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.1}>
                <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">User Persona</span>
                <motion.div 
                  className="bg-card rounded-2xl p-8 border border-border/50 shadow-elevated h-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center">
                      <User className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground text-lg">{content?.persona.name}</div>
                      <div className="text-muted-foreground">{content?.persona.role}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-destructive/5 rounded-xl border border-destructive/10">
                      <span className="text-xs font-semibold text-destructive uppercase tracking-wider">Pain Point</span>
                      <p className="text-foreground mt-1">{content?.persona.pain}</p>
                    </div>
                    <div className="p-4 bg-accent/5 rounded-xl border border-accent/10">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">Goal</span>
                      <p className="text-foreground mt-1">{content?.persona.goal}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic border-l-2 border-accent pl-4">
                    "{content?.persona.quote}"
                  </blockquote>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">Process</span>
                <h2 className="font-display text-display-sm text-foreground">Design Journey</h2>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {content?.process.map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.1}>
                  <motion.div 
                    className="relative h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-card rounded-2xl p-6 border border-border/50 h-full shadow-elegant hover:shadow-elevated transition-shadow">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <div className="w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center mb-3">
                        {index + 1}
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-2">{item.step}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 text-accent/50 text-xl z-10">
                        →
                      </div>
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Dashboard */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
                <div>
                  <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block">Prototype</span>
                  <h2 className="font-display text-display-sm text-foreground">Interactive Dashboard</h2>
                  <p className="text-muted-foreground mt-2">Explore the live prototype with realistic mock data</p>
                </div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="accent" size="lg" asChild className="shadow-glow">
                    <a href={study.figmaLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Open in Figma
                    </a>
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.div 
                className="bg-card rounded-3xl border border-border/50 overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.003 }}
                transition={{ duration: 0.4 }}
              >
                {renderDashboard()}
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Decisions */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">Design Decisions</span>
                <h2 className="font-display text-display-sm text-foreground">Key UX Choices</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Critical design decisions backed by research insights and user feedback
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {content?.decisions.map((decision, index) => (
                <ScrollReveal key={decision.title} delay={index * 0.1}>
                  <motion.div 
                    className="bg-card rounded-2xl p-8 border border-border/50 h-full group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <Lightbulb className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{decision.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{decision.reason}</p>
                    <div className="pt-4 border-t border-border/50">
                      <span className="text-accent text-sm font-medium">📊 {decision.insight}</span>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          {/* Background effects */}
          <motion.div 
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">Outcomes</span>
                <h2 className="font-display text-display-sm text-primary-foreground">Impact & Results</h2>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {study.impact.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div 
                    className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/10 text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-8 h-8 text-accent mx-auto mb-4" />
                    <p className="text-primary-foreground font-semibold text-lg">{item}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Used */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">Tools & Methods</span>
                <h2 className="font-display text-display-sm text-foreground mb-8">Design Toolkit</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {study.tools.map((tool, index) => (
                    <motion.span 
                      key={tool}
                      className="px-5 py-2.5 rounded-full bg-secondary text-foreground font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent) / 0.1)" }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Next Case Study CTA */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-display text-display-sm text-foreground mb-6">Explore More Work</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/case-studies">
                        All Case Studies
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" size="xl" asChild>
                      <Link to="/contact">
                        Get in Touch
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

export default CaseStudyDetail;
