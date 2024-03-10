import classes from './Sidebar.module.css'

import * as FaIcons from 'react-icons/fa6'
import Button from '../Button/Button'
export default function Sidebar({onSelect,incrProject, onOpenProject,selectedProjectID}) {
    return (
        <div className={classes.sidebar}>
            <h1>Your Projects</h1>
            <Button onSelect={onSelect} title="Add Project" icon></Button>
            <ul>
                {
                incrProject.map((element)=>{
                    let classname='';
                    if(element.id===selectedProjectID){
                        classname=classes.active
                    }else{
                        classname=''
                    }
                    return(
                    <li key={element.id}>
                        <button className={classname} onClick={()=>onOpenProject(element.id)}>{element.title}</button>
                    </li>
                    )
                })
                }
            </ul>
        </div>
    )
}