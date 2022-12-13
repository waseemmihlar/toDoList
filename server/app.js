const express=require('express');
const cors=require('cors');
const router=require('./route/route')

require('./model/db');
const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks',router)

app.listen(5000,(err)=>{
    if(err) console.log(err);
    console.log('server running @ port 5000')
})


