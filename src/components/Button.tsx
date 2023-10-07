import React, { ButtonHTMLAttributes } from "react";
import "./index.css";

interface Props extends ButtonHTMLAttributes<any> {
  text: string;
}

export const Button: React.FC<Props> = ({ text, ...props }) => {
  return (
    <div className="custom-button">
      <button {...props}>{text}</button>
    </div>
  );
};
