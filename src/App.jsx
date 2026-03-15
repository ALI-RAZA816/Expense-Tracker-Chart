import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import ChartContainer from './components/ChartContainer';
import FormSidebar from './components/FormSidebar';
import Progress from './components/Progress';
import TransactionRecords from './components/TransactionRecords';
import {useState} from 'react';

function App() {


  const date = new Date();
  const months = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  let budget = 5000;
  const [transaction, setTransaction] = useState([]);
  const [type, setType] = useState('Expenses'); // expenses || income
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  // total expenses
  const totalExpense = transaction.reduce((item, curr) => {
    return item + curr.amount;
  },0);

  budget = budget - totalExpense;

  let progress = (totalExpense / 5000) * 100;
  console.log(progress);

  const changeTypeHandler = (value) => setType(value);
  const addTransactionHandler = (event) =>{
    event.preventDefault();
    const newTransaction = [...transaction,{
      description: description,
      amount: Number(amount),
      type: type,
      category: category,
      date: date.getDate() +  " " + months[date.getMonth()]
    }]
    setTransaction(newTransaction);
  }

  console.log(transaction)



  return (
    <>
      <Header/>
      <main>
        <section className="analyticMain">
          <div className="left">
            <Cards totalExpense = {totalExpense}/>
            <ChartContainer/>
            <Progress budget = {budget} totalExpense = {totalExpense} progress = {progress}/>
          </div>
          <div className="right">
            <FormSidebar type = {type} changeTypeHandler = {changeTypeHandler} setDescription={setDescription} description={description} amount ={amount} setAmount={setAmount} category = {category}  setCategory ={setCategory} addTransactionHandler ={addTransactionHandler}/>
          </div>
        </section>
      </main>
      <TransactionRecords transaction={transaction}/>
    </>
  )
}

export default App
