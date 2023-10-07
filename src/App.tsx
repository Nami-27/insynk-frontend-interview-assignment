import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Error, Home } from "./components";
import {
  AddExpense,
  CategoryList,
  EditExpense,
  ExpenseTracking,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route
            path="track-expense"
            element={
              <Layout
                children={<ExpenseTracking />}
                title="Expense Tracking"
                selected={0}
              />
            }
            errorElement={<Error />}
          />
          <Route
            path="add-expense"
            element={
              <Layout
                children={<AddExpense />}
                title="Add Expense"
                selected={0}
              />
            }
            errorElement={<Error />}
          />
          <Route
            path="edit-expense"
            element={
              <Layout
                children={<EditExpense />}
                title="Edit Expense"
                selected={0}
              />
            }
            errorElement={<Error />}
          />
          <Route
            path="list-category"
            element={
              <Layout
                children={<CategoryList />}
                title="Category List"
                selected={1}
              />
            }
            errorElement={<Error />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
