import TASK from '../models/task.model.js'
import { response } from '../utils/response.js'


/**
 * Get all task
 */

export const GetAllTask = async(req, res) => {
    /**
     * Surround with try catch block
     */

    try {

        /**
         * Get id of user
         */

        const { _id } = req.user


        /**
         * Fetch all task
         */

        const tasks = await TASK.find({user_id:_id})
        /**
         * send response
         */
        response(res,200,true,tasks)
    } catch (error) {

    }
}

/**
 * Create task
 */

export const CreateTask = async (req, res) => {

    /**
     * Surround everything with try catch block
     */

    try {
        /**
         * Get details about task
         */

        const { title, description } = req.body
        const user_id = req.user._id

        /**
         * Create task in database
         */

        const taskCreated = await TASK.create({ title, description, user_id })


        /**
         * Send response
         */

        response(res, 201, true, "Task created successfully")

    } catch (error) {
        /**
         * send response if any error occurs
         */

        response(res, 404, false, "Task not created")
    }
}

/**
 * Update task
*/

export const UpdateTask = async(req, res) => {
    try {
        
        /**
         * get task id
         */

        const {_id} = req.body
    
        /**
         * update the task 
         */

        const task = await TASK.findById(_id);
        task.isCompleted = !task.isCompleted;
        task.save()

        /**
         * send response
         */

        response(res,201,true,"successfully updated")
        
    } catch (error) {
        
        response(res,404,false,"not updated")
    }
}
/**
 * Delete task
*/

export const DeleteTask = async(req, res) => {
    try {
        
        /**
         * Get task id
         */
        
        // const taskId = "643a355e8c9fd5e8f1947377"
        const {_id} = req.body;


        /**
         * Delete task
         */
        
        const deleted = await TASK.deleteOne({_id})


        /**
         * Send response
         */

        response(res,200,true,"successfully deleted")
    } catch (error) {

        response(res,200,false,"not deleted")
        
    }
}
