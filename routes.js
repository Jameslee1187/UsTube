// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

const FB = "/auth/facebook";
const FB_CALLBACK = "/auth/facebook/callback";

// API

const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    }
    return USER_DETAIL;
  },
  // -Making a function out of this because while express needs the id to know which users it is using
  // - The HTML doesn't show the actual id, it shows :id. This function will give the actual ids
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return `/videos/${id}`;
    }
    return VIDEO_DETAIL;
  },
  // -Making a function out of this because while express needs the id to know which users it is using
  // - The HTML doesn't show the actual id, it shows :id. This function will give the actual ids
  editVideo: id => {
    if (id) {
      return `/videos/${id}/edit`;
    }
    return EDIT_VIDEO;
  },
  // -Making a function out of this because while express needs the id to know which users it is using
  // - The HTML doesn't show the actual id, it shows :id. This function will give the actual ids
  deleteVideo: id => {
    if (id) {
      return `/videos/${id}/delete`;
    }
    return DELETE_VIDEO;
  },
  // -Making a function out of this because while express needs the id to know which users it is using
  // - The HTML doesn't show the actual id, it shows :id. This function will give the actual ids
  gitHub: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  me: ME,
  facebook: FB,
  facebookCallback: FB_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW,
  addCommment: ADD_COMMENT
};

export default routes;
