import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { caseStudies } from '@/data/mockData';

const CaseStudies = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deep dives into product design projects showcasing research, ideation, prototyping, and measurable impact. Each case study includes interactive prototypes and detailed UX decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <ProjectCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
