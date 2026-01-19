import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Age: {
        type: Number,
        min: 18
    },
    
    Password:{
        type: String
    }
})

const UserModel = mongoose.model("User", userSchema)

export default UserModel;