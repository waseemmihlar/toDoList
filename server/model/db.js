const mongoose=require('mongoose')

module.exports=mongoose.connect('mongodb://localhost:27017/todolist',{
    useUnifiedTopology:true,
    useNewUrlParser:true
},err=>{
    if(err) console.log('error on database connecting - ${err}')
    console.log('database connected successfully')
})



