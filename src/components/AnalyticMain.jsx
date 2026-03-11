import style from '../css/AnalyticMain.module.css';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { Pie, PieChart, Tooltip, Legend} from 'recharts';
import { FaPlus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const isAnimationActive = true;
const defaultIndex = 0;

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
                <div className={style.actualChart}>
                    <PieChart
                        style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '35vh', aspectRatio: 1 }}
                        responsive
                        >
                        <Pie
                            data={data01}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius="50%"
                            outerRadius="80%"
                            fill="#82ca9d"
                            // label
                            isAnimationActive={isAnimationActive}
                        />
                        <Legend/>
                        <Tooltip defaultIndex={defaultIndex} />
                    </PieChart>
                </div>
            </div>
      </div>
      <div className={style.right}>
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
      </div>
    </div>
  )
}
