import express from "express"
import "dotenv/config";
import cors from "cors"
const app = express();
const port = process.env.PORT || 6000;
import mydb from "./database/db.js";


await mydb();


app.use(cors({
         origin:"http://localhost:5173",
         credentials:true
}))

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hy i am there to help you remember i am the universe !");
})



//Routers
import userrouter from "./routes/Userroute.js";
app.use("/user",userrouter);



app.listen(port,()=>{
    console.log(`App is listening at ${port}`);
})



export default app;