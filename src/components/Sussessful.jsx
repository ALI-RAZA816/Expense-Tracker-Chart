// Import React's useContext hook to access global state
import { useContext } from 'react';
// Import CSS module for styling the success/error messages
import style from '../css/Sussessful.module.css';
// Import icons: checkmark for success, cross for error
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
// Import the application context to get message and success status
import { AppContext } from '../context/context';

/**
 * Sussessful Component (Note: typo in filename, but kept as is)
 * This component displays a temporary success or error notification message.
 * It shows the success message with a green checkmark if isSuccessful is true,
 * or the error message with a red cross if isSuccessful is false.
 * The visibility is controlled by CSS classes that likely handle fade-in/out.
 */
export default function Sussessful() {

    // Destructure succMsg (the message text) and isSuccessful (boolean flag) from context
    const {succMsg, isSuccessful} = useContext(AppContext);

    return (
        <>
            {/* Success message div - shown when isSuccessful is true */}
            <div className={`${style.message} ${isSuccessful === true ? `${style.showSuccess}` : undefined}`}>
                <p style={{display:"flex", alignItems:"center"}}>
                    <IoMdCheckmark style={{fontSize:"1.3rem", marginRight:".5rem"}} />
                    {succMsg}
                </p>
            </div>

            {/* Error message div - shown when isSuccessful is false */}
            <div className={`${style.message} ${isSuccessful === false ? `${style.showError}` : undefined}`}>
                <p style={{display:"flex", alignItems:"center"}}>
                    <RxCross2 style={{fontSize:"1.3rem", marginRight:".5rem"}} />
                    {succMsg}
                </p>
            </div>
        </>
    );
}