import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Mainpage from "./Mainpage";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState(0);

  return (
    <div>
      <Sidebar />
      <Navbar
        total={total}
        setTotal={setTotal}
        amountToAdd={amountToAdd}
        setAmountToAdd={setAmountToAdd}
      />
      <Mainpage
        total={total}
        setTotal={setTotal}
        amountToAdd={amountToAdd}
        setAmountToAdd={setAmountToAdd}
      />
    </div>
  );
}

export default App;
