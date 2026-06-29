// Import necessary hooks and styles
import { useContext } from 'react';
import style from '../css/Cards.module.css';
// Import icons for income, expense, and balance
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
// Import the global app context to access financial data
import { AppContext } from '../context/context';

/**
 * Cards Component
 * Displays three summary cards: Income, Expense, and Balance.
 * Each card shows the total amount and a descriptive icon.
 * Values are retrieved from the AppContext and formatted with locale string.
 */
export default function Cards() {

    // Destructure financial data from the application context
    const {totalExpense, totalIncome, balance} = useContext(AppContext);

    return (
        <>
            {/* Income Card */}
            <div className={style.amountBox}>
                <div>
                    <span>Income</span>
                    <h2>$ {totalIncome.toLocaleString()}</h2>
                    <p>This month</p>
                </div>
                <div><FaArrowUp style={{color:"#00E396", fontSize:"1.5rem"}} /></div>
            </div>

            {/* Expense Card */}
            <div className={style.amountBox}>
                <div>
                    <span>Expense</span>
                    <h2>$ {totalExpense.toLocaleString()}</h2>
                    <p>This month</p>
                </div>
                <div><FaArrowDown style={{color:"#FF6384", fontSize:"1.5rem"}} /></div>
            </div>

            {/* Balance Card */}
            <div className={style.amountBox}>
                <div>
                    <span>Balance</span>
                    <h2>$ {balance.toLocaleString()}</h2>
                    <p>Net worth</p>
                </div>
                <div><FaScaleBalanced style={{color:"9B87F5", fontSize:"1.5rem"}} /></div>
            </div> 
        </>
    );
}