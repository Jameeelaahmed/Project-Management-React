import classes from './Task.module.css'
export default function Task({task,onDelete}){
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