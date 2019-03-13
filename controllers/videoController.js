export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
  const searchingBy = req.query.term;
  console.log(req);
  res.render("Search", { pageTitle: "Search", searchingBy: searchingBy });
};
export const videos = (req, res) =>
  res.render("Videos", { pageTitle: "Videos" });
export const upload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("Video Detail", { pageTitle: "Video Details" });
export const editVideo = (req, res) =>
  res.render("Edit Video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("Delete Video", { pageTitle: "Delete Videos" });
