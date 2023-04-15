import express from "express"
import { CreateTask, DeleteTask, GetAllTask, UpdateTask } from "../controllers/controller.task.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

/**
 * Express Router
 */

const Router = express.Router();

/**
 * GET
 */

Router.get("/all",isAuthenticated,GetAllTask)


/**
 * POST
 */

Router.post("/create",isAuthenticated,CreateTask)


/**
 * PUT
 */

Router.put("/update",isAuthenticated,UpdateTask)


/**
 * DELETE
 */

Router.delete("/delete",isAuthenticated,DeleteTask)



/**
 * export router
 */

export default Router;