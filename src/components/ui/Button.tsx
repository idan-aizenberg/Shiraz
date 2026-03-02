import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 text-sm tracking-wider uppercase rounded-full transition-all duration-300 font-medium";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent/90 active:bg-accent/80",
    outline:
      "border border-accent text-accent hover:bg-accent/5 active:bg-accent/10",
  };

  const classes = `${base} ${variants[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
