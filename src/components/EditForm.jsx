import { FaPlus } from "react-icons/fa6";
import style from '../css/EditForm.module.css';

export default function ConfirmBox() {
  return (
    <div className={style.editContainer}>
        <div className={style.editForm}>
        <h2>Update Transaction</h2>
            <form action=''>
                <input type="text" placeholder='Description' />
                <input type="number" placeholder='Amount' />
                <div className={style.selection} >
                    <div style={{width:"100%"}}>
                        <select name="" id="">
                            <option value="Expenses">Expense</option>
                            <option value="Income">Income</option>
                        </select>
                    </div>
                    <div style={{width:"100%"}}>
                        <select name="" id="">
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
                    </div>
                    <div style={{width:"100%"}}>
                        <select name="" id="">
                            <option value="">Select catag</option>
                            <option value="Salary">Salary</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Investment">Investment</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <button type='submit'><FaPlus style={{marginRight:".5rem"}}  /><span>Edit Transaction</span></button>
            </form>
        </div>
    </div>
  )
}
