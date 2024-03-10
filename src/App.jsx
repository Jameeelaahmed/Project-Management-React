import Sidebar from "./Components/Sidebar/Sidebar";
import Empty from "./Components/empty/Empty";
import Container from './Components/Container/Container'
import AddNewProject from "./Components/Add-New-Project/AddNewProject";
import Project from "./Components/Projectt/Project";
import { useState } from "react";
// import Modal from "./Components/Modal/Modal";
function App() {

  const [opened,setOpened]=useState({
    selectedProjectID:undefined,
    projects:[],
    tasks:[]
  })

  function handleStartAddProject(){
    setOpened(prevState =>{
      return{
      ...prevState,
      selectedProjectID:null
      }
    })
  }

  function handleOpenProject(id){
    setOpened(prevState =>{
      return{
      ...prevState,
      selectedProjectID:id
      }
    })
  }

  function handleAddProject(projectData){
    setOpened(prevState => {
      const newProject={
        ...projectData,
        id:Math.random()
      };

      return {
        ...prevState,
        projects:[...prevState.projects, newProject]
      };
    });
  }

  function handleDeleteProject(){
    setOpened(prevState=>{
      return{
        ...prevState,
        selectedProjectID:undefined,
        projects:prevState.projects.filter(project=>project.id!==prevState.selectedProjectID),
        tasks:prevState.tasks.filter(task => task.projectID !== prevState.selectedProjectID)
      }
    })
  }

  function handleAddTask(taskData){
    setOpened(prevState=>{
      const newTask={
        text:taskData,
        projectID:prevState.selectedProjectID,
        id:Math.random()
      };

      return{
        ...prevState,
        tasks:[newTask,...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(taskID){
    setOpened(prevState=>{
      return{
        ...prevState,
        tasks:prevState.tasks.filter(task=>task.id!==taskID)
      }
    })
  }

  const selectedProject=opened.projects.find(project=>project.id===opened.selectedProjectID);
  console.log(selectedProject)
  let content=(<Project tasks={opened.tasks} onAddTask={handleAddTask} onDelete={handleDeleteProject} project={selectedProject} onDeleteTask={handleDeleteTask}></Project>)
  if(opened.selectedProjectID===null){
    content=(<AddNewProject onAdd={handleAddProject}></AddNewProject>)
  }
  else if(opened.selectedProjectID===undefined){
    content= (<Empty onSelect={handleStartAddProject}></Empty>);
  }

  return (
    <>
    <Container>
      <Sidebar 
      incrProject={opened.projects} 
      onSelect={handleStartAddProject}
      onOpenProject={handleOpenProject}
      />
        {content}
    </Container>
    </>
  );
}

export default App;
