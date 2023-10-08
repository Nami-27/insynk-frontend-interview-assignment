import React from "react";
import { addExpenseToCategory, updateExpenseInCategory } from "../server";
import { useNavigate } from "react-router-dom";

//type - 0 for add and 1 for update
export const ButtonWrapper: React.FC<{ type: 0 | 1; values: any }> = ({
  type,
  values,
}) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/track-expense");
  };

  const handleConfirm = () => {
    console.log("confirmed values", values);
    switch (type) {
      case 0:
        if (values) {
          addExpenseToCategory(
            values?.category,
            values?.type === 0 ? "in" : "out",
            values?.amount,
            values?.date,
            values?.description
          );
        }
        handleCancel();
        break;
      case 1:
        if (values)
          updateExpenseInCategory(values?.category, values?.index, {
            type: values?.type === 0 ? "in" : "out",
            amount: values?.amount,
            date: values?.date,
            description: values?.description,
          });
        handleCancel();
        break;
    }
  };
  return (
    <div className="expense-buttons">
      <button className="cancel" onClick={handleCancel}>
        Cancel
      </button>
      <button className="confirm" onClick={handleConfirm}>
        {type === 0 ? "Add" : "Update"}
      </button>
    </div>
  );
};
