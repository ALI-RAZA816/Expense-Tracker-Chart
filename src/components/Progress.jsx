import { FaTrophy } from "react-icons/fa";
import style from '../css/Progress.module.css';


export default function Progress() {
  return (
    <div className={style.progress}>
      <h2><span>Monthly Budget Progress</span><button><FaTrophy style={{marginRight:".5rem"}}/>On Track</button></h2>
      <div className={style.progressContainter}>
            <div className={style.progressBar}></div>
            <div>
                <span>Spent: $1500</span>
                <span>Budget: $1500</span>
            </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <span>Remaining:</span>
        <span style={{color:"#00C689"}}>$3,500</span>
      </div>
    </div>
  )
}
