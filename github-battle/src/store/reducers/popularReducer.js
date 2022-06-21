import * as actionTypes from '../actions/actionTypes'

const initialState = {
  repos: [],
  language: null
}

const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_REPOS:
      return {
        ...state,
        repos: action.payload.repos,
      }
    case actionTypes.NO_REFETCH_NEEDED:
      return state
    default:
      return state
  }
}

export default popularReducer