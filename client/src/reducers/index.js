import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";
 
const rootReducer = combineReducers({
  contacts: contactsReducer
//   organizations: organizationsReducer,
});
 
export default rootReducer;