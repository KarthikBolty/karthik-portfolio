import { motion } from 'framer-motion';
import { skills } from '../data';
import { Section, SectionHeading } from './ui';

const categoryColors: Record<string, string> = {
  Frontend: 'from-rose-400 to-crimson-600',
  Backend: 'from-amber-400 to-crimson-600',
  Database: 'from-teal-300 to-crimson-600',
  Cloud: 'from-sky-300 to-crimson-600',
  'AI/ML': 'from-fuchsia-300 to-crimson-600',
  DevOps: 'from-emerald-300 to-crimson-600',
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Technologies I Work With"
        subtitle="A collection of programming languages, frameworks, databases, and tools I've used to build full-stack web applications."
      />

      <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.05 }}
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-heading text-sm font-semibold text-noir-text">
                  {skill.name}
                </span>
                <span className="rounded-full border border-noir-border bg-noir-card px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-noir-muted">
                  {skill.category}
                </span>
              </div>
              <span className="font-heading text-sm font-semibold text-crimson-300">
                {skill.level >= 85
                  ? 'Advanced'
                  : skill.level >= 70
                  ? 'Intermediate'
                  : 'Familiar'}
                </span>
            </div>
            <div className="neu-inset h-2.5 overflow-hidden rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 1.1, delay: 0.1, ease: 'easeOut' }}
                className={`relative h-full rounded-full bg-gradient-to-r ${
                  categoryColors[skill.category] ?? 'from-rose-400 to-crimson-600'
                }`}
              >
                <span className="absolute inset-0 animate-shimmer rounded-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)] bg-[length:200%_100%]" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
