import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    // date 
  const date = new Date();
  const months = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  // static budget
  let budget = 5000;
  const [transaction, setTransaction] = useState([]);                // records
  const [filter, setFilter] = useState([]);                          // filter records
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
  const [isActive, setActive] = useState('all');                     // filter | all |income | expenses
  const [isSuccessful, setSuccessful] = useState(null);              // true | false on successful transaction
  const [succMsg, setSuccMsg] = useState('Transaction Successful');  // successful || field is required


  useEffect(()=>{
    setFilter(transaction);
   const timer = setTimeout(()=>{
      setSuccessful(null);
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
  const ExpenseRecord = filter.filter(item => item.type === 'Expenses');
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
  const IncomeRecord = filter.filter(item => item.type === 'Income');
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

      if(value === 'all'){
        setFilter(transaction);
      }else if(value === 'Income'){
        let filterItem = transaction.filter(item=> item.type === 'Income');
        setFilter(filterItem);
      }else if(value === 'Expenses'){
        let filterItem = transaction.filter(item=> item.type === 'Expenses');
        setFilter(filterItem);
      }
  }

  const filterCategory = (value) => {
    if(value === 'all'){
      setFilter(transaction);
    }else if(value === 'Salary'){
      let filterItem = transaction.filter(item=> item.category === 'Salary');
      setFilter(filterItem);
    }
    else if(value === 'Freelance'){
      let filterItem = transaction.filter(item=> item.category === 'Freelance');
      setFilter(filterItem);
    }
    else if(value === 'Investment'){
      let filterItem = transaction.filter(item=> item.category === 'Investment');
      setFilter(filterItem);
    }
    else if(value === 'Other'){
      let filterItem = transaction.filter(item=> item.category === 'Other');
      setFilter(filterItem);
    }
    else if(value === 'Housing'){
      let filterItem = transaction.filter(item=> item.category === 'Housing');
      setFilter(filterItem);
    }
    else if(value === 'Transporation'){
      let filterItem = transaction.filter(item=> item.category === 'Transporation');
      setFilter(filterItem);
    }
    else if(value === 'Food'){
      let filterItem = transaction.filter(item=> item.category === 'Food');
      setFilter(filterItem);
    }
    else if(value === 'Utilities'){
      let filterItem = transaction.filter(item=> item.category === 'Utilities');
      setFilter(filterItem);
    }
    else if(value === 'Entertainment'){
      let filterItem = transaction.filter(item=> item.category === 'Entertainment');
      setFilter(filterItem);
    }
    else if(value === 'Healthcare'){
      let filterItem = transaction.filter(item=> item.category === 'Healthcare');
      setFilter(filterItem);
    }
    else if(value === 'Shopping'){
      let filterItem = transaction.filter(item=> item.category === 'Shopping');
      setFilter(filterItem);
    }
    else if(value === 'Education'){
      let filterItem = transaction.filter(item=> item.category === 'Education');
      setFilter(filterItem);
    }
  }

  return <AppContext.Provider value={{
      totalIncome,
      balance,
      filter,
      totalExpense,
      budget,
      progress,
      type,
      setDescription,
      description,
      amount,
      setAmount,
      category,
      setCategory,
      addTransactionHandler,
      isdescription,
      isamount, 
      iscategory, 
      isActive, 
      removeError, 
      filterButtonHandler, 
      filterCategory, 
      showConfirmBox, 
      showEditForm, 
      deleteItem, 
      hideConfirmBox, 
      changeTypeHandler, 
      editDescription, 
      editAmount,
      editCategory, 
      setEditDescription, 
      setEditAmount, 
      setEditCategory, 
      editItem, 
      setEdit, 
      succMsg, 
      isSuccessful,
      activeBox,
      isEdit

    }}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;