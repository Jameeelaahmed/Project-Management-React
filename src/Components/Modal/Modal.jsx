import classes from './Modal.module.css'
import { createPortal } from 'react-dom';
import { useRef, forwardRef, useImperativeHandle } from 'react';

const Modal=forwardRef( function Modal({onClose},ref){
    const dialog=useRef();
    useImperativeHandle(ref,() => {
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });
    return createPortal(
        <dialog ref={dialog} className={classes.modal}>
            <h1>Invalid Input</h1>
            <p>Oops...looks like you forgot enter a value.</p>
            <p>Please make sure you provide a valid value for every input field</p>
            <form method='dialog'>
                <button>Okay</button>
            </form>
        </dialog>,document.getElementById('modal-root')
    )
})

export default Modal