import classes from './Empty.module.css'

import Button from '../Button/Button'

import img from '../../assets/no-projects.png'
export default function Empty({onSelect}){
    return(
        <div className={classes.empty}>
            <img src={img}></img>
            <p>No Project Selected</p>
            <Button onSelect={onSelect} title={"Create New Project"}></Button>
        </div>
        )
}