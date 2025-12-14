import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { caseStudies } from '@/data/mockData';
import profileImage from '@/assets/aastha-profile.jpg';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 opacity-0 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                Open to Associate Product Designer roles
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up stagger-1">
                Hi, I'm <span className="text-accent">Aastha</span>
                <br />
                <span className="text-muted-foreground">Product Designer</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg opacity-0 animate-fade-in-up stagger-2">
                I design intuitive, scalable products for fintech, SaaS, and marketplace startups. I focus on product thinking, UX decisions, systems, dashboards, and workflows.
              </p>

              <div className="flex flex-wrap gap-4 mb-8 opacity-0 animate-fade-in-up stagger-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/case-studies">
                    View My Work
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="subtle" size="lg" asChild>
                  <Link to="/ai-recruiter">
                    AI Recruiter View
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 text-sm opacity-0 animate-fade-in-up stagger-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  B.Tech IT
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  3 Product Case Studies
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-scale-in stagger-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20 scale-110" />
                <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-card shadow-float">
                  <img
                    src={profileImage}
                    alt="Aastha Srivastava - Product Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-elevated p-4 border border-border/50">
                  <div className="text-2xl font-bold text-accent">3+</div>
                  <div className="text-xs text-muted-foreground">Case Studies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Case Studies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real product design work showcasing end-to-end thinking, from research to interactive prototypes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <ProjectCard key={study.id} study={study} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Section Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 lg:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
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
                <Button variant="accent" size="lg" asChild>
                  <Link to="/ai-recruiter">
                    Try AI Analysis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="hidden lg:flex justify-end">
                <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
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
                      <div className="h-full w-[87%] bg-accent rounded-full" />
                    </div>
                    <div className="text-primary-foreground/60 text-xs">
                      Strong product design fundamentals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Core Competencies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Focused on product thinking with a strong foundation in research, design systems, and user-centered workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'User Research', items: ['User Interviews', 'Usability Testing', 'Journey Mapping'], icon: '🔍' },
              { title: 'UX Design', items: ['Information Architecture', 'Wireframing', 'Prototyping'], icon: '✏️' },
              { title: 'UI Design', items: ['Visual Design', 'Design Systems', 'Responsive Design'], icon: '🎨' },
              { title: 'Tools', items: ['Figma', 'Miro', 'Notion'], icon: '🛠️' },
            ].map((skill, index) => (
              <div key={skill.title} className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-300">
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h3 className="font-semibold text-foreground mb-3">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
