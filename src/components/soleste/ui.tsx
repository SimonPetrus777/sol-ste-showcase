import { type ReactNode } from "react";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-2xl tracking-tight text-chocolate ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      Sol<span className="italic">é</span>ste
      <span className="ml-1 text-gold">·</span>
      <span className="ml-1 text-[0.65em] uppercase tracking-[0.32em] text-mute">Cakes</span>
    </span>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return <div className={`gold-divider ${className}`} aria-hidden />;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="text-4xl leading-[1.1] text-chocolate sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export function PrimaryButton({
  children,
  href,
  onClick,
  external,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  className?: string;
}) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-sm bg-chocolate px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-300 hover:bg-brown hover:shadow-[0_18px_40px_-20px_rgba(58,36,24,0.6)] ${className}`;
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  href,
  onClick,
  external,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-sm border border-gold/70 bg-transparent px-7 py-3.5 text-sm font-medium tracking-wide text-chocolate transition-all duration-300 hover:bg-gold/10 hover:border-gold ${className}`;
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function GoldArrow() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}