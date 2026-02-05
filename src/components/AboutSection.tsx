import { Brain, Code, Dumbbell, Book, Music, Plane, Swords, Film } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-coral to-lavender mx-auto rounded-full" />
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-16 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed text-center font-body">
            I'm a <span className="text-primary font-medium">2025 Electronics & Computer Engineering graduate</span> with 
            an insatiable curiosity that spans across technology, culture, and history. My journey in tech focuses on 
            building intelligent systems using AI and machine learning.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-center font-body">
            Beyond the code, I'm a <span className="text-coral font-medium">history enthusiast</span> who devours books 
            and documentaries about ancient civilizations, a practitioner of <span className="text-teal font-medium">Lathi-Kathi</span> (a 
            traditional Indian martial art), and a fitness devotee who believes in training both mind and body.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-center font-body">
            I also embrace the future of development — believing that as coding becomes increasingly automated, 
            skills like <span className="text-lavender font-medium">vibe coding</span> and <span className="text-secondary font-medium">prompt engineering</span> will 
            define the next generation of builders.
          </p>
        </div>

        {/* Japanese Journey */}
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

        {/* Skills Grid */}
        <div id="skills" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 scroll-mt-20">
          <SkillCard
            icon={<Brain className="w-6 h-6" />}
            title="AI & Machine Learning"
            skills={["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Transformers"]}
            color="coral"
          />
          <SkillCard
            icon={<Code className="w-6 h-6" />}
            title="LLM & NLP"
            skills={["LangChain", "OpenAI API", "Hugging Face", "RAG", "Vector DBs"]}
            color="teal"
          />
          <SkillCard
            icon={<Brain className="w-6 h-6" />}
            title="Prompt Engineering"
            skills={["Vibe Coding", "Chain-of-Thought", "Few-Shot Learning", "System Design"]}
            color="lavender"
          />
        </div>

        {/* Interests */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl mb-8">Beyond Code</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <InterestCard icon={<Book className="w-5 h-5" />} title="History Nerd" description="Books, films & documentaries" color="gold" />
          <InterestCard icon={<Dumbbell className="w-5 h-5" />} title="Fitness" description="Daily exercise routine" color="mint" />
          <InterestCard icon={<Swords className="w-5 h-5" />} title="Lathi-Kathi" description="Traditional martial art" color="coral" />
          <InterestCard icon={<Film className="w-5 h-5" />} title="Cinema" description="Historical films & docs" color="teal" />
          <InterestCard icon={<Music className="w-5 h-5" />} title="Singing" description="Musical expression" color="lavender" />
          <InterestCard icon={<Plane className="w-5 h-5" />} title="Travel" description="Exploring new places" color="peach" />
          <InterestCard 
            icon={<span className="font-jp text-lg">日</span>} 
            title="Japanese" 
            description="N4 certified, pursuing N3" 
            color="primary" 
          />
          <InterestCard 
            icon={<span className="text-lg">📚</span>} 
            title="Reading" 
            description="History & culture books" 
            color="gold" 
          />
        </div>
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
    <div className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
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
