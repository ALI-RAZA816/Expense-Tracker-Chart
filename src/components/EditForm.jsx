import { FaPlus } from "react-icons/fa6";
import style from '../css/EditForm.module.css';
import { HiOutlineXMark } from "react-icons/hi2";


export default function ConfirmBox({type, changeTypeHandler,setEdit, editDescription, editAmount, editCategory, setEditDescription ,setEditAmount, setEditCategory, editItem}) {
  return (
    <div className={style.editContainer}>
        <HiOutlineXMark onClick={()=>setEdit(false)} style={{position:"absolute",top:"15px",right:"15px",color:"#fff",fontSize:"2rem",cursor:"pointer"}} />
        <div className={style.editForm}>
        <h2>Update Transaction</h2>
            <form action='' onSubmit={editItem}>
                <input type="text" onChange={(event)=> setEditDescription(event.target.value)} value={editDescription} placeholder='Description' />
                <input type="number" onChange={(event)=> setEditAmount(event.target.value)} value={editAmount} placeholder='Amount' />
                <div className={style.selection} >
                    <div style={{width:"100%"}}>
                        <select name="" id="" value={type} onChange={(event)=> changeTypeHandler(event.target.value)}>
                            <option value="Expenses">Expense</option>
                            <option value="Income">Income</option>
                        </select>
                    </div>
                    {type === 'Expenses' ? <div style={{width:"100%"}}>
                        <select name="" id="" onChange={(event)=> setEditCategory(event.target.value)} value={editCategory}>
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
                    </div>:
                    <div style={{width:"100%"}}>
                        <select name="" id="" onChange={(event)=> setEditCategory(event.target.value)} value={editCategory}>
                            <option value="">Select catag</option>
                            <option value="Salary">Salary</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Investment">Investment</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>}
                </div>
                <button type='submit'><FaPlus style={{marginRight:".5rem"}}  /><span>Edit Transaction</span></button>
            </form>
        </div>
    </div>
  )
}
