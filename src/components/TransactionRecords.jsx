import style from '../css/TransactionRecords.module.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import NoRecords from './NoRecords';


export default function TransactionRecords({filter, showConfirmBox, showEditForm}) {
  return (
    <div className={style.transactionContainer}>
        <div className={style.records}>
            <h2>Recent Transactions </h2>
            {filter?.length ===0 ?<NoRecords/> :<ul>
                {filter?.map((item, index) => {
                    return   <li className={item.type === 'Expenses' ? `${style.red}`:`${style.green}`} key={index} style={{marginBottom:"1rem"}}>
                                <div>
                                    <p className='title'><span>{item.description}</span></p>
                                    <p><button>{item.category}</button><span className='date'>{item.date}</span></p>
                                </div>
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <span className={item.type === 'Expenses' ? `${style.amountRed}`:`${style.greencolor}`} style={{fontSize:"1.3rem",fontWeight:"bold"}}>$ {item.amount.toLocaleString()}</span>
                                    <span style={{margin:"0 .8rem"}}><FaEdit onClick={()=> showEditForm(index)} style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                                    <span><MdDelete onClick={()=>showConfirmBox(item.id)} style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                                </div>
                            </li>
                })}
            </ul>}
        </div>
    </div>
  )
}
