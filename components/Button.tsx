import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({
  className,
  variant = "primary",
  type = "button",
  children,
  ...props
}: Props) {
  const variants = {
    primary:
      "bg-linear-to-r from-[#ff5f2d] to-[#bf35ff] text-white cursor-pointer",
    secondary:
      "bg-neutral-600 border border-neutral-600 border-dashed  hover:bg-neutral-700 hover:border-neutral-700 cursor-pointer",
  };

  return (
    <button
      className={cn(
        "px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-3xl text-sm font-medium transition justify-center text-shadow-xs",
        variants[variant],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
