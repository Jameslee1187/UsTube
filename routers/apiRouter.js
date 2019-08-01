import express from "express";
import routes from "../routes";
import {} from "../controllers/videoController";
import { getEditProfile } from "../controllers/userController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, getEditProfile);

export default apiRouter;
