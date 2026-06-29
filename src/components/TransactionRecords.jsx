// Import CSS module for styling the transaction records
import style from '../css/TransactionRecords.module.css'
// Import icons for edit and delete actions
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// Import the NoRecords component to display when there are no transactions
import NoRecords from './NoRecords';
// Import React's useContext hook to access global state
import { useContext } from 'react';
// Import the application context to get the filtered transaction list and handlers
import { AppContext } from '../context/context';

/**
 * TransactionRecords Component
 * Renders the list of transactions after applying filters.
 * Each transaction displays its description, category, date, amount,
 * and edit/delete icons. The styling changes based on transaction type
 * (green for income, red for expenses).
 */
export default function TransactionRecords() {

    // Destructure filter (the filtered transaction array), showConfirmBox, and showEditForm from context
    const {filter, showConfirmBox, showEditForm} = useContext(AppContext);

    return (
        <div className={style.transactionContainer}>
            <div className={style.records}>
                <h2>Recent Transactions</h2>
                {/* Conditional rendering: if filter is empty, show NoRecords; otherwise show the list */}
                {filter?.length === 0 ? <NoRecords /> :
                    <ul>
                        {/* Map over each transaction in the filtered list */}
                        {filter?.map((item, index) => {
                            return (
                                <li
                                    className={item.type === 'Expenses' ? `${style.red}` : `${style.green}`}
                                    key={index}
                                    style={{ marginBottom: "1rem" }}
                                >
                                    {/* Left side: description, category, and date */}
                                    <div>
                                        <p className='title'><span>{item.description}</span></p>
                                        <p>
                                            <button>{item.category}</button>
                                            <span className='date'>{item.date}</span>
                                        </p>
                                    </div>
                                    {/* Right side: amount and action icons */}
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        {/* Amount with conditional color based on type */}
                                        <span
                                            className={item.type === 'Expenses' ? `${style.amountRed}` : `${style.greencolor}`}
                                            style={{ fontSize: "1.3rem", fontWeight: "bold" }}
                                        >
                                            $ {item.amount.toLocaleString()}
                                        </span>
                                        {/* Edit icon triggers the edit form with the current index */}
                                        <span style={{ margin: "0 .8rem" }}>
                                            <FaEdit
                                                onClick={() => showEditForm(index)}
                                                style={{ color: "#ddd", fontSize: "1.1rem", cursor: "pointer" }}
                                            />
                                        </span>
                                        {/* Delete icon triggers the confirmation box with the transaction id */}
                                        <span>
                                            <MdDelete
                                                onClick={() => showConfirmBox(item.id)}
                                                style={{ color: "#ddd", fontSize: "1.1rem", cursor: "pointer" }}
                                            />
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                }
            </div>
        </div>
    );
}