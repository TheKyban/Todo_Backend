import express from 'express'
import UserRouter from './routes/user.router.js';
import TaskRouter from './routes/task.router.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

/**
 * Create Server app
 */

const app = express()


/**
 * app uses
 */


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())





/**
 * Stich user Router to the app
 */


app.use("/user", UserRouter)




/**
 * Stich task Router to the app
 */

app.use("/task", TaskRouter)


/**
 * Export the app
 */

export default app;