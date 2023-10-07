import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="layout home">
      <div className="welcome-page">Welcome to Expense Tracker App</div>
      <div className="buttons">
        <button
          className="expense"
          onClick={() => {
            navigate("/track-expense");
          }}
        >
          Expenses
        </button>
        <button
          className="category"
          onClick={() => {
            navigate("/list-category");
          }}
        >
          Category List
        </button>
      </div>
    </div>
  );
};
