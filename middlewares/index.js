const fs=require("fs")
function middle(fileName)
{
    return (req,res,next)=>{
        fs.appendFile(fileName,`\n${Date.now()}:${req.ip}:${req.path}}\n`,(err,data)=>
        {
            next()
        })
        
    }
}
module.exports={middle}