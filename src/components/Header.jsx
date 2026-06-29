// Import required icons from react-icons libraries
import { FaWallet } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { MdSavings } from "react-icons/md";
// Import CSS module for header styling
import style from '../css/Header.module.css';

/**
 * Header Component
 * Renders the top navigation bar of the application.
 * Contains the brand name with a wallet icon on the left,
 * and two feature buttons (Smart Budgeting and Save More) on the right.
 */
export default function Header() {
  return (
    <header className={style.header}>
        {/* Left section: Brand logo and name */}
        <div className={style.left}>
            <h1>
                {/* Wallet icon with custom color and size */}
                <FaWallet className={style.wallet} style={{color:"#00C689", fontSize:"2rem", marginRight:".8rem"}} />
                WealthWise
            </h1>
        </div>

        {/* Right section: Action buttons for features */}
        <div className={style.right}>
            {/* Smart Budgeting button with stock chart icon */}
            <button>
                <AiOutlineStock style={{marginRight:".5rem", color:"#7C6AE4", fontSize:"1.2rem"}} />
                <span>Smart Budgeting</span>
            </button>
            {/* Save More button with savings icon */}
            <button>
                <MdSavings style={{marginRight:".5rem", color:"#7C6AE4", fontSize:"1.2rem"}} />
                <span>Save More</span>
            </button>
        </div>
    </header>
  );
}