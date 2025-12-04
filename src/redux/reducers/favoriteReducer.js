import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions"

const initialState = {
  content: [],
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        content: state.content.filter((company) => company !== action.payload),
      }
    default:
      return state
  }
}

export default favoriteReducer
