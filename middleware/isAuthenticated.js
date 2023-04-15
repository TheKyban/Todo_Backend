import { response } from "../utils/response.js";
import jwt from 'jsonwebtoken';


export default (req,res,next) => {
    /**
     * Get token from cookie
     */
    const {token} = req.cookies;

    /**
     * check token is available in cookie 
     */
    if (!token) {
        return response(res,404,false,"Login first")
    }

    /**
     * Set token for all
     */

    /**
     * Decrypt token
     */

    const decryptedToken = jwt.verify(token,process.env.JWT_SECRET)
    req.user = {_id:decryptedToken.token}
    next()
}