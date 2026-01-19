import mongoose from "mongoose";


const ConnectDb = async ()=>{
    try {

        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB connnected !");
        
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default ConnectDb;