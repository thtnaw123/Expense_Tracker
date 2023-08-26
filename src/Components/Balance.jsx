import React from "react";
import "./Style/balance.css";
import { GlobalContext } from "../Context";
import { useContext } from "react";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount));


  const Incomes = amounts
    ? amounts
        .filter((amount) => amount > 0)
        .reduce((acc, amount) => (acc += amount), 0)
    : [];
  const Expenses = amounts
    ? amounts
        .filter((amount) => amount < 0)
        .reduce((acc, amount) => (acc += amount), 0) * -1
    : [];

  return (
    <div className="Balance">
      <div className="netBalance">
        <h3>Your Balance </h3>
        <h2>{total}</h2>
      </div>
      <div className="Inc-Exp">
        <h3>
          INCOME <span style={{ color: "blue" }}> $ {Incomes}</span>
        </h3>
        <h3>
          EXPENSE <span style={{ color: "red" }}>$ {Expenses}</span>
        </h3>
      </div>
    </div>
  );
};

export default Balance;
