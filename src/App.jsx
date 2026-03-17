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
import Sussessful from './components/Sussessful';

function App() {

  // date 
  const date = new Date();
  const months = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  // static budget
  let budget = 5000;
  const [transaction, setTransaction] = useState([]);                // records
  const [type, setType] = useState('Expenses');                      // expenses || income
  const [description, setDescription] = useState('');                // description
  const [amount, setAmount] = useState('');                          // amount value
  const [category, setCategory] = useState('');                      // category value
  const [activeBox, setActiveBox] = useState(false);                 // show and hide conform box for deletion
  const [itemIndex, setItemIndex] = useState(null);                  // handle item index to delete or edit
  const [isEdit, setEdit] = useState(false);                         // true | false | hide and show eidt form 
  const [isdescription, setisdescription] = useState(false);         // handle field if empty
  const [isamount, setisamount] = useState(false);                   // handle field if empty
  const [iscategory, setiscategory] = useState(false);               // handle field if empty
  const [isActive, setActive] = useState("all");                     // filter | all |income | expenses
  const [isSuccessful, setSuccessful] = useState(null);             // true | false on successful transaction
  const [succMsg, setSuccMsg] = useState('Transaction Successful');             // true | false on successful transaction


  useEffect(()=>{
   const timer = setTimeout(()=>{
      setSuccessful(null);
      console.log(setSuccessful(null));
    },3000);
    
    if(activeBox === true || isEdit === true){
      document.body.classList.add('close');
    }else{
      document.body.classList.remove('close');
    }
    return ()=> clearTimeout(timer);
  },[activeBox, isEdit, isSuccessful]);

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
    if(!description || description === ' '){
      setisdescription(true);
      setSuccessful(false);
      setSuccMsg("Field is required");
      return;
    }
    if(!amount || amount === ' '){
      setisamount(true);
      setSuccessful(false);
      setSuccMsg("Field is required");
      return;
    }
    
    if(!category || category === ' '){
      setiscategory(true);
      setSuccessful(false);
      setSuccMsg("Field is required");
      return;
    }
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
    setType("Expenses");
    setCategory("");
    setSuccessful(true);
    setSuccMsg("Transaction Successful");

  }

  // remove error msg on focus
  const removeError = () => {
      setisdescription(false);
      setisamount(false);
      setiscategory(false);
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
    setType("Expenses");
    setEditDescription("");
    setEditAmount("");
    setEditCategory("");
  }


    const filterButtonHandler = (value) =>{
        setActive(value);
        
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
            <FormSidebar type = {type} changeTypeHandler = {changeTypeHandler} setDescription={setDescription} description={description} amount ={amount} setAmount={setAmount} category = {category}  setCategory ={setCategory} addTransactionHandler ={addTransactionHandler} isdescription={isdescription} isamount={isamount} iscategory={iscategory} removeError={removeError} isActive={isActive} setActive = {setActive} filterButtonHandler={filterButtonHandler}/>
          </div>
        </section>
      <TransactionRecords transaction={transaction} type={type} showConfirmBox={showConfirmBox} showEditForm={showEditForm}/>
      </main>
      {activeBox === true && <ConfirmBox deleteItem={deleteItem} hideConfirmBox={hideConfirmBox} /> }
      {isEdit === true && <EditForm type = {type} changeTypeHandler = {changeTypeHandler} editDescription = {editDescription} editAmount ={editAmount} editCategory = {editCategory} setEditDescription ={setEditDescription} setEditAmount = {setEditAmount} setEditCategory ={setEditCategory} editItem = {editItem} setEdit={setEdit}/>}
      <Sussessful succMsg={succMsg} isSuccessful={isSuccessful}/>
    </>
  )
}
export default App
