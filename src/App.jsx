import React from "react";
import { useState, useEffect } from "react";

const initialData = [
  { id: 1, date: "2026-03-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-03-02", amount: 400, category: "Food", type: "expense" },
  { id: 3, date: "2026-03-03", amount: 800, category: "Shopping", type: "expense" }
];

function App() {
  const [data, setData] = useState(initialData);
  const [role, setRole] = useState("viewer");

  const income = data.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = data.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0);
  const balance = income - expense;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Finance Dashboard ✅</h1>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <h2>Balance: ₹{balance}</h2>
      <h3>Income: ₹{income}</h3>
      <h3>Expense: ₹{expense}</h3>

      <table border="1" style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {role === "admin" && (
        <button onClick={() => alert("Add feature coming!")}>
          Add Transaction
        </button>
      )}
    </div>
  );
}

export default App;
