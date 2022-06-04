import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-brand text-white px-6 py-1 rounded text-2xl align-middle font-semibold hover:opacity-90 transition text-justify"
    >
      {children}
    </button>
  );
}
