// Import CSS module for styling the no-records message
import style from '../css/NoRecords.module.css';

/**
 * NoRecords Component
 * A simple presentational component that displays a message
 * when there are no transactions to show in the list.
 * It is used as a fallback UI in the transaction list.
 */
export default function NoRecords() {
  return (
    <div className={style.NoRecords}>
        <h2>No Transactions</h2>
    </div>
  );
}