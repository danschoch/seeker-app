export function fetchContacts() {
    
    return (dispatch) => {
      dispatch({ type: 'LOADING_CONTACTS' });
      return fetch('/contacts').then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'FETCH_CONTACTS', payload: responseJSON})
      })
    };
  }