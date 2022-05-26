import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses /NewExpenses";


function App() {
  const dummyExpenses = [
    { id:'1', title: "Car Insurance", amount: 4999, date: new Date(2022, 4, 23) },
    { id:'2', title: "Car Fuel", amount: 999, date: new Date(2022, 4, 23) },
    { id:'3', title: "Car Maintenance", amount: 1499, date: new Date(2022, 4, 23) },
    { id:'4', title: "Pizza", amount: 499, date: new Date(2021, 10, 24) },
  ];

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    setExpenses(preExpenses => {
      return [expense , ...preExpenses];
    })
  }

  return (
    <div >
      
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} /> 
    </div>
  );
}

export default App;
