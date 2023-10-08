import React, { useState } from "react";
import { ExpenseType } from "../server";

interface Props {
  values: ExpenseType;
  setValues: (
    v: any,
    t: "type" | "category" | "amount" | "date" | "description"
  ) => void;
}

export const Expense: React.FC<Props> = ({ values, setValues }) => {
  let categories: string[] = JSON.parse(
    localStorage.getItem("categories") || "[]"
  );

  return (
    <div className="expense">
      <div className="type">
        <label>Type</label>
        <div className="footer">
          <button
            className={values?.type === 0 ? "selected" : ""}
            onClick={() => setValues(0, "type")}
          >
            Cash In
          </button>
          <button
            className={values?.type === 1 ? "selected" : ""}
            onClick={() => setValues(1, "type")}
          >
            Cash Out
          </button>
        </div>
      </div>
      <div className="category">
        <label>Category</label>
        <select
          value={values?.category}
          onChange={(e) => setValues(e.target.value, "category")}
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={values?.amount || ""}
          onChange={(e) => setValues(Number(e.target.value), "amount")}
          required
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={values?.date}
          onChange={(e) => setValues(e.target.value, "date")}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={values?.description}
          onChange={(e) => setValues(e.target.value, "description")}
        />
      </div>
    </div>
  );
};
