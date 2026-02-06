import { Brain, Code, Dumbbell, Book, Plane, Film } from "lucide-react";
import { AnimatedSection, StaggerContainer } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-coral to-lavender mx-auto rounded-full" />
        </AnimatedSection>

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-16 space-y-6">
          <AnimatedSection delay={100}>
            <p className="text-lg text-muted-foreground leading-relaxed text-center font-body">
              I'm a <span className="text-primary font-medium">2025 Electronics & Computer Engineering graduate</span> with 
              an insatiable curiosity that spans across technology, culture, and history. My journey in tech focuses on 
              building intelligent systems using AI and machine learning.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed text-center font-body">
              Beyond the code, I'm a <span className="text-coral font-medium">history enthusiast</span> who devours books 
              and documentaries about ancient civilizations, a practitioner of <span className="text-teal font-medium">Lathi-Kathi</span> (a 
              traditional Indian martial art), and a fitness devotee who believes in training both mind and body.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className="text-lg text-muted-foreground leading-relaxed text-center font-body">
              I also embrace the future of development — believing that as coding becomes increasingly automated, 
              skills like <span className="text-lavender font-medium">vibe coding</span> and <span className="text-secondary font-medium">prompt engineering</span> will 
              define the next generation of builders.
            </p>
          </AnimatedSection>
        </div>

        {/* Japanese Journey */}
        <AnimatedSection delay={100} animation="scale">
          <div className="max-w-3xl mx-auto mb-20 bg-background rounded-2xl p-6 shadow-soft border border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jp text-2xl text-primary">日本語</span>
              <h3 className="font-display text-xl">My Japanese Journey</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-body">
              I'm deeply passionate about Japanese language and culture. Having completed my{" "}
              <span className="text-primary font-medium">JLPT N4 certification</span>, I'm now on my journey to achieve N3. 
              From anime and manga to the rich history and traditions, Japan has always fascinated me. 
              Learning the language has opened doors to understanding the culture at a deeper level — 
              <span className="font-jp text-primary"> 一歩一歩</span> (step by step).
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <div id="skills" className="scroll-mt-20 mb-20">
          <AnimatedSection className="text-center mb-12">
            <h3 className="font-display text-3xl mb-4">Skills</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-teal to-coral mx-auto rounded-full" />
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={100} animation="fade-left">
              <SkillCard
                icon={<Brain className="w-6 h-6" />}
                title="AI & Machine Learning"
                skills={["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Transformers", "LangChain", "Hugging Face"]}
                color="coral"
              />
            </AnimatedSection>
            <AnimatedSection delay={200} animation="fade-right">
              <SkillCard
                icon={<Code className="w-6 h-6" />}
                title="LLM & Prompt Engineering"
                skills={["OpenAI API", "RAG", "Vector DBs", "Vibe Coding", "Chain-of-Thought", "Few-Shot Learning"]}
                color="teal"
              />
            </AnimatedSection>
          </div>
        </div>

        {/* Interests */}
        <AnimatedSection className="text-center mb-12">
          <h3 className="font-display text-3xl mb-4">Beyond Code</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-lavender to-gold mx-auto rounded-full" />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4" staggerDelay={100}>
          <InterestCard icon={<Book className="w-5 h-5" />} title="History Nerd" description="Books, films & documentaries" color="gold" />
          <InterestCard icon={<Dumbbell className="w-5 h-5" />} title="Fitness" description="Exercise & Lathi-Kathi" color="coral" />
          <InterestCard icon={<Film className="w-5 h-5" />} title="Cinema" description="Historical films & docs" color="teal" />
          <InterestCard icon={<Plane className="w-5 h-5" />} title="Travel" description="Exploring new places" color="lavender" />
          <InterestCard 
            icon={<span className="font-jp text-lg">日</span>} 
            title="Japanese" 
            description="N4 certified, pursuing N3" 
            color="primary" 
          />
        </StaggerContainer>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  icon, 
  title, 
  skills, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  skills: string[]; 
  color: string;
}) => {
  const colorClasses: Record<string, string> = {
    coral: "bg-coral/10 text-coral",
    teal: "bg-teal/10 text-teal",
    lavender: "bg-lavender/10 text-lavender",
    gold: "bg-gold/10 text-gold",
    mint: "bg-mint/10 text-mint"
  };

  return (
    <div className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 h-full">
      <div className={`w-12 h-12 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h4 className="font-display text-xl mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const InterestCard = ({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  color: string;
}) => {
  const colorClasses: Record<string, string> = {
    coral: "bg-coral/10 text-coral border-coral/20",
    teal: "bg-teal/10 text-teal border-teal/20",
    lavender: "bg-lavender/10 text-lavender border-lavender/20",
    gold: "bg-gold/10 text-gold border-gold/20",
    mint: "bg-mint/10 text-mint border-mint/20",
    peach: "bg-peach/10 text-peach border-peach/20",
    primary: "bg-primary/10 text-primary border-primary/20"
  };

  return (
    <div className={`rounded-xl p-4 border ${colorClasses[color]} transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="font-medium text-foreground">{title}</span>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};

export default AboutSection;
