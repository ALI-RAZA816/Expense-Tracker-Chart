import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import ChartContainer from './components/ChartContainer';
import FormSidebar from './components/FormSidebar';
import Progress from './components/Progress';
import TransactionRecords from './components/TransactionRecords';
import {useState} from 'react';
import ConfirmBox from './components/ConfirmBox';

function App() {

  // date 
  const date = new Date();
  const months = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  // static budget
  let budget = 5000;
  const [transaction, setTransaction] = useState([]);
  const [type, setType] = useState('Expenses'); // expenses || income
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [activeBox, setActiveBox] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);

  // total expenses
  const ExpenseRecord = transaction.filter(item => item.type === 'Expenses');
  const totalExpense = ExpenseRecord.reduce((item, curr) => {
    return item + curr.amount;
  },0);
  // difference
  budget = budget - totalExpense;
  // progress
  let progress = (totalExpense / 5000) * 100;
  // expense || income
  const changeTypeHandler = (value) => setType(value);
  // add transactions
  const addTransactionHandler = (event) =>{
    event.preventDefault();
    const newTransaction = [...transaction,{
      id:Date.now(),
      description: description,
      amount: Number(amount),
      type: type,
      category: category,
      date: date.getDate() +  " " + months[date.getMonth()]
    }]
    setTransaction(newTransaction);
  }

  // filter income record
  const IncomeRecord = transaction.filter(item => item.type === 'Income');
  const totalIncome = IncomeRecord.reduce((item, curr) => {
    return item + curr.amount;
  },0);
  let balance = totalIncome - totalExpense;


  // show confrim box
  
  const showConfirmBox = (id) => {
    setActiveBox(true);
    setItemIndex(id);
  }
  
  // hide confrim box
  const hideConfirmBox = () => {
    setActiveBox(false);
  }
  
  const deleteItem = () => {
    const updatedTransaction = transaction.filter(item => item.id !== itemIndex);
    setTransaction(updatedTransaction);
    setActiveBox(false);
  }
  
  return (
    <>
      {activeBox === true && <ConfirmBox deleteItem={deleteItem} hideConfirmBox={hideConfirmBox} /> }
      <header style={{padding:"0 1rem"}}>
        <Header/>
      </header>
      <main style={{padding:"0 1rem"}}>
        <section className="analyticMain">
          <div className="left">
            <Cards totalExpense = {totalExpense} totalIncome = {totalIncome} balance = {balance}/>
            <ChartContainer/>
            <Progress budget = {budget} totalExpense = {totalExpense} progress = {progress}/>
          </div>
          <div className="right">
            <FormSidebar type = {type} changeTypeHandler = {changeTypeHandler} setDescription={setDescription} description={description} amount ={amount} setAmount={setAmount} category = {category}  setCategory ={setCategory} addTransactionHandler ={addTransactionHandler}/>
          </div>
        </section>
      <TransactionRecords transaction={transaction} type={type} showConfirmBox={showConfirmBox}/>
      </main>
    </>
  )
}

export default App
