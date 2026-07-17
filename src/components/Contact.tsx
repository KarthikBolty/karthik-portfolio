import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

import { profile } from '../data';
import { Section, SectionHeading } from './ui';

export function Contact() {
  return (
    <Section id="contact" className="pb-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="I'm always open to internship opportunities, full-time roles, and collaborations. Feel free to reach out!"
      />

      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="gradient-border flex flex-col gap-8 p-8"
        >
          <div>
            <h3 className="font-heading text-xl font-semibold text-noir-text">
              Let's Connect.
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-noir-muted">
              I'm actively seeking opportunities as a Python Full Stack Developer.
              If you'd like to discuss a project, internship, or full-time opportunity,
              I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 text-noir-muted transition-colors hover:text-crimson-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-crimson-500/10 text-crimson-300">
                <Mail size={18} />
              </span>
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-4 text-noir-muted transition-colors hover:text-crimson-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-crimson-500/10 text-crimson-300">
                <Phone size={18} />
              </span>
              {profile.phone}
            </a>

            <a
                href="https://maps.google.com/?q=Pathanamthitta,Kerala,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-noir-muted transition-colors hover:text-crimson-300"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-crimson-500/10 text-crimson-300">
                  <MapPin size={18} />
                </span>
                {profile.location}
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}