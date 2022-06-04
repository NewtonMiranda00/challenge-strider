import { ButtonHTMLAttributes, ReactNode } from "react";

interface LogoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customContent?: boolean;
  children?: ReactNode;
}

export function LogoutButton({
  customContent,
  children,
  ...props
}: LogoutButtonProps) {
  return (
    <button
      {...props}
      className="bg-darkGray text-white px-4 py-2 rounded text-2xl align-middle font-semibold hover:opacity-90 transition bg-opacity-75 content-center"
    >
      {customContent ? children : "Log Out"}
    </button>
  );
}
