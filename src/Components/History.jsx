import React from "react";
import UnitTransaction from "./UnitTransaction";
import { GlobalContext } from "../Context";
import { useContext } from "react";

const History = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions);
  return (
    <div className="history">
      <h2>History</h2>
      <hr />
      {transactions.map((transaction) => {
        return (
          <UnitTransaction transaction={transaction} key={transaction.id} />
        );
      })}
    </div>
  );
};

export default History;
