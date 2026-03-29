// components/ui/LinkButton.tsx

import { buttonStyles } from "../ButtonStyle";


type LinkButtonProps = {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
};

export default function LinkButton({
  label,
  href,
  external = true,
  className = "",
}: LinkButtonProps) {
  return (
    <a
      href={href}
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className={`${buttonStyles} ${className}`}
    >
      {label}
    </a>
  );
}