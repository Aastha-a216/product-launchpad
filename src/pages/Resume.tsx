import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { skills } from '@/data/mockData';

const Resume = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-foreground">Resume</h1>
            <Button variant="accent"><Download className="w-4 h-4 mr-2" />Download PDF</Button>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border/50 space-y-8">
            <div><h2 className="text-xl font-bold mb-2">Aastha Srivastava</h2><p className="text-muted-foreground">Associate Product Designer</p><p className="text-sm text-muted-foreground mt-2">aasthasrivastav627@gmail.com • +91 9151596421</p></div>
            <div><h3 className="font-semibold text-foreground mb-2">Education</h3><p className="text-muted-foreground">B.Tech in Information Technology</p></div>
            <div><h3 className="font-semibold text-foreground mb-4">Skills</h3><div className="grid md:grid-cols-2 gap-4">{Object.entries(skills).map(([cat, items]) => (<div key={cat}><h4 className="text-sm font-medium text-accent uppercase mb-2">{cat}</h4><div className="flex flex-wrap gap-2">{items.map(s => (<span key={s} className="px-2 py-1 bg-secondary rounded text-xs">{s}</span>))}</div></div>))}</div></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
