import React, { useState } from "react";

export const Expense: React.FC = () => {
  const [type, setType] = useState<0 | 1>(0);
  let categories: string[] = JSON.parse(
    localStorage.getItem("categories") || "[]"
  );

  return (
    <div className="expense">
      <div className="type">
        <label>Type</label>
        <div className="footer">
          <button
            className={type === 0 ? "selected" : ""}
            onClick={() => setType(0)}
          >
            Cash In
          </button>
          <button
            className={type === 1 ? "selected" : ""}
            onClick={() => setType(1)}
          >
            Cash Out
          </button>
        </div>
      </div>
      <div className="category">
        <label>Category</label>
        <select>
          {categories?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount</label>
        <input type="number" />
      </div>
      <div>
        <label>Date</label>
        <input type="date" />
      </div>
      <div>
        <label>Description</label>
        <textarea/>
      </div>
    </div>
  );
};
