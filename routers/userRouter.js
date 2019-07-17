import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  getChangePassword,
  postEditProfile,
  postChangePassword
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();
// -editProfile needs to be above user detail because
// -it will go to id before editprofile if it isn't in the right order
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);
userRouter.get(routes.userDetail(), userDetail);
// -userDetail() gets executed as a function because there is a conditional running on routes.
// -it makes sure there is a user that exists

export default userRouter;
