import style from '../css/TransactionRecords.module.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function TransactionRecords({transaction}) {
  return (
    <div className={style.transactionContainer}>
        <div className={style.records}>
            <h2>Recent Transactions </h2>
            <ul>
                {transaction.map((item, index) => {
                    return   <li key={index} style={{marginBottom:"1rem"}}>
                                <div>
                                <p className='title'><span>{item.description}</span></p>
                                <p><button>{item.category}</button><span className='date'>{item.date}</span></p>
                                </div>
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <span className='amount' style={{color:"#FF6384",fontSize:"1.3rem",fontWeight:"bold"}}>$ {item.amount}</span>
                                    <span style={{margin:"0 .8rem"}}><FaEdit style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                                    <span><MdDelete style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                                </div>
                            </li> 
                })}
            </ul>
        </div>
    </div>
  )
}
