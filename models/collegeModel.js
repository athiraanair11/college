const Mongoose=require("mongoose")
let schema=Mongoose.Schema(
    {
        studentName:String,
        studentAge:String,
        studentId:String,
        studentCollege:String,
        facultyName:String,
        facultyId:String,
        facultyCourse:String
    }

   
)

let collegeModel=Mongoose.model("students",schema)
module.exports=collegeModel
