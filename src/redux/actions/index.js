export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const GET_JOBS = "GET_JOBS"

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
