import './addtask.css'
import React,{useState} from 'react';
import axois from 'axios'

function Addtask(props){

    const [inputtask,setinputtask]=useState("")

    const handleclick=()=>{
        if(inputtask.trim()===''){
            return
        }
        else{
            axois.post('http://localhost:5000/api/tasks',{
                todo:inputtask,
                iscomplete:false
            }).then(res=>
                {
                props.addtask(res.data)
                setinputtask("")
                }
            ).catch(err=>console.log(err))
        }
    }

    return(
        <div className='addtask'>
            <input type={'text'} placeholder='Add your task' value={inputtask} 
            onChange={event=>setinputtask(event.target.value)}/>
            <button onClick={()=>handleclick()}>Add task</button>
        </div>
    )
}

export default Addtask;
