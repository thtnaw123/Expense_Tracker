import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context";

const UnitTransaction = ({ transaction }) => {
  const { text, amount } = transaction;
  const listStyle = {
    borderRightWidth: "10px",
    borderRightColor: amount < 0 ? "red" : "green",
  };

  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div className="unitTransaction" style={listStyle}>
      <h4>{text}</h4>
      <h4>${amount}</h4>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="deleteBtn"
      >
        X
      </button>
    </div>
  );
};

export default UnitTransaction;
