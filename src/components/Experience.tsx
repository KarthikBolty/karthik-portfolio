import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data';
import { Section, SectionHeading, Tag } from './ui';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Internship Experience"
        subtitle="My journey as a Python Full Stack Intern, building practical web applications and strengthening my development skills."
      />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-crimson-500/60 via-crimson-500/20 to-transparent sm:left-1/2" />

        <div className="space-y-12">
          {experience.map((job, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={`${job.company}-${job.period}`}
                className={`relative flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
              >
                {/* node */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-crimson-500 shadow-glow sm:left-1/2"
                >
                  <span className="h-2 w-2 rounded-full bg-noir-bg" />
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className={`gradient-border w-full p-6 sm:w-[calc(50%-2.5rem)] ${
                    isLeft ? 'sm:mr-auto' : 'sm:ml-auto'
                  }`}
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-noir-muted">
                    <span className="inline-flex items-center gap-1.5 text-crimson-300">
                      <Calendar size={13} /> {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-noir-text">
                    {job.role}
                  </h3>
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-crimson-200">
                    <Briefcase size={14} />
                    {job.company}
                  </div>
                  <p className="text-sm leading-relaxed text-noir-muted">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
