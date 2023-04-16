import jwt from 'jsonwebtoken';
import USER from '../models/user.model.js'
import { response } from '../utils/response.js';
import bcrypt from "bcrypt"


/**
 * Login
 */

export const loginUser = async (req, res) => {
    try {
        /**
         * check user is already login
         */

        if (req.cookies.token) {
            return response(res, 404, false, "Already login")
        }

        /**
         * Get email and password
         */

        const { email, password } = req.body


        /**
         * Check email exist in database or not
         */

        const isUser = await USER.findOne({ email: email });

        if (!isUser) {
            /**
             * send error
             */
            return response(res, 404, false, "user not exist")
        }

        /**
         * Check password is correct or not
         */

        const isMatch = bcrypt.compare(password,isUser.password)

        if (isMatch) {
            /**
             * Encrypt id
             */

            const token = jwt.sign({ "token": isUser._id }, process.env.JWT_SECRET)


            /**
             * Set cookie
             */


            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60,
                SameSite: process.env.NODE_ENV === "Development" ? "lax" : "node",
                secure: process.env.NODE_ENV === "Development" ? false : true,
            })


            /**
             * Send response
             */

            return response(res, 200, true, `Welcome back ${isUser.name}`)

        } else {
            return response(res, 404, false, "incorrect password")
        }



    } catch (error) {
        console.log(error)
        return response(res, 404, false, "id or password maybe incorrect")
    }
}



/**
 * Logout
 */



export const logout = (req, res, next) => {
    try {
        /**
         * Delete cookie
         */
        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(Date.now()),
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "node",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        })

        /**
         * send response
         */

        response(res, 200, true, "successfully logout")

    } catch (err) {
        console.log(err)
    }
}


/**
 * CREATE USER (REGISTER USER)
 */

export const CreateUser = async (req, res) => {
    /**
     * Surround everything with try catch block
     */
    try {

        /**
         * Get all necessary details
         */

        const { name, email, password } = req.body

        /**
         * Encrypt password
         */

        const encrypedPassword = bcrypt.hash(password,10)

        /**
         * Create User in database
         */

        const userCreated = await USER.create({ name, email, password })



        /**
         * send response
         */

        response(res, 201, true, "user created successfully")

    } catch (error) {
        response(res, 404, false, "user is already registered")
    }

}


/**
 * UPDATE USER
 */

export const UpdateUser = (req, res) => {

}


/**
 * DELETE USER
*/
export const DeleteUser = (req, res) => {

}


/**
 * GET USER
 */

export const GetUser = (req, res) => {

}

/**
 * GET ALL USER
*/
export const GetAllUser = (req, res) => {

}