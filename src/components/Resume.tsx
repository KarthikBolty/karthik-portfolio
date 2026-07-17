import { motion } from 'framer-motion';
import { Download, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { profile } from '../data';
import { MagneticButton } from './ui';

export function Resume() {
  return (
    <section id="resume" className="section-pad relative mx-auto w-full max-w-6xl px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl"
      >
        {/* animated gradient backdrop */}
        <div className="absolute inset-0 animate-gradient-text bg-[linear-gradient(135deg,#C50337,#77011F,#0B1322,#C50337)] bg-[length:300%_300%] opacity-90" />
        <div className="absolute inset-0 bg-noir-bg/30" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-crimson-400/30 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-crimson-700/40 blur-[80px]" />

        <div className="relative z-10 flex flex-col items-center gap-8 p-10 text-center sm:p-16 md:flex-row md:justify-between md:text-left">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur">
              <FileText size={14} /> Resume
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold text-white sm:text-4xl">
              Grab a copy of my full resume
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              One page covering experience, skills, certifications, and education — ready for your
              ATS pipeline. Always up to date.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:gap-6">
              <span className="inline-flex items-center gap-2">
                <Mail size={15} /> {profile.email}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone size={15} /> {profile.phone}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} /> {profile.location}
              </span>
            </div>
          </div>

          <MagneticButton
            href={profile.resumeUrl}
            variant="primary"
            className="shrink-0 bg-white text-crimson-700 hover:bg-white/90"
            ariaLabel="Download resume PDF"
          >
            <Download size={18} />
            Download PDF
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
