import mongoose from 'mongoose'

/**
 * Schema for task
 */

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"USER"
    }
})

/**
 * Model for Task
 */

export default mongoose.model("TASK",taskSchema)