import { Layout } from '@/components/Layout';
import profileImage from '@/assets/aastha-profile.jpg';

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div><img src={profileImage} alt="Aastha Srivastava" className="rounded-3xl shadow-elevated" /></div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-6">About Me</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">I'm Aastha Srivastava, an aspiring Product Designer with a B.Tech in Information Technology. I'm passionate about creating intuitive, user-centered products that solve real problems.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">My approach combines research-driven insights with clean, functional design. I focus on understanding user needs, business goals, and technical constraints to create solutions that work for everyone.</p>
              <p className="text-muted-foreground leading-relaxed">I'm particularly interested in fintech, SaaS, and marketplace products where good design can create meaningful impact at scale.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
