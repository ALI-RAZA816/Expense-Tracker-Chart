// Import necessary React hooks: useContext for global state, useState for local UI state
import { useContext, useState } from 'react';
// Import CSS module for styling
import style from '../css/ChartContainer.module.css'
// Import chart components from recharts library
import {BarChart, XAxis, YAxis, CartesianGrid, Bar, Pie, PieChart, Tooltip, Legend} from 'recharts';
// Import the application context to access transaction data and totals
import { AppContext } from '../context/context';

/**
 * ChartContainer Component
 * Renders either a pie chart of expenses by category or a bar chart comparing income vs expense.
 * The user can toggle between the two views via buttons.
 */
export default function ChartContainer() {

    // Destructure filter (list of transactions), totalIncome, and totalExpense from context
    const {filter, totalIncome, totalExpense} = useContext(AppContext);

    // Local state to determine which chart is active: false = expense pie chart, true = income vs expense bar chart
    const [isActive, setActive] = useState(false);

    // Handler to switch to expense pie chart
    const showExpensesChartHandler = ()=>{
        setActive(false);
    }
    // Handler to switch to income vs expense bar chart
    const showExpensesandIncomeChartHandler = ()=>{
        setActive(true);
    }
    
    // (Commented out previous static data)
    // const data01 = transaction
    // const data01 = [
    //   { name: 'Group A', value: 400 },
    //   { name: 'Group A', value: 400 },
    //   { name: 'Group B', value: 300 },
    //   { name: 'Group C', value: 300 },
    //   { name: 'Group D', value: 200 },
    // ];

    // Transform the filter array into a format suitable for the pie chart: each transaction becomes { name: category, amount: amount }
    const data01 = filter.map(item => {
        return {
            name : item.category,
            amount : item.amount
        }
    });
    
    // Data for the bar chart: two entries for total expense and total income
    const data = [
      { name: "expense", value: totalExpense },
      { name: "income", value: totalIncome }
    ];

    // Enable animation on charts
    const isAnimationActive = true;
    // Set default index for tooltip (not critical)
    const defaultIndex = 0;

  return (
     <div className={style.chartContainer}>
        {/* Header section with title and toggle buttons */}
        <div className={style.tophead}>
            <h3>Analytics</h3>
            <div>
                {/* Button for expense chart – active when isActive is false */}
                <button className={isActive === false ? `${style.active}` : undefined} onClick={showExpensesChartHandler}>Expenses</button>
                {/* Button for income vs expense chart – active when isActive is true */}
                <button className={isActive === true ? `${style.active}` : undefined} onClick={showExpensesandIncomeChartHandler}>Income vs Expense</button>
            </div>
        </div>
            {/* Conditional rendering: if no transactions, show a message; otherwise render the chart */}
            {filter.length === 0 ? <div className={style.message} ><p>No data to display</p></div>:
            <div className={style.actualChart}>
                { /* If isActive is false, render the expense pie chart */ }
                { isActive === false ? <PieChart
                    style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '60vh', aspectRatio: 1 }}
                    responsive
                    >
                    <Pie
                        data={data01}
                        dataKey="amount"
                        cx="50%"
                        cy="50%"
                        innerRadius="50%"
                        outerRadius="80%"
                        fill="#82ca9d"
                        label
                        isAnimationActive={isAnimationActive}
                    />
                    <Legend/>
                    <Tooltip defaultIndex={defaultIndex} />
                </PieChart>:
                /* Otherwise render the bar chart for income vs expense */
                <BarChart style={{ width: '100%', maxHeight: '60vh', top:"50px", aspectRatio: 1 }} responsive data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"/>
                    <YAxis dataKey="value" width="auto" />
                    <Tooltip />
                    <Bar dataKey="value"  fill="#82ca9d" isAnimationActive={isAnimationActive} />
                    {/* Legend is commented out, kept as is */}
                    {/* <Legend/> */}
                </BarChart>}
            </div>}
    </div>
  )
}