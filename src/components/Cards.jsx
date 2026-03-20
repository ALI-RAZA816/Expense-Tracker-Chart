import { useContext } from 'react';
import style from '../css/Cards.module.css';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { AppContext } from '../context/context';

export default function Cards() {

    const {totalExpense,totalIncome,balance } = useContext(AppContext);
  return (
    <>
      <div className={style.amountBox}>
            <div>
                <span>Income</span>
                <h2>$ {totalIncome.toLocaleString()}</h2>
                <p>This month</p>
            </div>
            <div><FaArrowUp style={{color:"#00E396",fontSize:"1.5rem"}} /></div>
        </div>
        <div className={style.amountBox}>
            <div>
                <span>Expense</span>
                <h2>$ {totalExpense.toLocaleString()}</h2>
                <p>This month</p>
            </div>
            <div><FaArrowDown style={{color:"#FF6384",fontSize:"1.5rem"}} /></div>
        </div>
        <div className={style.amountBox}>
            <div>
                <span>Balance</span>
                <h2>$ {balance.toLocaleString()}</h2>
                <p>Net worth</p>
            </div>
            <div><FaScaleBalanced style={{color:"9B87F5",fontSize:"1.5rem"}} /></div>
        </div> 
    </>
  )
}
