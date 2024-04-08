const User=require("../models/user")
async function HandleAllUser(req,res)
{
    const allDbUsers=await User.find({})
    return res.json(allDbUsers);
}
async function GetUserById(req,res)
{
    const user=await User.findById(req.params.id)
    if(!user)return res.status(404).json({error:"not found"})
    return res.json(user);
}
async function UpdateUserById(req,res)
{
    await User.findByIdAndUpdate(req.params.id,{lasttName:"changed"})
    return res.json({ status: "sucess" });
}
async function DeleteUserById(req,res)
{
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "sucess" });
}
async function CreateUser(req,res)
{
    const body=req.body;
    if(!body ||!body.first_name ||!body.last_name||!body.email||!body.gender)
    {
      return res.status(400).json({msg:"fill all fields"})
    }
  
    // users.push({
    //     first_name: body.first_name,
    //     last_name: body.last_name,
    //     email: body.email,
    //     gender: body.gender,
    //     ip_address: body.ip_address
    // })
    // users.push({...body,id:users.length+1})
    // fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>
    // {
    //     return res.status(201).json({ status: "sucess" ,id:users.length});
    // })
  const result=await User.create({
    firstName:body.first_name,
    lastName:body.last_name,
    email:body.email,
    gender:body.gender
  })
 
 return res.status(201).json({msg:"sucess",id:result._id})

}
module.exports={
    HandleAllUser,
    GetUserById,
    UpdateUserById,
    DeleteUserById,
    CreateUser
}