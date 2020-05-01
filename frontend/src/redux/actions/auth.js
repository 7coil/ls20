import fetch from 'isomorphic-fetch';
import { getApiServer } from '../../enum/Links'

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
    let token;

    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('token')) {
        token = urlParams.get('token');
        urlParams.delete('token');
        window.localStorage.setItem('token', token);
        window.location.search = `?${urlParams.toString()}`
      } else {
        token = window.localStorage.getItem('token');
      }
    }

    dispatch(requestAuth());
    return fetch(`${getApiServer()}/auth/me`, {
      headers: {
        'Authorization': token
      }
    })
      .then(res => res.json())
      .then(json => dispatch(receiveAuth(json)))
  }
}

const canFetchAuth = () => {
  if (typeof window === 'undefined') return false
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
