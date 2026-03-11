import style from '../css/ChartContainer.module.css'
import { Pie, PieChart, Tooltip, Legend} from 'recharts';

export default function ChartContainer() {
    
    const data01 = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];
    
    const isAnimationActive = true;
    const defaultIndex = 0;

  return (
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
  )
}
