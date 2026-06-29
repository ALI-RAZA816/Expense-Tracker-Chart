// Import React's useContext hook to access global state
import { useContext } from 'react';
// Import CSS module for the confirmation box styling
import style from '../css/ConfirmBox.module.css';
// Import the application context to get state and functions for delete confirmation
import { AppContext } from '../context/context';

/**
 * ConfirmBox Component
 * Renders a modal-like confirmation dialog when a transaction is to be deleted.
 * It displays a confirmation message and Yes/No buttons.
 * Visibility is controlled by the `activeBox` state from context.
 */
export default function ConfirmBox() {
  
  // Destructure the necessary functions and state from the AppContext
  // deleteItem: function to actually delete the transaction
  // hideConfirmBox: function to close the confirmation box
  // activeBox: boolean indicating whether the confirm box should be visible
  const {deleteItem, hideConfirmBox, activeBox}= useContext(AppContext);
  
  // Render the confirm box only if activeBox is true
  return (
    <>
      {activeBox === true && <div className={`${style.boxContainer}`} onClick={hideConfirmBox}>
          {/* The actual confirmation dialog. Clicking outside (on the overlay) also closes it via hideConfirmBox */}
          <div className={style.confirmBox}>
              <p>Are you sure you want to delete this transaction?</p>
              <div>
                  {/* Yes button triggers the delete function */}
                  <button style={{marginRight:"1rem"}} onClick={deleteItem}>Yes</button>
                  {/* No button closes the confirmation box */}
                  <button onClick={hideConfirmBox}>No</button>
              </div>
          </div>
      </div>}
    </>
  )
}