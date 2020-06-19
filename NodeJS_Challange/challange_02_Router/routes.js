const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const CONFIRM = "/confirm-account";

const COURSES = "/courses";
const COURSES_NEW = "/new";
const COURSES_MINE = "/mine";

const API = "/api";
const API_DOC = "/documentation";
const API_BUY = "/v1/buy";
const API_REFUND = "/v1/refund";
const API_REMOVE = "/v2/remove";
const API_EDIT = "/v2/edit";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  confirm: CONFIRM,

  courses: COURSES,
  newCourses: COURSES_NEW,
  myCourses: COURSES_MINE,

  api: API,
  doc: API_DOC,
  buy: API_BUY,
  refund: API_REFUND,
  remove: API_REMOVE,
  edit: API_EDIT,
};

export default routes;
