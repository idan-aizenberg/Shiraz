interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return <hr className={`border-t border-border my-0 ${className}`} />;
}
