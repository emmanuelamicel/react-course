import { fetchPopularRepos } from '../../utils/api'
import * as actionTypes from './actionTypes'

// Cities
export const addCity = city => ({
  type: actionTypes.ADD_CITY,
  payload: city
})

export const asyncAddCity = city => {
  console.log("Début traitement asynchrone")
  return dispatch => [
    setTimeout(() => {
      console.log("Fin traitement asynchrone")
      dispatch({
        type: actionTypes.ADD_CITY,
        payload: city
      })
    }, 1000)
  ]
}

export const removeCity = city => ({
  type: actionTypes.REMOVE_CITY,
  payload: city
})

// Popular
export const storeRepos = repos => {
  return {
    type: actionTypes.STORE_REPOS,
    payload: {
      repos: repos,
    }
  }
}

export const fetchRepos = () => {
  return async (dispatch, getState) => {
    const res = await fetchPopularRepos()
    dispatch(storeRepos(res))
  }
}