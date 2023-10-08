import { listAllExpenses } from "../server";

interface ExpenseItem {
  type: "in" | "out";
  amount: number;
  date: string;
  description: string;
  category: string;
}

export const ExpenseTracking = () => {
  const data = listAllExpenses();

  const groupExpensesByMonth = (): Record<string, ExpenseItem[]> => {
    const groupedData: Record<string, ExpenseItem[]> = {};
    for (const category in data) {
      data[category].forEach((expense) => {
        const month = new Date(expense.date); // Get the month index (0-11)
        const monthName = month.getMonth() + 1 + "/" + month.getFullYear();
        if (!groupedData[monthName]) {
          groupedData[monthName] = [];
        }
        groupedData[monthName].push({ category, ...expense });
      });
    }

    return groupedData;
  };

  const calculateTotalExpenses = (
    monthData: ExpenseItem[],
    type: "in" | "out"
  ): number => {
    return monthData.reduce((total, expense) => {
      if (expense.type === type) {
        return total + expense.amount;
      }
      return total;
    }, 0);
  };

  const getTotalExpenses = (monthName: string): number => {
    const cashIn = calculateTotalExpenses(groupedData[monthName], "in");
    const cashOut = calculateTotalExpenses(groupedData[monthName], "out");
    return cashIn - cashOut;
  };

  const groupedData = groupExpensesByMonth();

  return (
    <div className="expense-tracking">
      {Object.keys(groupedData).map((monthName) => (
        <div key={monthName} className="month-list">
          <div className="month-total">
            <span className="month">{monthName}</span>
            <span className="total">₹{getTotalExpenses(monthName)}</span>
          </div>
          <div className="list">
            {groupedData[monthName].map((expense, index) => (
              <div key={index} className={expense.type}>
                <span>{expense.category}</span>
                <span>
                  {expense.type === "out" && "-"}₹{expense.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
