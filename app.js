console.log("Hi,this is app.js");
console.log(new Date());
console.log("Added line 3");
console.log("Edited in browser");
const app= require('express')();
app.get('/',(req,res)=>{
    res.json({message:"server running"});
})

app.listen(7000,()=>{
    console.log("Hi")
    console.log("server running on 7000");
})
