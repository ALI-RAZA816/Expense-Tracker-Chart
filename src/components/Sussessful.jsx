import style from '../css/Sussessful.module.css';

export default function Sussessful({succMsg ,isSuccessful}) {
  return (
    <>
        <div className={`${style.message} ${isSuccessful === true ? `${style.showSuccess}` : undefined}`}>
            <p>{succMsg}</p>
        </div>
        <div className={`${style.message} ${isSuccessful === false ? `${style.showError}` : undefined}`}>
            <p>{succMsg}</p>
        </div>
    </>
  )
}
