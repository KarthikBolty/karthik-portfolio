import { motion } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Award,
  GraduationCap,
  FileText,
  Mail,
} from 'lucide-react';

import { navLinks } from '../data';
import { useActiveSection } from '../hooks';

const icons: Record<string, any> = {
  home: Home,
  about: User,
  experience: Briefcase,
  skills: Code2,
  projects: FolderGit2,
  certifications: Award,
  education: GraduationCap,
  resume: FileText,
  contact: Mail,
};

export function Navigation() {
  const active = useActiveSection(navLinks.map((l) => l.id));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      {/* =========================
          Desktop Navigation
      ========================== */}
      <div className="fixed left-0 top-20 z-50 hidden lg:block">
        <motion.nav
          aria-label="Primary"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-strong flex flex-col items-center gap-2 rounded-full py-3 px-2 shadow-card">
            {navLinks.map((link) => {
              const Icon = icons[link.id];
              const isActive = active === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  aria-label={link.label}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-crimson-500/15 text-crimson-300 ring-2 ring-crimson-500 shadow-glow'
                      : 'text-noir-muted hover:bg-white/5 hover:text-noir-text'
                  }`}
                >
                  <Icon size={16} strokeWidth={1.75} />

                  {/* Tooltip */}
                  <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md glass-strong px-2.5 py-1 text-xs font-medium text-noir-text opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {link.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.nav>
      </div>

      {/* =========================
          Mobile Navigation
      ========================== */}
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] max-w-md lg:hidden"
      >
        <div className="glass-strong flex items-center justify-around rounded-full px-2 py-2 shadow-card">
          {navLinks.map((link) => {
            const Icon = icons[link.id];
            const isActive = active === link.id;

            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                aria-label={link.label}
                aria-current={isActive ? 'page' : undefined}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-crimson-500/15 text-crimson-300 ring-2 ring-crimson-500 shadow-glow-sm'
                    : 'text-noir-muted hover:text-noir-text'
                }`}
              >
                <Icon size={18} strokeWidth={1.75} />
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}