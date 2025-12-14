import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Sparkles, FileText, CheckCircle2, TrendingUp, User, Briefcase } from 'lucide-react';
import { useState } from 'react';

const AIRecruiter = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const atsScore = 87;
  const strengths = ["Strong product thinking fundamentals", "Dashboard and workflow design expertise", "Research-driven approach", "Tool proficiency (Figma, Miro, Notion)"];
  const skills = ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Information Architecture"];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"><Sparkles className="w-4 h-4" />AI-Powered Analysis</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">AI Recruiter View</h1>
            <p className="text-lg text-muted-foreground">Get an instant assessment of Aastha's profile for Associate Product Designer roles.</p>
          </div>

          {!showAnalysis ? (
            <div className="max-w-md mx-auto text-center"><Button variant="hero" size="xl" onClick={() => setShowAnalysis(true)}><Sparkles className="w-5 h-5" />Run AI Analysis</Button><p className="text-xs text-muted-foreground mt-4">*Simulated analysis for demonstration</p></div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              {/* ATS Score */}
              <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center"><span className="text-5xl font-bold text-accent">{atsScore}</span></div>
                <h2 className="text-2xl font-bold mb-2">ATS Compatibility Score</h2>
                <p className="text-muted-foreground">High match for Associate Product Designer roles</p>
                <div className="mt-4 h-3 bg-secondary rounded-full overflow-hidden max-w-md mx-auto"><div className="h-full bg-accent rounded-full" style={{ width: `${atsScore}%` }} /></div>
              </div>

              {/* Strengths & Skills */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-semibold mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-accent" />Key Strengths</h3>
                  <ul className="space-y-3">{strengths.map((s, i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />{s}</li>))}</ul>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-semibold mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-accent" />Skill Alignment</h3>
                  <div className="flex flex-wrap gap-2">{skills.map((s) => (<span key={s} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">{s}</span>))}</div>
                </div>
              </div>

              {/* Why Strong Fit */}
              <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">Why I'm a Strong Fit for Associate Product Designer</h3>
                <p className="leading-relaxed opacity-90">As a B.Tech IT graduate with focused product design training, I bring a unique blend of technical understanding and design thinking. My case studies demonstrate real-world problem-solving across fintech, marketplace, and hyperlocal domains—exactly the industries product startups operate in. I approach design decisions with business context, user research, and measurable outcomes in mind, making me ready to contribute from day one.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AIRecruiter;
