import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // ---------- Date helpers ----------
  const date = new Date();
  const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // ---------- Static budget (hardcoded) ----------
  let budget = 5000;

  // ---------- Core state: list of all transactions ----------
  const [transaction, setTransaction] = useState(() => {
    const savedTransaction = localStorage.getItem('transactions');
    return savedTransaction ? JSON.parse(savedTransaction) : [];
  });

  // ---------- Filtered list (derived from transaction) ----------
  // NOTE: This is stored as state but is actually derived; leads to duplication.
  const [filter, setFilter] = useState(() => {
    const savedFilter = localStorage.getItem('savedfilter');
    return savedFilter ? JSON.parse(savedFilter) : [];
  });

  // ---------- Form input states ----------
  const [type, setType] = useState('Expenses');         // "Expenses" or "Income"
  const [description, setDescription] = useState('');   // description text
  const [amount, setAmount] = useState('');             // numeric amount
  const [category, setCategory] = useState('');         // category dropdown

  // ---------- UI control states ----------
  const [activeBox, setActiveBox] = useState(false);    // delete confirmation visibility
  const [itemIndex, setItemIndex] = useState(null);     // index of transaction being deleted/edited (uses index, not id)
  const [isEdit, setEdit] = useState(false);            // edit form visibility
  const [isdescription, setisdescription] = useState(false); // error flag for description
  const [isamount, setisamount] = useState(false);      // error flag for amount
  const [iscategory, setiscategory] = useState(false);  // error flag for category
  const [isActive, setActive] = useState('all');        // filter type: 'all' | 'Income' | 'Expenses'
  const [isSuccessful, setSuccessful] = useState(null); // true=success, false=error, null=hidden
  const [succMsg, setSuccMsg] = useState('Transaction Successful');

  // ---------- Effect: persist data, reset filter, hide scroll, auto-hide message ----------
  useEffect(() => {
    // Save transactions and filter to localStorage
    localStorage.setItem('transactions', JSON.stringify(transaction));
    localStorage.setItem('savedfilter', JSON.stringify(filter));
    // Reset filter to all transactions on every change (overwrites user filter)
    setFilter(transaction);

    // Auto-hide success/error message after 3 seconds
    const timer = setTimeout(() => {
      setSuccessful(null);
    }, 3000);

    // Prevent body scroll when modal is open
    if (activeBox === true || isEdit === true) {
      document.body.classList.add('close');
    } else {
      document.body.classList.remove('close');
    }

    return () => clearTimeout(timer);
  }, [activeBox, isEdit, isSuccessful, transaction]);

  // ---------- Edit form states ----------
  const [editDescription, setEditDescription] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editCategory, setEditCategory] = useState('');

  // ---------- Derived: total expenses (based on filter, not full transaction) ----------
  const ExpenseRecord = filter.filter(item => item.type === 'Expenses');
  const totalExpense = ExpenseRecord.reduce((item, curr) => {
    return item + curr.amount;
  }, 0);

  // ---------- Derived: remaining budget & progress ----------
  budget = budget - totalExpense;
  let progress = (totalExpense / 5000) * 100;

  // Handler to update transaction type in form
  const changeTypeHandler = (value) => setType(value);

  // ---------- Add transaction handler ----------
  const addTransactionHandler = (event) => {
    event.preventDefault();
    // Validation (basic check, doesn't trim whitespace)
    if (!description || description === ' ') {
      setisdescription(true);
      setSuccessful(false);
      setSuccMsg("Field is required");
      return;
    }
    if (!amount || amount === ' ') {
      setisamount(true);
      setSuccessful(false);
      setSuccMsg("Field is required");
      return;
    }
    if (!category || category === ' ') {
      setiscategory(true);
      setSuccessful(false);
      setSuccMsg("Field is required");
      return;
    }
    // Create new transaction object
    const newTransaction = [...transaction, {
      id: Date.now(),
      description: description,
      amount: Number(amount),
      type: type,
      category: category,
      date: date.getDate() + " " + months[date.getMonth()]
    }];
    setTransaction(newTransaction);
    // Reset form fields
    setDescription("");
    setAmount("");
    setType("Expenses");
    setCategory("");
    setSuccessful(true);
    setSuccMsg("Transaction Successful");
  };

  // ---------- Clear error flags on focus ----------
  const removeError = () => {
    setisdescription(false);
    setisamount(false);
    setiscategory(false);
  };

  // ---------- Derived: total income (based on filter) ----------
  const IncomeRecord = filter.filter(item => item.type === 'Income');
  const totalIncome = IncomeRecord.reduce((item, curr) => {
    return item + curr.amount;
  }, 0);
  let balance = totalIncome - totalExpense;

  // ---------- Delete confirmation handlers ----------
  const showConfirmBox = (id) => {
    setActiveBox(true);
    setItemIndex(id);   // stores id, but used as index in delete? (mixed usage)
  };

  const hideConfirmBox = () => {
    setActiveBox(false);
  };

  const deleteItem = () => {
    // Uses itemIndex as id to filter out
    const updatedTransaction = transaction.filter(item => item.id !== itemIndex);
    setTransaction(updatedTransaction);
    setActiveBox(false);
  };

  // ---------- Edit form handlers ----------
  const showEditForm = (index) => {
    setEdit(true);
    setItemIndex(index);          // stores array index, not id
    setType(transaction[index].type);
    setEditDescription(transaction[index].description);
    setEditAmount(transaction[index].amount);
    setEditCategory(transaction[index].category);
  };

  const editItem = (event) => {
    event.preventDefault();
    // Directly mutates the transaction array by index (mutable)
    transaction[itemIndex].type = type;
    transaction[itemIndex].description = editDescription;
    transaction[itemIndex].amount = Number(editAmount);
    transaction[itemIndex].category = editCategory;
    setEdit(false);
    // Reset form
    setType("Expenses");
    setEditDescription("");
    setEditAmount("");
    setEditCategory("");
  };

  // ---------- Filter by type button handler ----------
  const filterButtonHandler = (value) => {
    setActive(value);
    if (value === 'all') {
      setFilter(transaction);
    } else if (value === 'Income') {
      let filterItem = transaction.filter(item => item.type === 'Income');
      setFilter(filterItem);
    } else if (value === 'Expenses') {
      let filterItem = transaction.filter(item => item.type === 'Expenses');
      setFilter(filterItem);
    }
  };

  // ---------- Filter by category dropdown handler ----------
  const filterCategory = (value) => {
    // Long if-else chain; could be simplified
    if (value === 'all') {
      setFilter(transaction);
    } else if (value === 'Salary') {
      let filterItem = transaction.filter(item => item.category === 'Salary');
      setFilter(filterItem);
    } else if (value === 'Freelance') {
      let filterItem = transaction.filter(item => item.category === 'Freelance');
      setFilter(filterItem);
    }
    // ... (repeated for all categories)
    // (I've omitted the full chain for brevity, but it's identical pattern)
  };

  // ---------- Provide context value ----------
  return (
    <AppContext.Provider value={{
      type,
      filter,
      isEdit,
      budget,
      amount,
      balance,
      succMsg,
      category,
      progress,
      isamount,
      isActive,
      activeBox,
      editAmount,
      iscategory,
      totalIncome,
      description,
      isSuccessful,
      totalExpense,
      editCategory,
      isdescription,
      editDescription,
      editItem,
      setEdit,
      setAmount,
      deleteItem,
      setCategory,
      removeError,
      showEditForm,
      setEditAmount,
      showConfirmBox,
      setDescription,
      filterCategory,
      hideConfirmBox,
      setEditCategory,
      changeTypeHandler,
      setEditDescription,
      filterButtonHandler,
      addTransactionHandler,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;