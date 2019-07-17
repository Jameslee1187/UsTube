import multer from "multer";
import routes from "./routes";

const multerVideo = multer({
  dest: "uploads/videos/"
});
// each video uploaded creates a folder at uploads/videos and gives it a unique id
// we need to give access to the video files in app with routes
const multerAvatar = multer({
  dest: "uploads/avatars/"
});
//  multer is a middleware that gives a url for the file
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "UsTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
export const uploadVideo = multerVideo.single("videoFile");
// - videoFile is the multer file that matches the videoController(uploadVideo)
// - single means it will only upload 1 file

export const uploadAvatar = multerAvatar.single("avatar");
