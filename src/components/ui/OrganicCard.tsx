interface OrganicCardProps {
  children: React.ReactNode;
  className?: string;
}

export function OrganicCard({ children, className = "" }: OrganicCardProps) {
  return (
    <div
      className={`bg-bg border border-border rounded-3xl p-8 md:p-10 transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
