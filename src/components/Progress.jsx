// Import icons for trophy (on track) and warning (over budget)
import { FaTrophy } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
// Import CSS module for progress styling
import style from '../css/Progress.module.css';
// Import React's useContext hook to access global state
import { useContext } from "react";
// Import the application context to get budget, total expense, and progress percentage
import { AppContext } from "../context/context";

/**
 * Progress Component
 * Displays the monthly budget progress with a visual progress bar.
 * Shows a status button: "On Track" (green) if total expense is within budget,
 * or "Over Budget!" (red) if the budget is exceeded.
 * Uses a fixed budget of $5000 for demonstration purposes.
 */
export default function Progress() {

    // Destructure budget (remaining amount), totalExpense, and progress (percentage) from context
    const {budget, totalExpense, progress} = useContext(AppContext);

    return (
        <div className={style.progress}>
            {/* Header section: Title and status button */}
            <h2>
                <span>Monthly Budget Progress</span>
                {/* Conditional rendering: On Track button if totalExpense <= 5000, else Over Budget button */}
                {totalExpense <= 5000 ?
                    <button><FaTrophy style={{marginRight: ".5rem"}} />On Track</button> :
                    <button style={{background: "rgba(255, 79, 111,.20)", color: "#FF6384", border: "1px solid #FF6384"}} >
                        <CiWarning style={{marginRight: ".5rem", fontSize: "1.1rem"}} />Over Budget!
                    </button>
                }
            </h2>

            {/* Progress bar container */}
            <div className={style.progressContainter}>
                {/* The progress bar with dynamic width and color based on the budget status */}
                <div
                    className={`${style.progressBar} ${totalExpense <= 5000 ? `${style.green_progress}` : `${style.red_progress}`}`}
                    style={{ '--progress-width': progress + '%' }}
                ></div>
                {/* Display spent amount and total budget */}
                <div>
                    <span>Spent: $ {totalExpense}</span>
                    <span>Budget: $ 5000</span>
                </div>
            </div>

            {/* Footer section: Show remaining budget */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Remaining: </span>
                <span style={{ color: "#00C689" }}>$ {budget}</span>
            </div>
        </div>
    );
}