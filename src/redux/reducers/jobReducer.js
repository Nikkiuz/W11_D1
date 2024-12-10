import { GET_JOBS, GET_JOBS_ERROR } from "../actions"


const initialState = {
    jobResult: [],
    isError: false
  }

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobResult: action.payload, // l'array proveniente dalla fetch()
      }

    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: true,
      }

    default:
      return state
  }
}

export default jobReducer