import style from '../css/AnalyticMain.module.css';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { Pie, PieChart, Tooltip} from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
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
                <div className="actualChart">
                    <PieChart
                        style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
                        responsive
                        >
                        <Pie
                            data={data01}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            outerRadius="50%"
                            fill="#8884d8"
                            isAnimationActive={isAnimationActive}
                        />
                        <Pie
                            data={data02}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius="60%"
                            outerRadius="80%"
                            fill="#82ca9d"
                            label
                            isAnimationActive={isAnimationActive}
                        />
                        <Tooltip defaultIndex={defaultIndex} />

                    </PieChart>
                </div>
            </div>
      </div>
      <div className="right" style={{border:"1px solid red"}}></div>
    </div>
  )
}
