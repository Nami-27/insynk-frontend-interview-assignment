import React, { InputHTMLAttributes } from "react";
import "./index.css";

interface Props extends InputHTMLAttributes<any> {
  value: string;
  onChange: (v: any) => void;
  onEnter?: () => void;
}

export const Input: React.FC<Props> = ({
  onChange,
  value,
  onEnter,
  ...props
}) => {
  return (
    <div className="custom-input">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onEnter) {
            onEnter();
          }
        }}
        {...props}
      />
    </div>
  );
};
