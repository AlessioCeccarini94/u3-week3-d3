import { configureStore } from "@reduxjs/toolkit"
import jobsReducer from "../reducers/jobReducer"
import favoriteReducer from "../reducers/favoriteReducer"

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    favorites: favoriteReducer,
  },
})

export default store
