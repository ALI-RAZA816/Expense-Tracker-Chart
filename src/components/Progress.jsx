import { FaTrophy } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
import style from '../css/Progress.module.css';
import { useContext } from "react";
import { AppContext } from "../context/context";


export default function Progress() {

  const {budget, totalExpense, progress} = useContext(AppContext);

  return (
    <div className={style.progress}>
      <h2><span>Monthly Budget Progress</span>{totalExpense <= 5000 ? <button><FaTrophy style={{marginRight:".5rem"}}/>On Track</button> :<button style={{background:"rgba(255, 79, 111,.20)",color:"#FF6384",border:"1px solid #FF6384"}} ><CiWarning style={{marginRight:".5rem",fontSize:"1.1rem"}}/>Over Budget!</button>}</h2>
      <div className={style.progressContainter}>
            <div className={`${style.progressBar} ${totalExpense <= 5000 ? `${style.green_progress}` : `${style.red_progress}`}`} style={{'--progress-width' : progress + '%'}}></div>
            <div>
                <span>Spent: $ {totalExpense}</span>
                <span>Budget: $ 5000</span>
            </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <span>Remaining: </span>
        <span style={{color:"#00C689"}}>$ {budget}</span>
      </div>
    </div>
  )
}
