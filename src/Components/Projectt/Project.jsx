import classes from './Project.module.css'
// import Button from '../Button/Button'
import { useState ,useRef } from 'react'
import Task from '../Task/Task';
export default function Project({project,onDelete,onAddTask,onDeleteTask,tasks}){
    const formattedDate=new Date(project.dueDate).toLocaleDateString('en-US',
    {
        day:'numeric',
        month:'long',
        year:'numeric'
    })

    const title=useRef();

    function handleAddTask(){
        if(title.current.value==='') return;
        onAddTask(title.current.value);
        title.current.value=''; 
    }


    return(
        <>
        <div className={classes.project}>
            <div className={classes.proj_details}>
                <div className={classes.head}>
                    <p>{project.title}
                    <span></span>
                    </p>
                    <button className={classes.button} onClick={onDelete} title={"Delete"}>Delete</button>
                </div>
                <p className={classes.date}>{formattedDate}</p>
                <p className={classes.description}>{project.description}</p>
            </div>
            <div className={classes.tasks}>
                <h2>Tasks</h2>
                <div className={classes.add_task}>
                    <input ref={title} type="text" />
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
                {tasks.length===0 &&<p>No Tasks have been added yet</p>}
                {tasks.length!==0 && <Task task={tasks} onDelete={onDeleteTask}></Task>}
            </div>
        </div>
        </>
    )
}