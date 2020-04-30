import fetch from 'isomorphic-fetch';

export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECEIVE_AUTH = 'RECEIVE_AUTH';

const requestAuth = () => {
  return {
    type: REQUEST_AUTH
  }
}

const receiveAuth = (data) => {
  return {
    type: RECEIVE_AUTH,
    data
  }
}

const fetchAuth = () => {
  return (dispatch) => {
    dispatch(requestAuth());
    return fetch('http://127.0.0.1:1234/auth/me', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
  }
}

const canFetchAuth = () => {
  if (typeof window === 'undefined') return false
  if (!window?.localStorage?.getItem('token')) return false
  return true;
}

const shouldFetchAuth = (state) => {
  if (!canFetchAuth()) return false
  if (state.auth.fetching) return false
  if (state.auth.fetched) return false
  return true
}

const fetchAuthIfRequired = () => {
  return (dispatch, getState) => {
    if (shouldFetchAuth(getState())) {
      return dispatch(fetchAuth())
    }
  }
}

const fetchAuthIfPossible = () => {
  return (dispatch) => {
    if (canFetchAuth()) {
      return dispatch(fetchAuth())
    }
  }
}

export {
  fetchAuthIfRequired,
  fetchAuthIfPossible
}
