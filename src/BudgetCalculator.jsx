import React, { useState } from 'react';

function BudgetCalculator() {
  const [income, setIncome] = useState('');
  const [rent, setRent] = useState('');
  const [food, setFood] = useState('');
  const [transport, setTransport] = useState('');
  const [others, setOthers] = useState('');
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleCalculate = () => {
    if (
      income === '' || rent === '' || food === '' || transport === '' || others === '' ||
      Number(income) <= 0 || Number(rent) < 0 || Number(food) < 0 || Number(transport) < 0 || Number(others) < 0
    ) {
      alert('Please enter valid positive numbers for all fields.');
      return;
    }

    const totalExpenses = Number(rent) + Number(food) + Number(transport) + Number(others);
    const remainingBalance = Number(income) - totalExpenses;
    setBalance(remainingBalance);

    if (remainingBalance < 0) {
      setMessage('You are overspending!');
      setMessageColor('text-danger');
    } else {
      setMessage('Good job managing your expenses!');
      setMessageColor('text-success');
    }
  };

  const handleReset = () => {
    setIncome('');
    setRent('');
    setFood('');
    setTransport('');
    setOthers('');
    setBalance(null);
    setMessage('');
  };

  return (
    <div className="bg-dark text-white rounded p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Budget Calculator</h2>
      <div className="mb-3">
        <label className="form-label">Monthly Income:</label>
        <input type="number" className="form-control" value={income}
          onChange={(e) => setIncome(e.target.value)} placeholder="Enter your income" />
      </div>
      <div className="mb-3">
        <label className="form-label">Rent/EMI:</label>
        <input type="number" className="form-control" value={rent}
          onChange={(e) => setRent(e.target.value)} placeholder="Enter rent or EMI" />
      </div>
      <div className="mb-3">
        <label className="form-label">Food Expenses:</label>
        <input type="number" className="form-control" value={food}
          onChange={(e) => setFood(e.target.value)} placeholder="Enter food expenses" />
      </div>
      <div className="mb-3">
        <label className="form-label">Transport Expenses:</label>
        <input type="number" className="form-control" value={transport}
          onChange={(e) => setTransport(e.target.value)} placeholder="Enter transport expenses" />
      </div>
      <div className="mb-3">
        <label className="form-label">Other Expenses:</label>
        <input type="number" className="form-control" value={others}
          onChange={(e) => setOthers(e.target.value)} placeholder="Enter other expenses" />
      </div>
      <div className="d-flex justify-content-between">
        <button onClick={handleCalculate} className="btn btn-primary">Calculate Balance</button>
        <button onClick={handleReset} className="btn btn-secondary">Reset</button>
      </div>
      {balance !== null &&
        <div className="mt-4 text-center">
          <p className={messageColor}>Remaining Balance: {balance}</p>
          <p className={messageColor}>{message}</p>
        </div>
      }
    </div>
  );
}

export default BudgetCalculator;
