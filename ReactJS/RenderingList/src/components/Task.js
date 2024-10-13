import React, { useState } from 'react'

const Task = () => {
  const [tasks, setTasks] = useState([
    {id:1, events:"laundry", status:true},
    {id:2, events:"reading", status:false},
    {id:3, events:"bathing", status:true},
    {id:4, events:"Movie", status:false}
  ])
  // console.log(tasks);
  
  return (
    <div>
      <h1>Tasks List</h1>
      <ul>
        {
          tasks.map((task)=>{
            return (
              <li key={task.id}>{task.events}-{task.status?"Completed":"Pending"}</li>
            )
           
          })
         
        }
       
      </ul>
     
    
    </div>
   
  )
}

export default Task