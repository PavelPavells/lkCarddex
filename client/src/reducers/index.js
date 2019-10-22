import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import projectsReducer from "./projectsReducer";
import tasksReducer from "./tasksReducer";
import accountReducer from "./accountReducer";
import auth0Reducer from "./auth0Reducer";
import newsReducer from "./newsReducer";
import controlReducer from "./controlReducer";
import priceListReducer from "./priceListReducer";
import salesReducer from "./salesReducer";
export default combineReducers({
  auth: authReducer,
  auth0: auth0Reducer,
  errors: errorReducer,
  news: newsReducer,
  control: controlReducer,
  priceList: priceListReducer,
  sales: salesReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  account: accountReducer
});