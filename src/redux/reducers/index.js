const initialState = {
  jobs: {
    content: [],
  },
}
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: [...state.jobs.content, action.payload],
        },
      }
    case "REMMOVE_FAVORITE":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: state.jobs.content.filter((job) => {
            return job !== action.payload
          }),
        },
      }
    default:
      return state
  }
}
export default jobsReducer
