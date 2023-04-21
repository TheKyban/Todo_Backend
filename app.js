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
    origin: [process.env.FRONTEND_URL],
    credentials:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())




app.get("/",(req,res)=>{
    res.send("/task,/user,/user/login,/user/new,/user/logout")
})
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
