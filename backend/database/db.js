import mongoose from "mongoose";
import "dotenv/config"
const URI = process.env.MONGO_URI;
const db  = process.env.DBNAME;


const  mydb = async()=>{
    try{
    mongoose.connect(`${URI}/${db}`,{
        useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=> console.log("We are connected"))
   
    
}catch(error){
    console.log("There is somerror occuring ",error);
}
}

export default mydb;