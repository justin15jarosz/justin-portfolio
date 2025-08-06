import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AppIcon = ({
  href,
  icon,
  label,
  onClick,
  iconClassName = "text-4xl",
}) => {
  const content = (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`w-16 h-16 dark:bg-gray-700 rounded-lg flex items-center justify-center ${iconClassName}`}
      >
        {icon === "github" ? (
          <FaGithub />
        ) : icon === "linkedin" ? (
          <FaLinkedin />
        ) : (
          icon
        )}
      </div>
      <span className="text-xs text-gray-100">{label}</span>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

export default AppIcon;
