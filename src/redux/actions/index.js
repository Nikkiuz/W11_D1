export const ADD_TO_FAV = 'ADD_TO_FAV'
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV'
export const SET_USERNAME = 'SET_USERNAME'
export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'

const baseEndpoint = `https://strive-benchmark.herokuapp.com/api/jobs?search=`

export const addToFavAction = (data) => {
  return {
    type: ADD_TO_FAV,
    payload: data.company_name,
  }
}

export const removeFromFavAction = (i) => {
  return {
    type: REMOVE_FROM_FAV,
    payload: i,
  }
}

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(baseEndpoint + query + '&limit=20')
      if (resp.ok) {
        const fetchedJobs = await resp.json()
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs,
        })
      } else {
        throw new Error('Errore nella richiesta')
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_JOBS_ERROR,
        payload: error,
      })
    }
  }
}