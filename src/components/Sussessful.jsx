import { useContext } from 'react';
import style from '../css/Sussessful.module.css';
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { AppContext } from '../context/context';


export default function Sussessful() {

  const {succMsg, isSuccessful} = useContext(AppContext);

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
