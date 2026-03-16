import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import ChartContainer from './components/ChartContainer';
import FormSidebar from './components/FormSidebar';
import Progress from './components/Progress';
import TransactionRecords from './components/TransactionRecords';
import {useEffect, useState} from 'react';
import ConfirmBox from './components/ConfirmBox';
import EditForm from './components/EditForm';

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
  const [isEdit, setEdit] = useState(false);

  useEffect(()=>{
    if(activeBox === true || isEdit === true){
      document.body.classList.add('close');
    }else{
      document.body.classList.remove('close');
    }
  },[activeBox, isEdit])

  // edit states
  const [editDescription, setEditDescription] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editCategory, setEditCategory] = useState('');

  // total expenses
  const ExpenseRecord = transaction.filter(item => item.type === 'Expenses');
  const totalExpense = ExpenseRecord.reduce((item, curr) => {
    return item + curr.amount;
  },0);

  // budget difference | budget progress | changeType = Expenses | Income
  budget = budget - totalExpense;
  let progress = (totalExpense / 5000) * 100;
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
    setDescription("");
    setAmount("");
    setType("");
    setCategory("");

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
  
  // delete item
  const deleteItem = () => {
    const updatedTransaction = transaction.filter(item => item.id !== itemIndex);
    setTransaction(updatedTransaction);
    setActiveBox(false);
  }

  // show Edit form
  const showEditForm = (index) => {
    setEdit(true);
    setItemIndex(index);
    setType(transaction[index].type);
    setEditDescription(transaction[index].description);
    setEditAmount(transaction[index].amount);
    setEditCategory(transaction[index].category);
  }

  const editItem = (event) => {
    event.preventDefault();
    transaction[itemIndex].type = type
    transaction[itemIndex].description = editDescription
    transaction[itemIndex].amount = Number(editAmount);
    transaction[itemIndex].category = editCategory
    setEdit(false);
    setType("");
    setEditDescription("");
    setEditAmount("");
    setEditCategory("");
  }


  return (
    <>
      <header style={{padding:"0 1rem"}}>
        <Header/>
      </header>
      <main style={{padding:"0 1rem"}}>
        <section className="analyticMain">
          <div className="left">
            <Cards totalExpense = {totalExpense} totalIncome = {totalIncome} balance = {balance}/>
            <ChartContainer transaction={transaction} totalIncome={totalIncome} totalExpense={totalExpense}/>
            <Progress budget = {budget} totalExpense = {totalExpense} progress = {progress}/>
          </div>
          <div className="right">
            <FormSidebar type = {type} changeTypeHandler = {changeTypeHandler} setDescription={setDescription} description={description} amount ={amount} setAmount={setAmount} category = {category}  setCategory ={setCategory} addTransactionHandler ={addTransactionHandler}/>
          </div>
        </section>
      <TransactionRecords transaction={transaction} type={type} showConfirmBox={showConfirmBox} showEditForm={showEditForm}/>
      </main>
      {activeBox === true && <ConfirmBox deleteItem={deleteItem} hideConfirmBox={hideConfirmBox} /> }
      {isEdit === true && <EditForm type = {type} changeTypeHandler = {changeTypeHandler} editDescription = {editDescription} editAmount ={editAmount} editCategory = {editCategory} setEditDescription ={setEditDescription} setEditAmount = {setEditAmount} setEditCategory ={setEditCategory} editItem = {editItem} />}
    </>
  )
}

export default App
