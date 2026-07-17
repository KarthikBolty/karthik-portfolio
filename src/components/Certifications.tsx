import { motion } from 'framer-motion';
import {
  Cloud,
  BrainCircuit,
  Layout,
  Cpu,
  Bot,
  Network,
  Award as AwardIcon,
  type LucideIcon,
} from 'lucide-react';
import { certifications } from '../data';
import { Section, SectionHeading } from './ui';

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  BrainCircuit,
  Layout,
  Cpu,
  Bot,
  Network,
};

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        subtitle="Continuous learning, validated by the platforms I build on."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Icon = iconMap[cert.icon] ?? AwardIcon;
          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="gradient-border group flex flex-col p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-crimson-500/10 text-crimson-300 transition-all duration-300 group-hover:bg-crimson-500/20 group-hover:shadow-glow">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="font-heading text-base font-semibold leading-snug text-noir-text">
                {cert.name}
              </h3>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-noir-muted">{cert.issuer}</span>
                <span className="font-semibold text-crimson-300">{cert.year}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
