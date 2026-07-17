import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { profile, navLinks } from '../data';

const socialIcons: Record<string, any> = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative mt-12 border-t border-noir-border/60 px-5 pb-28 pt-14 sm:px-8 lg:pb-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-500/40 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          {/* brand */}
          <div>
            <button
              onClick={() => scrollTo('home')}
              className="font-heading text-xl font-bold text-gradient-crimson"
            >
              {profile.name}
            </button>
            <div className="mt-2 space-y-1">
              <p className="text-sm text-noir-muted">
                {profile.title}
              </p>

              <p className="text-xs text-noir-muted tracking-wide">
                Python • Django • FastAPI • React
              </p>
            </div>
          </div>

          {/* quick links */}
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-xs font-medium text-noir-muted transition-colors hover:text-crimson-300"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* socials */}
          <div className="flex items-center gap-3">
            {profile.socials.map((s) => {
              const Icon = socialIcons[s.icon] ?? Mail;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full glass text-noir-muted transition-all hover:-translate-y-0.5 hover:text-crimson-300 hover:shadow-glow-sm"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-noir-border/40 pt-6 text-xs text-noir-muted sm:flex-row">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} {profile.name}. Crafted with
            <Heart size={12} className="text-crimson-500" /> & React.
          </p>
          <button
            onClick={() => scrollTo('home')}
            className="group inline-flex items-center gap-1.5 text-noir-muted transition-colors hover:text-crimson-300"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full glass transition-transform group-hover:-translate-y-0.5">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
