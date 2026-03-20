import style from '../css/Sussessful.module.css';
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


export default function Sussessful({succMsg ,isSuccessful}) {
  return (
    <>
        <div className={`${style.message} ${isSuccessful === true ? `${style.showSuccess}` : undefined}`}>
            <p style={{display:"flex",alignItems:"center"}}><IoMdCheckmark style={{fontSize:"1.3rem",marginRight:".5rem"}} /> {succMsg}</p>
        </div>
        <div className={`${style.message} ${isSuccessful === false ? `${style.showError}` : undefined}`}>
            <p style={{display:"flex",alignItems:"center"}}><RxCross2 style={{fontSize:"1.3rem",marginRight:".5rem"}} />{succMsg}</p>
        </div>
    </>
  )
}
