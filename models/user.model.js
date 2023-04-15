import mongoose from "mongoose"

/**
 * Schema for User
 */

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})

/**
 * Exporting Model for User
 */

export default mongoose.model("USER",userSchema)