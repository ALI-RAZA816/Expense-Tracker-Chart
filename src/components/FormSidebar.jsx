import style from '../css/FormSidebar.module.css';
import { FaPlus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";

export default function FormSidebar() {
  return (
    <>
     <div className={style.transaction}>
            <h2>Add Transaction</h2>
            <form action="">
                <input type="text" placeholder='Description' />
                <input type="number" placeholder='Amount' />
                <div className={style.selection}>
                    <div style={{width:"100%"}}>
                        <select name="" id="">
                            <option selected value="Expense">Expense</option>
                            <option value="Income">Income</option>
                        </select>
                    </div>
                    <div style={{width:"100%"}}>
                        <select name="" id="">
                            <option selected disabled value="">Select catag</option>
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
                    </div>
                </div>
                <button type='submit'><FaPlus /><span>Add Transaction</span></button>
            </form>
        </div>
        <div className={style.filter}>
            <h2><FaFilter style={{color:"#9B87F5"}} /> Filters</h2>
            <div>
                <span>Type</span>
                <div style={{display:"flex",gap:"20px",margin:"2rem 0 3rem 0"}}>
                    <button>All</button>
                    <button>Income</button>
                    <button>Expenses</button>
                </div>
            </div>
            <div>
                <span>Category</span>
                <div>
                    <select name="" id="">
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
