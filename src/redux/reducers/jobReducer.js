import {
  GET_JOBS,
  GET_SEARCH,
  SEARCH_RESULTS_LOADING,
  SEARCH_RESULTS_ERROR,
} from "../actions"

const initialState = {
  content: [],
  loading: false,
  error: false,
}
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      }
    case GET_SEARCH:
      return {
        ...state,
        content: action.payload,
      }
    case SEARCH_RESULTS_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    case SEARCH_RESULTS_ERROR:
      return {
        ...state,
        error: !state.error,
      }
    default:
      return state
  }
}

export default jobsReducer
