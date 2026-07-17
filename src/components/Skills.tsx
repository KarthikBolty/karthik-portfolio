import { motion } from 'framer-motion';
import { skills } from '../data';
import { Section, SectionHeading } from './ui';

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
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: (i % 2) * 0.05,
            }}
          >
            {/* Skill Header */}
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

            {/* Progress Bar */}
            <div
              style={{
                background: '#1A2540',
                height: '10px',
                borderRadius: '999px',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                }}
                style={{
                  height: '100%',
                  borderRadius: '999px',
                  background:
                    'linear-gradient(90deg,#fb7185 0%,#C50337 60%,#9E022B 100%)',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}