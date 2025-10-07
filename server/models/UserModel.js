import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    color: { type: Number, required: false },
    image:{type:String,required:false},
    profileSetup:{type:Boolean,required:false},
    email: { type: String, required: [true,"Email is required"], unique: true },
    password: { type: String, required: [true,"Password is required"] },
});