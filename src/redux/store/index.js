import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favReducer from '../reducers/favReducer'
import jobReducer from '../reducers/jobReducer'

const mainReducer = combineReducers({
  favourites: favReducer,
  jobs: jobReducer,
})

const myReduxStore = configureStore({
  reducer: mainReducer,
})

export default myReduxStore
