import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowDown,
  Download,
  Sparkles,
} from 'lucide-react';

import { profile, typingRoles } from '../data';
import { useTyping } from '../hooks';
import { MagneticButton } from './ui';

const socialIcons: Record<string, any> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export function Hero() {
  const typed = useTyping(typingRoles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24 pb-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-crimson-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-crimson-700/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-8"
        >
          {/* Rotating Ring */}
          <div className="absolute -inset-3 animate-gradient-text rounded-full bg-[linear-gradient(135deg,#C50337,#8B0027,#5A0019,#C50337)] bg-[length:200%_200%] opacity-75 blur-[3px]" />

          {/* Soft Glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#C50337]/20 via-[#FF6B35]/15 to-[#5A0019]/25 blur-2xl animate-pulse-glow" />

          {/* Profile Image */}
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-crimson-500/40 sm:h-44 sm:w-44">
            <img
              src={profile.avatar}
              alt={profile.name}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Crimson Status Dot */}
          <span className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-noir-bg">
            <span className="h-3 w-3 animate-pulse rounded-full bg-[#C50337] shadow-[0_0_12px_rgba(197,3,55,0.9)]" />
          </span>
        </motion.div>

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-crimson-200"
        >
          <Sparkles size={14} className="text-crimson-400" />
          Available for new opportunities
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-heading text-4xl font-bold tracking-tight text-noir-text sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex h-9 items-center font-heading text-lg font-medium text-crimson-300 sm:text-2xl"
        >
          <span>{typed}</span>
          <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-crimson-400 sm:h-7" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-noir-muted sm:text-lg"
        >
          {profile.tagline}
          <br />
          Passionate about creating clean, responsive, and user-friendly web
          applications using Python and modern web technologies.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#projects" variant="primary">
            Explore My Projects
          </MagneticButton>

          <MagneticButton
            href={profile.resumeUrl}
            variant="ghost"
            ariaLabel="Download Resume"
          >
            <Download size={16} />
            Download Resume
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex items-center gap-3"
        >
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.icon] ?? Mail;

            return (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group flex h-11 w-11 items-center justify-center rounded-full glass text-noir-muted transition-all duration-300 hover:-translate-y-1 hover:border-crimson-500/50 hover:text-crimson-300 hover:shadow-glow"
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          delay: 1.2,
          y: {
            repeat: Infinity,
            duration: 2,
          },
        }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-noir-muted transition-colors hover:text-crimson-300 lg:bottom-10"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}