import style from '../css/TransactionRecords.module.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function TransactionRecords() {
  return (
    <div className={style.transactionContainer}>
        <div className={style.records}>
            <h2>Recent Transactions </h2>
            <ul>
                <li style={{marginBottom:"1rem"}}>
                    <div>
                    <p className='title'><span>Alliance</span></p>
                    <p><button>Transporation</button><span className='date'>11 March</span></p>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <span className='amount' style={{color:"#FF6384",fontSize:"1.3rem",fontWeight:"bold"}}>$ 525</span>
                        <span style={{margin:"0 .8rem"}}><FaEdit style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                        <span><MdDelete style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                    </div>
                </li>
                <li style={{marginBottom:"1rem"}}>
                    <div>
                    <p className='title'><span>Alliance</span></p>
                    <p><button>Transporation</button><span className='date'>11 March</span></p>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <span className='amount' style={{color:"#FF6384",fontSize:"1.3rem",fontWeight:"bold"}}>$ 525</span>
                        <span style={{margin:"0 .8rem"}}><FaEdit style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                        <span><MdDelete style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                    </div>
                </li>
                <li style={{marginBottom:"1rem"}}>
                    <div>
                    <p className='title'><span>Alliance</span></p>
                    <p><button>Transporation</button><span className='date'>11 March</span></p>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <span className='amount' style={{color:"#FF6384",fontSize:"1.3rem",fontWeight:"bold"}}>$ 525</span>
                        <span style={{margin:"0 .8rem"}}><FaEdit style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                        <span><MdDelete style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                    </div>
                </li>
                <li style={{marginBottom:"1rem"}}>
                    <div>
                    <p className='title'><span>Alliance</span></p>
                    <p><button>Transporation</button><span className='date'>11 March</span></p>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <span className='amount' style={{color:"#FF6384",fontSize:"1.3rem",fontWeight:"bold"}}>$ 525</span>
                        <span style={{margin:"0 .8rem"}}><FaEdit style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                        <span><MdDelete style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                    </div>
                </li>
                <li style={{marginBottom:"1rem"}}>
                    <div>
                    <p className='title'><span>Alliance</span></p>
                    <p><button>Transporation</button><span className='date'>11 March</span></p>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <span className='amount' style={{color:"#FF6384",fontSize:"1.3rem",fontWeight:"bold"}}>$ 525</span>
                        <span style={{margin:"0 .8rem"}}><FaEdit style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                        <span><MdDelete style={{color:"#ddd",fontSize:"1.1rem",cursor:"pointer"}} /></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
