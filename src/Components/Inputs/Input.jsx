import classes from './Input.module.css'
import { forwardRef } from 'react'

const Input=forwardRef(function Input({label,textarea,type},ref){
    return(
    <div className={classes.cont}>
        <label htmlFor={label}>{label}</label>
        {textarea? 
        (<textarea ref={ref} name={label} />):
        (<input ref={ref} type={type} name={label} />)}
    </div>
    )
})

export default Input;