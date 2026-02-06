import { ExternalLink, Github, BookOpen, Mic } from "lucide-react";
import { AnimatedSection, StaggerContainer } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: { label: string; url: string; icon: "deploy" | "github" }[];
  color: string;
  icon: React.ReactNode;
  subProjects?: { name: string; url: string }[];
}

const projects: Project[] = [
  {
    title: "Vedic Text Explorers",
    description:
      "Developed three comprehensive Vedic text exploration platforms (Rigveda, Yajurveda, Atharvaveda) enabling filtering by deity, rishi, meter, keyword, and verse reference. Features include Sanskrit text, transliteration, English translation, audio playback, AI Scholar module with LLM-driven explanations, bookmarks, verse comparison, similarity analysis, and interactive Recharts visualizations.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "LangChain",
      "Tavily API",
      "Recharts",
    ],
    links: [],
    subProjects: [
      { name: "Rigveda", url: "https://rigveda-explorer-gamma.vercel.app" },
      { name: "Yajurveda", url: "https://yajurveda-explorer.vercel.app" },
      { name: "Atharvaveda", url: "https://atharvaveda-explorer.vercel.app" },
    ],
    color: "gold",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Indic Language Audio Recognition",
    description:
      "Built a machine learning pipeline to identify Indian languages from speech audio data, achieving 89% accuracy. Preprocessed audio for six Indic languages, extracted features like MFCC, Chroma and Spectral Centroids. Trained multiple ML models (SVM, Random Forest, ANN) and deployed a Gradio-based web app on Hugging Face Spaces and Raspberry Pi.",
    technologies: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "Gradio",
      "Hugging Face",
      "Raspberry Pi",
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://vnbam-indiclanguagerecognition.hf.space/",
        icon: "deploy",
      },
    ],
    color: "teal",
    icon: <Mic className="w-6 h-6" />,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal to-gold mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            AI/ML projects bridging technology with culture and accessibility
          </p>
        </AnimatedSection>

        {/* Project Cards */}
        <StaggerContainer className="grid gap-8" staggerDelay={200}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const colorClasses: Record<string, string> = {
    coral: "bg-coral/10 text-coral border-coral/20",
    teal: "bg-teal/10 text-teal border-teal/20",
    lavender: "bg-lavender/10 text-lavender border-lavender/20",
    gold: "bg-gold/10 text-gold border-gold/20",
    mint: "bg-mint/10 text-mint border-mint/20",
  };

  const iconBgClasses: Record<string, string> = {
    coral: "bg-coral/10 text-coral",
    teal: "bg-teal/10 text-teal",
    lavender: "bg-lavender/10 text-lavender",
    gold: "bg-gold/10 text-gold",
    mint: "bg-mint/10 text-mint",
  };

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1 border border-border/50">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl ${iconBgClasses[project.color]} flex items-center justify-center shrink-0`}
        >
          {project.icon}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <h3 className="font-display text-2xl md:text-3xl">{project.title}</h3>

          <p className="text-muted-foreground leading-relaxed font-body">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="font-mono text-xs bg-muted hover:bg-muted"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {/* Sub-projects (for Vedic Explorers) */}
            {project.subProjects?.map((sub) => (
              <a
                key={sub.name}
                href={sub.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${colorClasses[project.color]} transition-all duration-300 hover:scale-105 font-medium text-sm`}
              >
                <ExternalLink className="w-4 h-4" />
                {sub.name}
              </a>
            ))}

            {/* Regular links */}
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${colorClasses[project.color]} transition-all duration-300 hover:scale-105 font-medium text-sm`}
              >
                {link.icon === "deploy" ? (
                  <ExternalLink className="w-4 h-4" />
                ) : (
                  <Github className="w-4 h-4" />
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Access note for restricted apps */}
          {project.links.some((l) =>
            l.url.includes("indiclanguagerecognition")
          ) && (
            <p className="text-xs text-muted-foreground italic">
              * Access restricted due to ongoing PhD research
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
