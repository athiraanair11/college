const Bodyparser=require("body-parser")
const Express=require("Express")
const Cors=require("Cors")
const Mongoose=require("Mongoose")

var app=Express()


app.get("/",(req,res)=>{

    res.send("welcome to college website")
})

app.post("/studentadd",(req,res)=>{

    res.send("add student details")
})

app.post("/studentsearch",(req,res)=>{


    res.send("search student details")
})

app.post("/studentdelete",(req,res)=>{

    res.send("delete student details")
})

app.get("/studentviewall",(req,res)=>{

    res.send("viewall student details")
})

app.post("/facultyadd",(req,res)=>{

    res.send("add faculty")
})

app.post("/facultysearch",(req,res)=>{


    res.send("search faculty")
})

app.post("/facultydelete",(req,res)=>{

    res.send("delete faculty")
})

app.get("/facultyviewall",(req,res)=>{

    res.send("view all faculty")
})

app.listen(2000)