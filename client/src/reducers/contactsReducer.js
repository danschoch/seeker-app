export default function contactsReducer(state = { loading: false, contacts: [] }, action) {
    switch (action.type) {
      case "LOADING_CONTACTS":
        return Object.assign({}, state, {loading: true})
   
      case "FETCH_CONTACTS":
        return {loading: false, contacts: action.payload}
   
      default:
        return state;
    }
}