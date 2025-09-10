import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: Props) {
  return (
    <input
      className={`w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
      {...props}
    />
  );
}



