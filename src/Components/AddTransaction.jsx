import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context";

const AddTransaction = ({
  transactionText,
  amount,
  settransactionText,
  setAmount,
}) => {
  const { transactions, addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransct = {
      text: transactionText,
      amount: Number(amount),
      id: transactions.length + 1,
    };
    addTransaction(newTransct);
    settransactionText("");
    setAmount("");
  };

  return (
    <div className="addTransaction">
      <h2>Add new Transaction</h2>
      <hr />

      <form action="" className="Transaction-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Text..."
          required
          autoFocus
          value={transactionText}
          onChange={(e) => settransactionText(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Amount..."
          required
          autoFocus
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
