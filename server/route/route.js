const express=require('express');
const task=require('../model/model')

const router=express.Router();


// router.get('/:id',(req,res)=>{
//         res.send(req.params.id);  
// })

// router.get('/',(req,res)=>{
//     const data=new task({
//         todo:'hello guys',
//         iscomplete:true
//     })

//     data.save((err,doc)=>{
//         if(err)console.log(err)
//         console.log(doc)
//     })

// })


router.post('/',(req,res)=>{
    const data=new task(req.body);
    data.save((err,doc)=>{
        if(err)console.log(err)
        res.json(doc)
    })
})

router.get('/',(req,res)=>{
    task.find((err,doc)=>{
        if(err) console.log(err);
        res.json(doc)
    })
})


router.put('/:id',(req,res)=>{
   task.findOneAndUpdate(req.params.id,
    req.body,{
        new:true
    },
    (err,doc)=>{
        if(err) console.log(err);
        res.json(doc)
    })
})

router.delete('/:id',(req,res)=>{
    task.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(err) console.log(err);
        res.json(doc)
    })
})


module.exports=router;

