import React from "react";
import "../App.css"; // 或者单独拆出 fancy-button.css 来引入

interface FancyButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const FancyButton: React.FC<FancyButtonProps> = ({
  text,
  onClick,
  className = "",
}) => {
  return (
    <button className={`fancy-button ${className}`} onClick={onClick}>
      <div className="text-wrapper">{text}</div>
    </button>
  );
};