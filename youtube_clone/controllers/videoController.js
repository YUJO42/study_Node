export const home = (req, res) => res.render("home", { pageTitle: "HOME" });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const upload = (req, res) => {
  res.render("upload", { pageTitle: "UPLOAD" });
};
export const videoDetail = (req, res) => {
  return res.render("videoDetail", { pageTitle: "VIDEO DETAIL" });
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "VIDEO EDIT" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "DELETE VIDEO" });
