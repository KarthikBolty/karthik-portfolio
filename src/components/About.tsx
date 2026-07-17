import { motion } from 'framer-motion';
import { about } from '../data';
import { Section, SectionHeading } from './ui';

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Passionate about building modern web applications."
      />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* narrative */}
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-base leading-relaxed text-noir-muted sm:text-lg"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 gap-4">
          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="gradient-border p-5 text-center"
            >
              <div className="font-heading text-3xl font-bold text-gradient-crimson sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-noir-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
