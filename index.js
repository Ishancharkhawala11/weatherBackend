const express = require("express");

const {connectMongo}=require("./config/connection")

const {middle}=require("./middlewares/index")
const userRoute=require("./routes/user")
const app = express();
const PORT = 2000;
connectMongo("mongodb://localhost:27017/Ishan").then(()=>console.log("mongodb connected"))

app.use(express.urlencoded({extended:false}))
app.use(middle('log.txt'))
app.use("/api/user",userRoute)

app.listen(PORT, () => console.log(`server connected ${PORT}`));
