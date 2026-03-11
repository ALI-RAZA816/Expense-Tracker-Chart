import { FaWallet } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { MdSavings } from "react-icons/md";
import style from '../css/Header.module.css';


export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.left}>
            <h1><FaWallet className={style.wallet} style={{color:"#00C689",fontSize:"2rem",marginRight:".8rem"}} /> WealthWise</h1>
        </div>
        <div className={style.right}>
            <button><AiOutlineStock style={{marginRight:".5rem",color:"#7C6AE4",fontSize:"1.2rem"}}  /> <span>Smart Budgeting</span></button>
            <button><MdSavings style={{marginRight:".5rem",color:"#7C6AE4",fontSize:"1.2rem"}} /><span>Save More</span></button>
        </div>
    </header>
  )
}
