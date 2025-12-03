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
          content: state.jobs.content.filter(
            (job) => job.id !== action.payload.id
          ),
        },
      }
    default:
      return state
  }
}
export default jobsReducer
