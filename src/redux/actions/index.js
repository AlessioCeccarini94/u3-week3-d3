export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const GET_JOBS = "GET_JOBS"
export const GET_SEARCH = "GET_SEARCH"
export const GET_RESULTS = "GET_RESULTS"
export const SEARCH_RESULTS_LOADING = "SEARCH_RESULTS_LOADING"
export const SEARCH_RESULTS_ERROR = "SEARCH_RESULTS_ERROR"
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

export const addToFavoritesAction = (company) => {
  return {
    type: ADD_FAVORITE,
    payload: company,
  }
}

export const removeFromFavoritesAction = (company) => {
  return {
    type: REMOVE_FAVORITE,
    payload: company,
  }
}

export const getJobsAction = () => {
  return (dispatch, getState) => {
    const state = getState()
    console.log(state)

    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?company="
    fetch(baseEndpoint)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error fetching jobs")
        }
      })
      .then((jobs) => {
        dispatch({
          type: GET_JOBS,
          payload: jobs,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
export const getSearchAction = (query) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    dispatch({
      type: SEARCH_RESULTS_LOADING,
    })
    fetch(baseEndpoint + query + "&limit=20")
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error fetching jobs")
        }
      })
      .then((resultsData) => {
        console.log(resultsData)
        dispatch({
          type: GET_SEARCH,
          payload: resultsData.data,
        })
        dispatch({
          type: SEARCH_RESULTS_LOADING,
        })
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: SEARCH_RESULTS_ERROR,
        })
        dispatch({
          type: SEARCH_RESULTS_LOADING,
        })
      })
  }
}
