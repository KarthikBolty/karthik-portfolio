import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../data';
import { Section, SectionHeading } from './ui';

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Academics"
        title="Education"
        subtitle="The foundations that shaped how I think about systems and software."
      />

      <div className="relative">
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-crimson-500/60 via-crimson-500/20 to-transparent" />

        <div className="space-y-10">
          {education.map((edu, i) => (
            <div key={edu.degree} className="relative pl-12">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-crimson-500 shadow-glow"
              >
                <span className="h-2 w-2 rounded-full bg-noir-bg" />
              </motion.span>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="gradient-border p-6"
              >
                <div className="mb-3 flex items-center gap-2 text-xs text-crimson-300">
                  <Calendar size={13} /> {edu.period}
                </div>
                <div className="mb-2 flex items-start gap-3">
                  <GraduationCap size={20} className="mt-0.5 shrink-0 text-crimson-400" />
                  <h3 className="font-heading text-lg font-semibold text-noir-text">
                    {edu.degree}
                  </h3>
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-noir-text">{edu.institution}</span>
                  <span className="rounded-full border border-crimson-500/20 bg-crimson-500/5 px-3 py-0.5 text-xs font-semibold text-crimson-200">
                    {edu.grade}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-noir-muted">{edu.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
