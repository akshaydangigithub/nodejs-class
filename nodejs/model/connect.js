import mongoose from "mongoose";

async function ConnectToDb(){
    try {

        await mongoose.connect(process.env.MONGO_URL)

        console.log("DB Connected Successfully");
        
        
    } catch (error) {
        console.log("Connection Refused", error.message);
        process.exit(1);
    }
}

export default ConnectToDb;