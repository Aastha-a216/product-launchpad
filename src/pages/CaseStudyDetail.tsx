import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Clock, User, Wrench, TrendingUp, CheckCircle2, Users, Target, Lightbulb, ArrowUpRight, Github } from 'lucide-react';
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
import chaiMockup from '@/assets/chai-sutta-bar-mockup.png';
import firstclubMockup from '@/assets/firstclub-mockup.png';

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

  const getMockupImage = () => {
    switch (id) {
      case 'chai-sutta-bar':
        return chaiMockup;
      case 'firstclub':
        return firstclubMockup;
      default:
        return null;
    }
  };

  const getCaseStudyContent = () => {
    switch (id) {
      case 'firstclub':
        return {
          overview: "FirstClub offers premium, invite-only experiences for a selective community. This case study project focuses on redesigning the onboarding flow to clearly communicate exclusivity from the first interaction, simplify the journey without losing the premium feel, and improve discovery through curated, interest-based experiences.",
          problem: "For new users, the value of exclusivity is not immediately clear. The onboarding flow feels generic, discovery lacks intent, and users struggle to understand why access is limited and what makes the platform special. There's no early personalization and weak communication of 'members-only' benefits.",
          persona: {
            name: "Ananya Kapoor",
            role: "Young Professional seeking curated experiences",
            pain: "Feels overwhelmed by endless listings and doesn't understand why this platform is different",
            goal: "Find quality, curated experiences that feel exclusive and worth her time",
            quote: "I want to feel like I'm part of something special, not just another subscription app."
          },
          process: [
            { step: "User Research", desc: "Analyzed user behavior patterns and identified key drop-off points in onboarding", icon: "🔍" },
            { step: "Problem Mapping", desc: "Mapped unclear value propositions and weak exclusivity messaging", icon: "🎯" },
            { step: "Solution Design", desc: "Created clear onboarding messaging and interest-based personalization", icon: "✏️" },
            { step: "Visual Exploration", desc: "AI tools used for visual exploration while UX decisions remained human-led", icon: "🎨" },
            { step: "Refinement", desc: "Polished UI with minimal, premium aesthetic and good white space", icon: "✨" },
          ],
          decisions: [
            { title: "Exclusivity-First Messaging", reason: "New users need to immediately understand why access is limited and valuable. We led with membership benefits before showing experiences.", insight: "Clarity builds trust faster than mystery" },
            { title: "Interest-Based Onboarding", reason: "Generic onboarding feels impersonal. Asking about preferences early creates investment and enables personalized discovery.", insight: "Early personalization increases engagement" },
            { title: "Curated Over Endless", reason: "Quality over quantity—showing fewer, better-matched experiences reduces cognitive load and reinforces the premium positioning.", insight: "Constraints enhance perceived value" },
          ],
          features: [
            { name: "Exclusivity Messaging", desc: "Clear explanation of members-only benefits from first screen", icon: "✨" },
            { name: "Interest Selection", desc: "Personalized onboarding based on experience preferences", icon: "🎯" },
            { name: "Curated Discovery", desc: "Intent-based home experience, not endless listings", icon: "🏠" },
            { name: "Experience Details", desc: "Screens that reinforce limited access and special value", icon: "🎫" },
            { name: "Membership Benefits", desc: "Clear visualization of what members gain", icon: "👑" },
          ],
          aiExecution: {
            title: "AI-Assisted Visual Exploration",
            approach: "AI tools were used to assist with visual exploration and rapid UI iteration. However, all UX decisions, user flow design, content strategy, and product thinking were driven manually—ensuring the design reflects real product reasoning, not AI-generated patterns.",
            prompts: [
              "Visual exploration for premium, minimal aesthetics",
              "UI component variations for onboarding screens",
              "Layout options for curated experience cards",
            ]
          },
          nextSteps: [
            "User testing with real premium experience seekers",
            "A/B testing exclusivity messaging variants",
            "Expanding personalization beyond interests",
          ],
          cta: "This project reflects how I approach product design—balancing clarity, usability, and business intent."
        };
      case 'chai-sutta-bar':
        return {
          overview: "Chai Sutta Bar is India's beloved kulhad chai brand with 500+ outlets across the country. This self-initiated product case study reimagines their customer loyalty experience—creating a digital layer that turns casual chai drinkers into repeat loyal users through gamification, emotional engagement, and founder-focused analytics.",
          problem: "Offline loyalty is fragmented with no centralized digital identity for frequent customers. There's no emotional retention beyond price-based offers, and founders lack actionable user insights to understand customer behavior and drive repeat visits.",
          persona: {
            name: "Vikram Arora",
            role: "Daily Chai Enthusiast - College Student",
            pain: "Visits CSB 3-4 times a week but gets no recognition or rewards for loyalty",
            goal: "Feel valued as a regular customer and get rewarded for consistent visits",
            quote: "I love the vibe here, but there's no reason to not try the chai place next door."
          },
          process: [
            { step: "Brand Immersion", desc: "Studied CSB's brand identity, website, and in-store experience to understand their unique positioning", icon: "☕" },
            { step: "Opportunity Mapping", desc: "Identified gaps in customer retention and digital touchpoints across the chai journey", icon: "🎯" },
            { step: "Concept Design", desc: "Created loyalty system concepts balancing gamification with brand authenticity", icon: "✏️" },
            { step: "AI-Assisted Build", desc: "Used Lovable AI as execution partner with prompt engineering for UX logic constraints", icon: "🤖" },
            { step: "Visual Polish", desc: "Refined UI with earthy colors, chai tones, and subtle micro-interactions", icon: "✨" },
          ],
          decisions: [
            { title: "Limited Rewards", reason: "Too many rewards feel transactional. We designed scarce, meaningful rewards that feel earned—like unlocking achievements.", insight: "Delayed gratification builds emotional investment" },
            { title: "Fraud Prevention", reason: "QR codes and store codes prevent fake check-ins. Time-based cooldowns and location awareness add security layers.", insight: "Trust enables generosity" },
            { title: "Emotion Over Discounts", reason: "CSB sells an experience, not just chai. Rewards focus on exclusive access and recognition rather than percentage discounts.", insight: "Brand loyalty > price loyalty" },
          ],
          features: [
            { name: "Smart Login", desc: "OTP-based authentication with fraud-aware verification", icon: "🔐" },
            { name: "Visit Tracking", desc: "QR scan or store code for seamless check-ins", icon: "📍" },
            { name: "Dynamic Rewards", desc: "Tiered rewards that unlock based on visit patterns", icon: "🎁" },
            { name: "User Wallet", desc: "Progress tracker with earned rewards and milestones", icon: "💰" },
            { name: "Founder Dashboard", desc: "Analytics on visits, retention trends, and customer insights", icon: "📊" },
          ],
          aiExecution: {
            title: "AI + Human Collaboration",
            approach: "Built using Lovable AI as an execution partner—not a decision-maker. AI handled rapid prototyping and code generation while human judgment drove all UX decisions, brand alignment, and strategic trade-offs.",
            prompts: [
              "Constrained reward frequency to prevent abuse",
              "Enforced brand-consistent color palette",
              "Structured gamification logic with clear rules",
            ]
          },
          nextSteps: [
            "Subscription chai passes for power users",
            "Community challenges between regulars",
            "Franchise-level analytics dashboard",
          ]
        };
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

        {/* Context Section with Mockup */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <ScrollReveal>
                  <div>
                    <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">Overview</span>
                    <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                      {content?.overview}
                    </p>
                    <div className="p-8 bg-secondary/30 rounded-2xl border border-border/50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                          <Target className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Design Challenge</h3>
                          <p className="text-muted-foreground text-lg italic">"{study.challenge}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                
                {getMockupImage() && (
                  <ScrollReveal direction="right" delay={0.2}>
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <motion.div 
                        className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 blur-2xl"
                        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <img 
                        src={getMockupImage()!}
                        alt={`${study.title} App Mockup`}
                        className="relative rounded-3xl shadow-2xl max-w-xs mx-auto"
                      />
                    </motion.div>
                  </ScrollReveal>
                )}
              </div>
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

        {/* Interactive Dashboard - Only show for case studies with dashboards */}
        {renderDashboard() && (
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4 lg:px-8">
              <ScrollReveal>
                <div className="mb-10">
                  <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block">Prototype</span>
                  <h2 className="font-display text-display-sm text-foreground">Interactive Dashboard</h2>
                  <p className="text-muted-foreground mt-2">Explore the live prototype with realistic mock data</p>
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
        )}

        {/* Features Section - For case studies with features */}
        {(id === 'chai-sutta-bar' || id === 'firstclub') && content?.features && (
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4 lg:px-8">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">Core Features</span>
                  <h2 className="font-display text-display-sm text-foreground">Platform Capabilities</h2>
                  <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                    Key features designed to create emotional loyalty without disrupting the in-store chai experience
                  </p>
                </div>
              </ScrollReveal>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {content.features.map((feature: { name: string; desc: string; icon: string }, index: number) => (
                  <ScrollReveal key={feature.name} delay={index * 0.1}>
                    <motion.div 
                      className="bg-card rounded-2xl p-6 border border-border/50 text-center h-full group"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="font-display font-semibold text-foreground mb-2">{feature.name}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* AI Execution Section */}
        {(id === 'chai-sutta-bar' || id === 'firstclub') && content?.aiExecution && (
          <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <ScrollReveal>
                  <div className="text-center mb-12">
                    <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">Execution</span>
                    <h2 className="font-display text-display-sm text-foreground">{content.aiExecution.title}</h2>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className={cn(
                    "rounded-2xl p-8 mb-8",
                    id === 'firstclub' 
                      ? "bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-indigo-500/10 border border-violet-500/20" 
                      : "bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-red-500/10 border border-amber-500/20"
                  )}>
                    <p className="text-lg text-foreground leading-relaxed mb-6">
                      {content.aiExecution.approach}
                    </p>
                    <div className="space-y-3">
                      <span className={cn(
                        "text-sm font-semibold uppercase tracking-wider",
                        id === 'firstclub' ? "text-violet-600" : "text-amber-600"
                      )}>
                        {id === 'firstclub' ? 'AI Usage Examples:' : 'Prompt Engineering Examples:'}
                      </span>
                      <ul className="space-y-2">
                        {content.aiExecution.prompts.map((prompt: string, index: number) => (
                          <motion.li 
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle2 className={cn(
                              "w-5 h-5 shrink-0 mt-0.5",
                              id === 'firstclub' ? "text-violet-600" : "text-amber-600"
                            )} />
                            <span>{prompt}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        )}

        {/* What's Next Section */}
        {(id === 'chai-sutta-bar' || id === 'firstclub') && content?.nextSteps && (
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <ScrollReveal>
                  <div className="text-center mb-12">
                    <span className="text-accent font-medium text-sm uppercase tracking-wider mb-3 block">Future Vision</span>
                    <h2 className="font-display text-display-sm text-foreground">What I'd Build Next</h2>
                  </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6">
                  {content.nextSteps.map((step: string, index: number) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <motion.div 
                        className="bg-card rounded-2xl p-6 border border-border/50 text-center"
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <span className="text-accent font-bold">{index + 1}</span>
                        </div>
                        <p className="text-foreground font-medium">{step}</p>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

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

        {/* Case Study CTA - Only for FirstClub */}
        {id === 'firstclub' && content?.cta && (
          <section className="py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <ScrollReveal>
                <div className="max-w-3xl mx-auto text-center">
                  <motion.div
                    className="bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-indigo-500/10 rounded-2xl p-8 border border-violet-500/20"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xl text-foreground font-medium mb-6 italic">
                      "{content.cta}"
                    </p>
                    {study.githubLink && (
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Button variant="outline" size="lg" asChild className="gap-2">
                          <a href={study.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5" />
                            View on GitHub
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

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
