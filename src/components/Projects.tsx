import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { projects } from '../data';
import { Section, SectionHeading, Tag } from './ui';

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
        subtitle="A collection of full-stack web applications showcasing my skills in Python, Django, FastAPI, React, and modern web development."
      />

      <div className="space-y-8">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1;
          return (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="gradient-border group overflow-hidden p-0"
            >
              <div
                className={`grid gap-0 md:grid-cols-2 ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                {/* image */}
                <div className="relative h-64 overflow-hidden md:h-auto">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-bg/80 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-semibold text-crimson-200">
                    0{i + 1}
                  </span>
                </div>

                {/* content */}
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <h3 className="font-heading text-2xl font-bold text-noir-text sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-crimson-300">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-noir-muted">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-1.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-noir-text">
                        <Check size={15} className="text-crimson-400" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-crimson-300 transition-colors hover:text-crimson-200"
                  >
                    View on GitHub
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
