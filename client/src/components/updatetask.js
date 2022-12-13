import axios from 'axios';
import './updatetask.css';
import react,{useState} from 'react'

function Updatetask(props) {

    const [updatetask,setupdatetask]=useState(props.task.todo)

    const handleupdateitem=()=>{
        if(updatetask.trim()==='' || props.task.todo===updatetask)
        {
            return props.removepopup()
        }
        else{
            axios.put(`http://localhost:5000/api/tasks/${props.task._id}`,
            {
                _id:props.task._id,
                todo:updatetask,
                iscomplete:props.task.iscomplete
            }
            ).then(res=>{
                console.log(res.data)
                props.taskupdated(res.data)
                props.removepopup()
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    return (
        <div className='popup'>
            <div className='popup-content'>
            <input type={'text'} value={updatetask} 
            onChange={event=>{
                setupdatetask(event.target.value)
            }}
            />

            <button onClick={()=>handleupdateitem()}>Update</button>
            </div>
        </div>
    )
}

export default Updatetask














