import * as actionTypes from '../actions/actionTypes'

const initialState = {
  citiesToVisit: ["Paris"],
  user: {
    connected: false,
    userToken: ""
  }
}

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CITY: // Par convention, on écrit les action type en lettres capitales
      return {
        ...state, citiesToVisit: [...state.citiesToVisit, action.payload],
      }
    case actionTypes.REMOVE_CITY:
      return {
        ...state, citiesToVisit: state.citiesToVisit.filter(c => c !== action.payload), // Attention, avec filter, on supprime tous les éléments qui ont le même nom
      }
    default:
      return state
  }
}

export default citiesReducer