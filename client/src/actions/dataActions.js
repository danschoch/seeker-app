export function fetchOrganizations() {
    
    return (dispatch) => {
      dispatch({ type: 'LOADING_ORGANIZATIONS' });
      return fetch('/organizations', { headers: {"X-Key-Inflection": "camel"} } ).then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'FETCH_ORGANIZATIONS', payload: responseJSON})
      })
    };
}

export function fetchContacts() {
    
    return (dispatch) => {
      dispatch({ type: 'LOADING_CONTACTS' });
      return fetch('/contacts', { headers: {"X-Key-Inflection": "camel"} } )
      .then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'FETCH_CONTACTS', payload: responseJSON})
      })
    };
}

export function addContact(data) {

  return (dispatch) => {
    return fetch('/contacts', {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-Key-Inflection": "camel"
        },
        body: JSON.stringify(data)
    }).then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({type: 'ADD_CONTACT', payload: responseJSON})
    });
  }
}