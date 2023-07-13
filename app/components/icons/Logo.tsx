import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 100 100"
      className={className}
    >
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="#1E3264"
        strokeWidth="20"
        fill="none"
      />
    </svg>
  );
};

export default Logo;
