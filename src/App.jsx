import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomesExpenses from "./components/IncomesExpenses";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./components/context/GlobalState";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomesExpenses />
          <History />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
