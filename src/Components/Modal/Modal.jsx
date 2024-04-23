import classes from './Modal.module.css'
import { createPortal } from 'react-dom';
import { useRef, forwardRef, useImperativeHandle } from 'react';

const Modal = forwardRef(function Modal({ onClose, emptyField }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    // let emptyFieldsList = null;
    // if (emptyField.length > 0) {
    //     emptyFieldsList = emptyField.map((field, index) => (
    //         <span key={index}>
    //             {field}
    //             {index !== emptyField.length - 1 && ", "}
    //         </span>
    //     ));
    // }

    return createPortal(
        <dialog ref={dialog} className={classes.modal}>
            <h1>Invalid Input</h1>
            <p>Oops...looks like you forgot to enter a value in the <b> " {emptyField} " </b>field.</p>
            <p>Please make sure you provide a valid value for every input field</p>
            <form method='dialog'>
                <button onClick={onClose}>Okay</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal