import React from "react";

type Variant = "solid" | "ghost" | "outline";
type Size = "md" | "icon" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = "solid", size = "md", className = "", children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<Variant, string> = {
    solid: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-orange-500",
    outline: "bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-orange-500",
  };
  const sizes: Record<Size, string> = {
    md: "h-10 px-4 py-2",
    icon: "h-10 w-10",
    lg: "h-12 px-6",
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}


