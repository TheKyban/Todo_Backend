import express from "express"
import { CreateUser, loginUser, logout } from "../controllers/controller.user.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { response } from "../utils/response.js";

/**
 * Express Router
 */

const Router = express.Router();

/**
 * GET
 */

Router.get("/logout", logout) // logout

// Router.get("/",GetUser)
// Router.get('/all',GetAllUser)



/**
 * POST
 */

Router.post("/new", CreateUser) // register new user
Router.post("/login", loginUser, isAuthenticated) //login user



/**
 * PUT
 */

// Router.put("/update",UpdateUser)


/**
 * DELETE
 */

// Router.delete('/delete',DeleteUser)


/**
 * EXPORT ROUTER
 */

export default Router