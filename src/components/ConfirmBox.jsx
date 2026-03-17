import style from '../css/ConfirmBox.module.css';

export default function ConfirmBox({deleteItem, hideConfirmBox}) {
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
