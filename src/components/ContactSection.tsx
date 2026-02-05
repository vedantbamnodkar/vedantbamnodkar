import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="font-display text-4xl md:text-5xl mb-4">Let's Connect</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Open to collaborations, opportunities, and conversations about AI, history, or anything interesting.
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          <ContactCard
            href="mailto:vnbam2502@gmail.com"
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            value="vnbam2502@gmail.com"
            color="coral"
          />
          <ContactCard
            href="https://github.com/gitnodkar"
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
            value="gitnodkar"
            color="foreground"
          />
          <ContactCard
            href="https://in.linkedin.com/in/vedantbamnodkar"
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
            value="vedantbamnodkar"
            color="teal"
          />
          <ContactCard
            href="https://x.com/xnodkar"
            icon={<Twitter className="w-5 h-5" />}
            label="X (Twitter)"
            value="@xnodkar"
            color="foreground"
          />
        </div>

        {/* Footer Quote */}
        <div className="border-t border-border pt-12">
          <p className="font-jp text-2xl text-muted-foreground mb-2">七転び八起き</p>
          <p className="text-sm text-muted-foreground italic">Fall seven times, stand up eight.</p>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  href,
  icon,
  label,
  value,
  color
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) => {
  const colorClasses: Record<string, string> = {
    coral: "group-hover:text-coral",
    teal: "group-hover:text-teal",
    foreground: "group-hover:text-foreground"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 flex items-center gap-4 hover:-translate-y-1"
    >
      <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center transition-colors ${colorClasses[color]}`}>
        {icon}
      </div>
      <div className="text-left flex-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </a>
  );
};

export default ContactSection;
