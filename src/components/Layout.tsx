import React from "react";
import { useNavigate } from "react-router-dom";

export const Layout: React.FC<{
  children: React.ReactNode;
  button?: React.ReactNode;
  title: string;
  selected: 0 | 1;
}> = ({ children, button, title, selected }) => {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <div className="container">
        <div className={`header ${button ? "with-button" : ""}`}>
          <span>{title}</span>
          {button && button}
        </div>
        <div className="content">{children}</div>
        <div className="footer">
          <button className={selected === 0 ? "selected" : ""} onClick={()=>{navigate('/track-expense')}}>Expense</button>
          <button className={selected === 1 ? "selected" : ""} onClick={()=>{navigate('/list-category')}}>Category</button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
