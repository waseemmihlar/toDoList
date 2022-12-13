const mongoose=require('mongoose')

const model=new mongoose.Schema({
    todo:String,
    iscomplete:Boolean
})

const Task=mongoose.model('tasks',model);

module.exports=Task;
