import { combineReducers } from "redux";
import transportationReducer from "./transportationReducer";
import lookupReducer from "./lookupReducer";

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  companies: transportationReducer,
  selects: lookupReducer,
  form: formReducer,
});
