import { useContext } from 'react';
import style from '../css/ConfirmBox.module.css';
import { AppContext } from '../context/context';

export default function ConfirmBox() {
  
  const {deleteItem, hideConfirmBox}= useContext(AppContext);
  
  
  return (
    <div className={`${style.boxContainer}`} onClick={hideConfirmBox}>
        <div className={style.confirmBox}>
            <p>Are you sure you want to delete this transaction?</p>
            <div>
                <button style={{marginRight:"1rem"}} onClick={deleteItem}>Yes</button>
                <button onClick={hideConfirmBox}>No</button>
            </div>
        </div>
    </div>
  )
}
