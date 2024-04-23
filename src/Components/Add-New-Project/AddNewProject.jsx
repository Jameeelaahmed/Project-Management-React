import classes from './AddNewProject.module.css'
import Button from '../Button/Button'
import Input from '../Inputs/Input';
import { useRef, useState } from 'react'

import Modal from '../Modal/Modal';

export default function AddNewProject({ onAdd, cancel ,onClearInputs}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const dialog = useRef();
    const [emptyField, setEmptyField] = useState([]);

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = dueDate.current.value;

        const empty = [];
        if (enteredTitle.trim() === "") empty.push("Title, ");
        if (enteredDescription.trim() === "") empty.push("Description, ");
        if (enteredDate.trim() === "") empty.push("Due Date");

        if (empty.length > 0) {
            setEmptyField(empty);
            dialog.current.open();
            return;
        }

        // onClearInputs();

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDate
        });
    }

    return (
        <>
            <Modal ref={dialog} emptyField={emptyField} onClose={() => setEmptyField("")} />
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
    );
}
