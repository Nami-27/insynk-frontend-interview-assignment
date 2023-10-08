import { useState } from "react";
import { ButtonWrapper, Expense } from "../components";
import { ExpenseType } from "../server";

export const AddExpense: React.FC = () => {
  const [values, setValues] = useState<ExpenseType>({
    type: 0,
    amount: undefined,
    category: "",
    date: "",
    description: "",
  });
  return (
    <div className="add-expense">
      <Expense
        values={values}
        setValues={(v, t) => {
          let temp: any = { ...values };
          temp[t] = v;
          setValues(temp);
        }}
      />
      <ButtonWrapper type={0} values={values}/>
    </div>
  );
};
