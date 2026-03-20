import style from '../css/FormSidebar.module.css';
import { FaPlus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";

export default function FormSidebar({type,changeTypeHandler,setDescription, description, amount, setAmount, category, setCategory, addTransactionHandler, isdescription, isamount, iscategory, removeError, isActive, filterCategory, filterButtonHandler,}) {

  return (
    <>
     <div className={style.transaction}>
            <h2>Add Transaction</h2>
            <form action='' onSubmit={addTransactionHandler}>
                <input type="text" className={`${isdescription === true ? `${style.error}`: undefined}`} onInput={(event) => setDescription(event.target.value)} value={description} placeholder='Description' onFocus={removeError} />
                <input type="number" className={`${isamount === true ? `${style.error}`: undefined}`} onInput={(event) => setAmount(event.target.value)} value={amount} placeholder='Amount' onFocus={removeError} />
                <div className={style.selection} >
                    <div style={{width:"100%"}}>
                        <select name="" id="" value={type} onChange={(event)=> changeTypeHandler(event.target.value)}  >
                            <option value="Expenses">Expense</option>
                            <option value="Income">Income</option>
                        </select>
                    </div>
                    {type === "Expenses" ?<div style={{width:"100%"}}>
                        <select name="" id="" className={`${iscategory === true ? `${style.error}`: undefined}`} onFocus={removeError} onChange={(event)=> setCategory(event.target.value)} value={category}>
                            <option value="">Select catag</option>
                            <option value="Housing">Housing</option>
                            <option value="Transporation">Transporation</option>
                            <option value="Food">Food</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Education">Eduction</option>
                            <option value="Other">Other</option>
                        </select>
                    </div> :
                    <div style={{width:"100%"}}>
                        <select name="" id="" className={`${iscategory === true ? `${style.error}`: undefined}`} onFocus={removeError} onChange={(event)=> setCategory(event.target.value)} value={category}>
                            <option value="">Select catag</option>
                            <option value="Salary">Salary</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Investment">Investment</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>}
                </div>
                <button type='submit'><FaPlus style={{marginRight:".5rem"}} /><span>Add Transaction</span></button>
            </form>
        </div>
        <div className={style.filter}>
            <h2><FaFilter style={{color:"#9B87F5"}} />Filters</h2>
            <div>
                <span>Type</span>
                <div className={style.buttons} style={{display:"flex",gap:"20px",margin:"2rem 0 3rem 0"}}>
                    <button className={isActive === 'all' ? `${style.active}` : undefined} onClick={()=> filterButtonHandler('all')}>All</button>
                    <button className={isActive === 'Income' ? `${style.active}` : undefined} onClick={()=> filterButtonHandler('Income')}>Income</button>
                    <button className={isActive === 'Expenses' ? `${style.active}` : undefined} onClick={()=> filterButtonHandler('Expenses')}>Expenses</button>
                </div>
            </div>
            <div>
                <span>Category</span>
                <div>
                    <select name="" id="" onChange={(event)=> filterCategory(event.target.value)}>
                        <option value="all">All Categories</option>
                        <optgroup label='Income'>
                            <option value="Salary">Salary</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Investment">Investment</option>
                            <option value="Other">Other</option>
                        </optgroup>
                        <optgroup label='Expense'>
                            <option value="Housing">Housing</option>
                            <option value="Transporation">Transporation</option>
                            <option value="Food">Food</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Education">Eduction</option>
                            <option value="Other">Other</option>
                        </optgroup>
                    </select>
                </div>
            </div>
        </div> 
    </>
  )
}
