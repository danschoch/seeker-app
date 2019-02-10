export function fetchOrganizations() {
    
    return (dispatch) => {
      dispatch({ type: 'LOADING_ORGANIZATIONS' });
      return fetch('/contacts').then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'FETCH_ORGANIZATIONS', payload: responseJSON})
      })
    };
}