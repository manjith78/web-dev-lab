import React from 'react';
import BudgetCalculator from './BudgetCalculator';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#232323" }}
    >
      <BudgetCalculator />
    </div>
  );
}

export default App;
