import classes from './button.module.css'

import * as FaIcons from 'react-icons/fa6'
export default function Button({title,icon,onSelect,onDelete}){
    return(
    <>
        <button className={classes.button} onClick={onSelect}>
            {icon && <FaIcons.FaPlus className={classes.icon} />}
            {title}
        </button>
    </>
    )
}