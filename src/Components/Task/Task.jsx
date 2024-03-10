import classes from './Task.module.css'
// import { useState } from 'react'
export default function Task({task,onDelete}){
    console.log(task)
    return (
        <>
        {task.map((element) => (
        <div key={element.id} className={classes.task}>
            <p className={classes.title}>{element.text}</p>
            <button className={classes.button} onClick={()=>onDelete(element.id)}>Clear</button>
        </div>           
        ))}
        </>
    );
}