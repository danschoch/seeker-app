export default function contactsReducer(state = { loading: false, contactList: [] }, action) {
    switch (action.type) {
      
      case 'ADD_CONTACT':
        return { ...state, contactList: state.contactList.concat(action.payload) };
      
      case "LOADING_CONTACTS":
        return Object.assign({}, state, {loading: true})
   
      case "FETCH_CONTACTS":
        return {loading: false, contactList: action.payload}
   
      default:
        return state;
    }
}