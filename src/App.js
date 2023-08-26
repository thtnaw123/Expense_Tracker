import "./App.css";
import Balance from "./Components/Balance";
import History from "./Components/History";
import AddTransaction from "./Components/AddTransaction";
import { useState } from "react";
import { GlobalProvider } from "./Context";

function App() {
  const [transactionText, settransactionText] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <GlobalProvider>
      <div className="App">
        <h1>Expense Tracker</h1>
        <AddTransaction
          transactionText={transactionText}
          settransactionText={settransactionText}
          amount={amount}
          setAmount={setAmount}
        />
        <Balance />
        <History />
      </div>
    </GlobalProvider>
  );
}

export default App;
