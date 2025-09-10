import React from "react";

type Variant = "solid" | "secondary";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export function Badge({ className = "", variant = "solid", children, ...props }: BadgeProps) {
  const styles: Record<Variant, string> = {
    solid: "bg-orange-100 text-orange-700",
    secondary: "bg-gray-100 text-gray-700",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${styles[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}


