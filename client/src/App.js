import react,{useState,useEffect} from 'react';
import Addtask from './components/addtask'
import Todolist from './components/todolist'
import Updatetask from './components/updatetask'
import './App.css'
import axios from 'axios';

function App(){

    const [data,setdata]=useState([])

    const [updatetaskitem,setupdatetaskitem]=useState({})
    const [showpopup,setshowpopup]=useState(false)

    useEffect(()=>{
        axios.get('http://localhost:5000/api/tasks').then((res)=>
           {setdata(res.data);
            console.log(res.data)
         }
        ).catch(err=>console.log(err))
    },[])
    
    const addtask=newtask=>{
        setdata([...data,newtask])
        console.log(data)
    }

    const updatetask=task=>{
        const newlist=[...data];
        newlist.forEach(item=>{
            if(item._id===task._id)
            {
                item.iscomplete=task.iscomplete
            }
        })

        setdata(newlist)
    }


    const deletetask=task=>{
        const newlist=data.filter(item=>!(item._id===task._id))
        setdata(newlist)
    }

    const taskupdated=task=>{
            const newlist=[...data];

            newlist.forEach(item=>{
                if(item._id===task._id)
                {
                    item.todo=task.todo
                }

                setdata(newlist)
            })
    }

    return(
        <>
        <Addtask addtask={addtask}/>
        <Todolist listitems={data} deletetask={deletetask} updatetask={updatetask}
        updatetaskitem={task=>setupdatetaskitem(task)} showpopup={()=>setshowpopup(!showpopup)}
        />
        {showpopup && <Updatetask task={updatetaskitem} taskupdated={taskupdated}
        removepopup={()=>setshowpopup(!showpopup)}
        />}
        </>
    )
}

export default App;

