// Import icons for the plus and close buttons
import { FaPlus } from "react-icons/fa6";
// Import CSS module for the edit form styling
import style from '../css/EditForm.module.css';
import { HiOutlineXMark } from "react-icons/hi2";
// Import React's useContext hook for global state
import { useContext } from "react";
// Import the application context to access state and handlers for editing transactions
import { AppContext } from "../context/context";

/**
 * ConfirmBox Component (Note: Component name is mismatched; this is actually an Edit Form)
 * Renders a modal overlay with a form to update an existing transaction.
 * It is conditionally displayed when isEdit is true.
 * The form dynamically changes category options based on the transaction type (Expense or Income).
 */
export default function ConfirmBox() {

    // Destructure all needed state and handlers from the AppContext
    const {type, changeTypeHandler, setEditAmount, setEdit, editItem, setEditCategory, editDescription, editAmount, editCategory, setEditDescription, isEdit} = useContext(AppContext);
   
    // Render the edit form only when isEdit is true
    return (
        <>
            {isEdit === true && <div className={style.editContainer}>
                {/* Close button to dismiss the edit form */}
                <HiOutlineXMark onClick={()=>setEdit(false)} style={{position:"absolute",top:"15px",right:"15px",color:"#fff",fontSize:"2rem",cursor:"pointer"}} />
                <div className={style.editForm}>
                    <h2>Update Transaction</h2>
                    {/* Form submission triggers the editItem handler from context */}
                    <form action='' onSubmit={editItem}>
                        {/* Input field for description, controlled by editDescription state */}
                        <input type="text" onChange={(event)=> setEditDescription(event.target.value)} value={editDescription} placeholder='Description' />
                        {/* Input field for amount, controlled by editAmount state */}
                        <input type="number" onChange={(event)=> setEditAmount(event.target.value)} value={editAmount} placeholder='Amount' />
                        <div className={style.selection} >
                            <div style={{width:"100%"}}>
                                {/* Dropdown to select transaction type (Expense or Income) */}
                                <select name="" id="" value={type} onChange={(event)=> changeTypeHandler(event.target.value)}>
                                    <option value="Expenses">Expense</option>
                                    <option value="Income">Income</option>
                                </select>
                            </div>
                            {/* Conditional rendering of category dropdown based on the selected type */}
                            {type === 'Expenses' ? <div style={{width:"100%"}}>
                                {/* Category options for Expenses */}
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
                                {/* Category options for Income */}
                                <select name="" id="" onChange={(event)=> setEditCategory(event.target.value)} value={editCategory}>
                                    <option value="">Select catag</option>
                                    <option value="Salary">Salary</option>
                                    <option value="Freelance">Freelance</option>
                                    <option value="Investment">Investment</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>}
                        </div>
                        {/* Submit button to save the updated transaction */}
                        <button type='submit'><FaPlus style={{marginRight:".5rem"}}  /><span>Edit Transaction</span></button>
                    </form>
                </div>
            </div>}
        </>
    )
}