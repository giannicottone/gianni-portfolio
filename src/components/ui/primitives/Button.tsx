// components/ui/Button.tsx

import { buttonStyles } from "../ButtonStyle";


type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  label,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${buttonStyles} ${className}`}
    >
      {label}
    </button>
  );
}