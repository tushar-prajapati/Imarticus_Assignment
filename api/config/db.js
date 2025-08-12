import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Imarticus_LMS",
        })
        console.log("DB connected successfully")
    }catch (error){
        console.log(`ERROR: ${error.message}`)
        process.exit(1);
    }
}

export default connectDB;