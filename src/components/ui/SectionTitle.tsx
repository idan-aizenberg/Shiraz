interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      <h2 className="font-heading text-3xl md:text-3xl lg:text-4xl font-bold text-text tracking-wide">
        {children}
      </h2>
      <div className="mt-4 w-12 h-px bg-accent" />
    </div>
  );
}
