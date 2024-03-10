import classes from './Sidebar.module.css'

import * as FaIcons from 'react-icons/fa6'

export default function Sidebar({onSelect,incrProject, onOpenProject,selectedProjectID}) {
    return (
        <div className={classes.sidebar}>
            <h1>Your Projects</h1>
            <button className={classes.button} onClick={onSelect}>
                <FaIcons.FaPlus className={classes.icon} />
                Add Project
            </button>
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