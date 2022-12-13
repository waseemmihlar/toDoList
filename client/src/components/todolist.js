import './todolist.css';
import React from 'react'
import axios from 'axios';
import CheckIcon from '@mui/icons-material/Check'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'

function Todolist(props) {
  

    const removetask=id=>{
        axios.delete(`http://localhost:5000/api/tasks/${id}`).then(
        res=>{props.deletetask(res.data)}
        ).catch(err=>console.log(err))
    }

    const taskcomplete=task=>{
        axios.put(`http://localhost:5000/api/tasks/${task._id}`,{
            _id:task._id,
            todo:task.todo,
            iscomplete:!task.iscomplete

        }).then(res=>{props.updatetask(res.data)}).catch(err=>console.log(err))
    }


    const listitems=props.listitems.map((task,index)=>{
          
        return(
            <li key={index}>
                <div style={{display:'flex'}}>
                     <CheckIcon className={task.iscomplete? 'iscomplete':'checkicon'} />
                     <p className={task.iscomplete?'taskcomplete':""} onClick={
                            ()=>{
                                taskcomplete(task)
                            }
                     }>{task.todo}</p>
                </div>
                <div>
                    <EditIcon className='edit' 
                    onClick={()=>{props.updatetaskitem(task)
                    props.showpopup()}
                    }/>
                    <CloseIcon className='close' onClick={()=>{removetask(task._id)}}/>
                </div>
            </li>
        )
    })
    return (
        <div className='tasklist'>
        <ul>
            {listitems}
        </ul>
        </div>
    )
}

export default Todolist




