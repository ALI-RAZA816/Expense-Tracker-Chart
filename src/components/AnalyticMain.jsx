import style from '../css/AnalyticMain.module.css';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";



export default function AnalyticMain() {
  return (
    <div className={style.analyticMain}>
      <div className={style.left}>
            <div className={style.amountBox}>
                <div>
                    <span>Income</span>
                    <h2>$2,250</h2>
                    <p>This month</p>
                </div>
                <div><FaArrowUp style={{color:"#00E396",fontSize:"1.5rem"}} /></div>
            </div>
            <div className={style.amountBox}>
                <div>
                    <span>Expense</span>
                    <h2>$2,250</h2>
                    <p>This month</p>
                </div>
                <div><FaArrowDown style={{color:"#FF6384",fontSize:"1.5rem"}} /></div>
            </div>
            <div className={style.amountBox}>
                <div>
                    <span>Balance</span>
                    <h2>$2,250</h2>
                    <p>Net worth</p>
                </div>
                <div><FaScaleBalanced style={{color:"9B87F5",fontSize:"1.5rem"}} /></div>
            </div>
            <div className={style.chartContainer}>
                <div className={style.tophead}>
                    <h3>Analytics</h3>
                    <div>
                        <button>Expenses</button>
                        <button>Income vs Expense</button>
                    </div>
                </div>
            </div>
      </div>
      <div className="right" style={{border:"1px solid red"}}></div>
    </div>
  )
}
