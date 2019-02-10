import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";
import organizationsReducer from "./organizationsReducer";
 
const rootReducer = combineReducers({
  contacts: contactsReducer,
  organizations: organizationsReducer
});
 
export default rootReducer;