import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  border?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export default function Button({
  text,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  border,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 
        py-3 
        rounded-full 
        font-medium 
        transition 
        hover:opacity-90
        flex items-center justify-center gap-2
        ${bgColor}
        ${textColor}
        ${border || ""}
        ${className}
        ${disabled ? "opacity-70 cursor-not-allowed hover:opacity-70" : ""}
      `}
    >
      {icon && icon}
      {text}
    </button>
  );
}
