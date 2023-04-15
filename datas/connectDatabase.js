import mongoose from "mongoose";

/**
 * DATABASE CONNECTION
 */

export default (DB_URI,DB_NAME)=> {mongoose.connect(`${DB_URI}${DB_NAME}`).then(()=>console.log('DATABASE CONNECTED...')).catch((err)=>{console.log('DATABASE NOT CONNECTED...')
console.log(err)})}