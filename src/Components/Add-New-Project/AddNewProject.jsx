import classes from './AddNewProject.module.css'
import Button from '../Button/Button'
import Input from '../Inputs/Input';
import { useRef, useState } from 'react'

import Modal from '../Modal/Modal';

export default function AddNewProject({onAdd,cancel}){

    const title=useRef();
    const description=useRef();
    const dueDate=useRef();
    const dialog=useRef();

    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDate=dueDate.current.value;

        // ! VALIDATION
        if(enteredDate.trim() ==="" || enteredDescription.trim() ==="" || enteredTitle.trim() ===""){
            dialog.current.open();
            return;
        }

        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDate
        })
    }

    function handleClear(){
        title.current.value='';
        description.current.value='';
        dueDate.current.value='';
    }

    return(
        <>
        <Modal ref={dialog}></Modal>
        <div className={classes.add_new_project}>
        <div className={classes.buttons}>
            <button className={classes.button} onClick={cancel}>Cancel</button>
            <Button onSelect={handleSave} title={"Save"}></Button>
        </div>
        <div className={classes.form}>
            <Input ref={title} type="text" label="Title"></Input>
            <Input ref={description} type="text" label="Description" textarea></Input>
            <Input ref={dueDate} type="Date" label="Due Date"></Input>
        </div>
        </div>
        </>
    )
}