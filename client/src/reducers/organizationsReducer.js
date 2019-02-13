export default function organizationsReducer(state = { loading: false, orgsList: [] }, action) {
    switch (action.type) {
      case 'ADD_ORGANIZATION':
        return { ...state, orgsList: state.orgsList.concat(action.payload) };

      case "LOADING_ORGANIZATIONS":
        return Object.assign({}, state, {loading: true})
   
      case "FETCH_ORGANIZATIONS":
        return {loading: false, orgsList: action.payload}
   
      default:
        return state;
    }
}