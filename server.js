import app from './app.js'
import { config } from 'dotenv'
import ConnectDatabase from './datas/connectDatabase.js'

/**
 * Run dot env config file
 */

config({
    path: "./datas/.env"
})


/**
 * DATABASE NAME
 */
const DB_NAME = 'TODOS'

/**
 * Connect Database
 */

ConnectDatabase(process.env.DATABASE_URI, DB_NAME)

/**
 * Listen the app
 */

app.listen(process.env.PORT, () => {
    console.log(`SERVER IS RUNNING ON ${process.env.PORT} IN ${process.env.NODE_ENV}...`)
})