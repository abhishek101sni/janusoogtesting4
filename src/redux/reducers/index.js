import { combineReducers } from "redux";

import { OutdoorReducer } from "./Outdoor";
import { HomeReducer } from "./Home";
import { BlogReducer } from "./Blog";

const rootReducer = combineReducers({
  OutdoorReducer,
  HomeReducer,
  BlogReducer
});

export default rootReducer;
