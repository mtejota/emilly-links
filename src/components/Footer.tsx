import { Instagram, Youtube, MessageCircle } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/emillymayra" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1V9.01a6.29 6.29 0 0 0-.79-.05 6.33 6.33 0 1 0 6.33 6.33V9.4a8.16 8.16 0 0 0 4.77 1.52V7.48a4.85 4.85 0 0 1-1-.79Z" />
      </svg>
    ),
    label: "TikTok",
    href: "https://www.tiktok.com/@meninahers",
  },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@emillymayraa" },
  
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Name */}
          <h3 className="font-display text-2xl font-bold text-foreground">
            Emilly <span className="italic font-normal">Mayra</span>
          </h3>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Emilly mayra. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
