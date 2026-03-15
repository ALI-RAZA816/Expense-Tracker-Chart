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

  const budget = 5000;
  const [transaction, setTransaction] = useState([]);
  const [type, setType] = useState('Expenses');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');


  const changeTypeHandler = (value) => setType(value);
  const addTransactionHandler = (event) =>{
    event.preventDefault();
    const newTransaction = [...transaction,{
      description: description,
      amount: amount,
      type: type,
      category: category,
      date: date.getDate() +  " " + months[date.getMonth()]
    }]
    setTransaction(newTransaction);
  }

  return (
    <>
      <Header/>
      <main>
        <section className="analyticMain">
          <div className="left">
            <Cards/>
            <ChartContainer/>
            <Progress budget = {budget}/>
          </div>
          <div className="right">
            <FormSidebar type = {type} changeTypeHandler = {changeTypeHandler} setDescription={setDescription} description={description} amount ={amount} setAmount={setAmount} category = {category}  setCategory ={setCategory} addTransactionHandler ={addTransactionHandler}/>
          </div>
        </section>
      </main>
      <TransactionRecords/>
    </>
  )
}

export default App
