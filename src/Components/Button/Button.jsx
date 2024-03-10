import classes from './button.module.css'


export default function Button({title,icon,onSelect,onDelete}){
    return(
    <>
        <button className={classes.button} onClick={onSelect}>

            {title}
        </button>
    </>
    )
}