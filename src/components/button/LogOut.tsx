import { ButtonHTMLAttributes } from "react";

export function LogoutButton({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bg-darkGray text-white px-4 py-2 rounded text-2xl align-middle font-semibold hover:opacity-90 transition bg-opacity-75 content-center"
    >
      Log Out
    </button>
  );
}
