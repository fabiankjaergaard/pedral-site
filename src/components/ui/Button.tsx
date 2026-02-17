import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300";

  const variants = {
    primary:
      "bg-accent text-background px-8 py-4 hover:bg-accent-hover",
    outline:
      "border border-foreground/30 text-foreground px-8 py-4 hover:border-accent hover:text-accent",
    ghost:
      "text-foreground-muted px-0 py-2 hover:text-accent border-b border-transparent hover:border-accent",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
