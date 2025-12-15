import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Clock, User, Wrench, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
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
          overview: "Designed a comprehensive merchant operations dashboard for a growing fintech platform, enabling merchants to track payments, manage settlements, handle refunds, and resolve disputes efficiently.",
          problem: "Merchants were struggling with fragmented payment information across multiple systems, leading to delayed settlements, unresolved disputes, and increased support tickets. The existing interface was complex and didn't scale with growing transaction volumes.",
          persona: {
            name: "Priya Sharma",
            role: "Small Business Owner - Café Chain",
            pain: "Spends 2+ hours daily reconciling payments across multiple apps",
            goal: "Single dashboard to track all payment operations"
          },
          process: [
            { step: "Research", desc: "Conducted 12 merchant interviews and analyzed 500+ support tickets" },
            { step: "Synthesis", desc: "Mapped pain points to 4 key user journeys: payments, settlements, refunds, disputes" },
            { step: "Ideation", desc: "Created low-fidelity wireframes for dashboard layouts" },
            { step: "Prototyping", desc: "Built interactive Figma prototype with real data patterns" },
            { step: "Testing", desc: "Ran usability tests with 8 merchants, iterated on feedback" },
          ],
          decisions: [
            { title: "Status-first Cards", reason: "Merchants need immediate visibility into pending/failed transactions" },
            { title: "Smart Filters", reason: "High transaction volumes require powerful filtering without complexity" },
            { title: "Contextual Actions", reason: "Reduce clicks by surfacing relevant actions based on transaction state" },
          ]
        };
      case 'marketplace-seller':
        return {
          overview: "Built an intuitive seller operations platform for a multi-category marketplace, focusing on order management, returns handling, inventory tracking, and performance insights for SMB sellers.",
          problem: "Low-tech sellers were abandoning the platform due to complex order management workflows. Return processing took 3x longer than competitors, and inventory stockouts were causing seller revenue loss.",
          persona: {
            name: "Ramesh Textiles",
            role: "Family-run clothing business",
            pain: "Loses orders due to delayed updates and stock mismatches",
            goal: "Simple tool to manage orders without technical knowledge"
          },
          process: [
            { step: "Research", desc: "Shadowed 6 sellers in their shops, observed workflow challenges" },
            { step: "Synthesis", desc: "Identified 3 core workflows: order processing, returns, inventory" },
            { step: "Ideation", desc: "Designed mobile-first interface for on-the-go management" },
            { step: "Prototyping", desc: "Created click-through prototype with realistic order flows" },
            { step: "Testing", desc: "Tested with 10 sellers across different tech-literacy levels" },
          ],
          decisions: [
            { title: "Visual Order States", reason: "Color-coded status helps sellers quickly scan pending work" },
            { title: "One-tap Actions", reason: "Reduce cognitive load for sellers with limited tech experience" },
            { title: "Stock Alerts", reason: "Proactive notifications prevent stockouts and lost sales" },
          ]
        };
      case 'delivery-partner':
        return {
          overview: "Designed a mobile-first earnings and shift management app for hyperlocal delivery partners, focusing on transparent earnings breakdowns, incentive tracking, and flexible shift booking.",
          problem: "Delivery partners lacked clarity on earnings calculations, leading to distrust. Shift booking was inflexible, and partners couldn't plan their work schedules effectively, causing high churn.",
          persona: {
            name: "Suresh Kumar",
            role: "Full-time delivery partner",
            pain: "Doesn't understand how incentives are calculated",
            goal: "Clear earnings visibility and control over work hours"
          },
          process: [
            { step: "Research", desc: "Interviewed 15 delivery partners across 3 cities" },
            { step: "Synthesis", desc: "Mapped earnings journey and identified trust gaps" },
            { step: "Ideation", desc: "Designed earnings breakdown with incentive explainers" },
            { step: "Prototyping", desc: "Built mobile prototype with animated earnings flow" },
            { step: "Testing", desc: "Field tested with partners during active delivery shifts" },
          ],
          decisions: [
            { title: "Earnings Breakdown", reason: "Transparency builds trust - show exactly how each component adds up" },
            { title: "Incentive Progress", reason: "Gamification motivates partners to complete milestone targets" },
            { title: "Flexible Shifts", reason: "Partners want control - show all options with clear earning potential" },
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
        {/* Hero */}
        <motion.section 
          className={cn("relative py-20 bg-gradient-to-br", study.color)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-8" asChild>
                <Link to="/case-studies">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Case Studies
                </Link>
              </Button>
            </motion.div>

            <div className="max-w-4xl">
              <motion.span 
                className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {study.industry}
              </motion.span>
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {study.title}
              </motion.h1>
              <motion.p 
                className="text-xl text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {study.subtitle}
              </motion.p>

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
                  <Wrench className="w-4 h-4" />
                  <span>{study.tools.join(', ')}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content?.overview}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Problem & Persona */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollReveal direction="left">
                <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {content?.problem}
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.1}>
                <h2 className="text-2xl font-bold text-foreground mb-4">User Persona</h2>
                <motion.div 
                  className="bg-card rounded-2xl p-6 border border-border/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{content?.persona.name}</div>
                      <div className="text-sm text-muted-foreground">{content?.persona.role}</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-medium text-destructive">Pain Point</span>
                      <p className="text-sm text-muted-foreground">{content?.persona.pain}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-accent">Goal</span>
                      <p className="text-sm text-muted-foreground">{content?.persona.goal}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">Design Process</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-5 gap-4">
              {content?.process.map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.1}>
                  <motion.div 
                    className="relative"
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-card rounded-xl p-4 border border-border/50 h-full">
                      <div className="w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center mb-3">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.step}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-border">
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
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Interactive Prototype</h2>
                  <p className="text-muted-foreground">Explore the live dashboard with mock data</p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="accent" asChild>
                    <a href={study.figmaLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View in Figma
                    </a>
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.div 
                className="bg-card rounded-2xl border border-border/50 overflow-hidden"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3 }}
              >
                {renderDashboard()}
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Decisions */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">Key UX Decisions</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {content?.decisions.map((decision, index) => (
                <ScrollReveal key={decision.title} delay={index * 0.1}>
                  <motion.div 
                    className="bg-card rounded-xl p-6 border border-border/50"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{decision.title}</h3>
                    <p className="text-sm text-muted-foreground">{decision.reason}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-primary-foreground mb-8">Impact & Results</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {study.impact.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div 
                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <TrendingUp className="w-8 h-8 text-accent mb-4" />
                    <p className="text-primary-foreground font-medium">{item}</p>
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

export default CaseStudyDetail;
