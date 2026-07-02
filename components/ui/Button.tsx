interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  text,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 
        py-3 
        rounded-lg 
        font-medium 
        transition 
        hover:opacity-90
        ${bgColor}
        ${textColor}
        ${className}
      `}
    >
      {text}
    </button>
  );
}
