// Import CSS module for styling the form sidebar
import style from '../css/FormSidebar.module.css';
// Import icons: plus for submit button, filter for filter section heading
import { FaPlus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
// Import React's useContext hook to access global state and handlers
import { useContext } from 'react';
// Import the application context
import { AppContext } from '../context/context';

/**
 * FormSidebar Component
 * This component renders the sidebar that contains:
 * 1. A form to add a new transaction (with dynamic category dropdown based on type)
 * 2. A filter section to filter transactions by type and category
 */
export default function FormSidebar() {
    
    // Destructure all needed state, handlers, and validation flags from the AppContext
    const {
        type,                   // Current transaction type: "Expenses" or "Income"
        changeTypeHandler,      // Handler to update the type when dropdown changes
        description,            // Current description input value
        amount,                 // Current amount input value
        setAmount,              // Setter for amount
        category,               // Current selected category
        setCategory,            // Setter for category
        addTransactionHandler,  // Form submit handler to add transaction
        isdescription,          // Boolean flag for description validation error
        isamount,               // Boolean flag for amount validation error
        iscategory,             // Boolean flag for category validation error
        removeError,            // Handler to clear validation errors on focus
        isActive,               // Current active filter type: "all", "Income", or "Expenses"
        filterCategory,         // Handler for category filter dropdown
        filterButtonHandler,    // Handler for type filter buttons
        setDescription          // Setter for description input
    } = useContext(AppContext);

    return (
        <>
            {/* Transaction Form Section */}
            <div className={style.transaction}>
                <h2>Add Transaction</h2>
                {/* Form to add a new transaction; triggers addTransactionHandler on submit */}
                <form action='' onSubmit={addTransactionHandler}>
                    {/* Description input - applies error class if validation fails */}
                    <input
                        type="text"
                        className={`${isdescription === true ? `${style.error}` : undefined}`}
                        onInput={(event) => setDescription(event.target.value)}
                        value={description}
                        placeholder='Description'
                        onFocus={removeError}   // Clear error when user focuses
                    />
                    {/* Amount input - applies error class if validation fails */}
                    <input
                        type="number"
                        className={`${isamount === true ? `${style.error}` : undefined}`}
                        onInput={(event) => setAmount(event.target.value)}
                        value={amount}
                        placeholder='Amount'
                        onFocus={removeError}
                    />
                    <div className={style.selection}>
                        {/* Type selection dropdown */}
                        <div style={{ width: "100%" }}>
                            <select
                                name=""
                                id=""
                                value={type}
                                onChange={(event) => changeTypeHandler(event.target.value)}
                            >
                                <option value="Expenses">Expense</option>
                                <option value="Income">Income</option>
                            </select>
                        </div>
                        {/* Dynamic category dropdown based on selected type */}
                        {type === "Expenses" ? (
                            <div style={{ width: "100%" }}>
                                <select
                                    name=""
                                    id=""
                                    className={`${iscategory === true ? `${style.error}` : undefined}`}
                                    onFocus={removeError}
                                    onChange={(event) => setCategory(event.target.value)}
                                    value={category}
                                >
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
                        ) : (
                            <div style={{ width: "100%" }}>
                                <select
                                    name=""
                                    id=""
                                    className={`${iscategory === true ? `${style.error}` : undefined}`}
                                    onFocus={removeError}
                                    onChange={(event) => setCategory(event.target.value)}
                                    value={category}
                                >
                                    <option value="">Select catag</option>
                                    <option value="Salary">Salary</option>
                                    <option value="Freelance">Freelance</option>
                                    <option value="Investment">Investment</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        )}
                    </div>
                    {/* Submit button with plus icon */}
                    <button type='submit'>
                        <FaPlus style={{ marginRight: ".5rem" }} />
                        <span>Add Transaction</span>
                    </button>
                </form>
            </div>

            {/* Filter Section */}
            <div className={style.filter}>
                <h2><FaFilter style={{ color: "#9B87F5" }} />Filters</h2>
                {/* Type filter buttons */}
                <div>
                    <span>Type</span>
                    <div className={style.buttons} style={{ display: "flex", gap: "20px", margin: "2rem 0 3rem 0" }}>
                        <button
                            className={isActive === 'all' ? `${style.active}` : undefined}
                            onClick={() => filterButtonHandler('all')}
                        >
                            All
                        </button>
                        <button
                            className={isActive === 'Income' ? `${style.active}` : undefined}
                            onClick={() => filterButtonHandler('Income')}
                        >
                            Income
                        </button>
                        <button
                            className={isActive === 'Expenses' ? `${style.active}` : undefined}
                            onClick={() => filterButtonHandler('Expenses')}
                        >
                            Expenses
                        </button>
                    </div>
                </div>
                {/* Category filter dropdown */}
                <div>
                    <span>Category</span>
                    <div>
                        <select
                            name=""
                            id=""
                            onChange={(event) => filterCategory(event.target.value)}
                        >
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
    );
}