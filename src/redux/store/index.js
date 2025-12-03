import { configureStore } from "@reduxjs/toolkit"
import jobsReducer from "../reducers"

const store = configureStore({
  reducer: jobsReducer,
})

export default store
