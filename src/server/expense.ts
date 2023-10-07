// Function to add an expense to a category
export function addExpenseToCategory(
  categoryName: string,
  type: string,
  amount: number,
  date: string,
  description: string
): void {
  const storedExpenses: { [key: string]: any[] } = JSON.parse(
    localStorage.getItem("expenses") || "{}"
  );
  if (!storedExpenses[categoryName]) {
    storedExpenses[categoryName] = [];
  }
  const newExpense = { type, amount, date, description };
  storedExpenses[categoryName].push(newExpense);
  localStorage.setItem("expenses", JSON.stringify(storedExpenses));
}

// Function to remove an expense from a category
export function removeExpenseFromCategory(
  categoryName: string,
  expenseIndex: number
): void {
  const storedExpenses: { [key: string]: any[] } = JSON.parse(
    localStorage.getItem("expenses") || "{}"
  );
  if (
    storedExpenses[categoryName] &&
    expenseIndex >= 0 &&
    expenseIndex < storedExpenses[categoryName].length
  ) {
    storedExpenses[categoryName].splice(expenseIndex, 1);
    localStorage.setItem("expenses", JSON.stringify(storedExpenses));
  }
}

// Function to update an expense in a category
export function updateExpenseInCategory(
  categoryName: string,
  expenseIndex: number,
  updatedExpense: {
    type: string;
    amount: number;
    date: string;
    description: string;
  }
): void {
  const storedExpenses: { [key: string]: any[] } = JSON.parse(
    localStorage.getItem("expenses") || "{}"
  );
  if (
    storedExpenses[categoryName] &&
    expenseIndex >= 0 &&
    expenseIndex < storedExpenses[categoryName].length
  ) {
    storedExpenses[categoryName][expenseIndex] = updatedExpense;
    localStorage.setItem("expenses", JSON.stringify(storedExpenses));
  }
}

// Function to list all expenses in a category
export function listAllExpensesInCategory(categoryName: string): any[] {
  const storedExpenses: { [key: string]: any[] } = JSON.parse(
    localStorage.getItem("expenses") || "{}"
  );
  return storedExpenses[categoryName] || [];
}


