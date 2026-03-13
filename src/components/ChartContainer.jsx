import { useState } from 'react';
import style from '../css/ChartContainer.module.css'
import {BarChart, XAxis, YAxis, CartesianGrid, Bar, Pie, PieChart, Tooltip, Legend} from 'recharts';


export default function ChartContainer() {

    const [isActive, setActive] = useState(false);

    const showExpensesChartHandler = ()=>{
        setActive(false);
    }
    const showExpensesandIncomeChartHandler = ()=>{
        setActive(true);
    }
    
    const data01 = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];

    const data = [
      { name: "expense", value: 5000 },
      { name: "income", value: 400 }
    ];

    const isAnimationActive = true;
    const defaultIndex = 0;

  return (
     <div className={style.chartContainer}>
        <div className={style.tophead}>
            <h3>Analytics</h3>
            <div>
                <button className={isActive === false ? `${style.active}` : undefined} onClick={showExpensesChartHandler}>Expenses</button>
                <button className={isActive === true ? `${style.active}` : undefined} onClick={showExpensesandIncomeChartHandler}>Income vs Expense</button>
            </div>
        </div>
        <div className={style.actualChart}>
            { isActive === false ? <PieChart
                style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '60vh', aspectRatio: 1 }}
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
            </PieChart>:
            <BarChart style={{ width: '100%', maxHeight: '60vh', top:"50px", aspectRatio: 1 }} responsive data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"/>
                <YAxis dataKey="value" width="auto" />
                <Tooltip />
                <Bar dataKey="value"  fill="#82ca9d" isAnimationActive={isAnimationActive} />
                {/* <Legend/> */}
            </BarChart>}
        </div>
    </div>
  )
}
