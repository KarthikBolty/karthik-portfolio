import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../hooks';

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-crimson-300"
      >
        <span className="h-px w-8 bg-crimson-500" />
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 font-heading text-3xl font-bold tracking-tight text-noir-text sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-base leading-relaxed text-noir-muted"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* ---------- Section wrapper with reveal ---------- */
export function Section({
  id,
  children,
  className = '',
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`section-pad relative mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

/* ---------- Magnetic button ---------- */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useMagnetic<HTMLAnchorElement>(0.25);
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 will-change-transform';
  const styles =
    variant === 'primary'
      ? 'btn-glow'
      : 'glass text-noir-text border border-noir-border hover:border-crimson-500/50 hover:shadow-glow';

  const Comp: any = href ? 'a' : 'button';
  return (
    <Comp
      ref={ref as any}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Comp>
  );
}

/* ---------- Tag chip ---------- */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-crimson-500/20 bg-crimson-500/5 px-3 py-1 text-xs font-medium text-crimson-200">
      {children}
    </span>
  );
}
