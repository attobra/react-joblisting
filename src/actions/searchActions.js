import { SEARCH_JOB, FETCH_JOBS, FETCH_JOB, LOADING } from "./types";
import axios from "axios";

//dispatch is coming from the redux-thunk middleware
export const searchJob = (text) => (dispatch) => {
  //when something is triggered in our App, an action is dispatched
  //dispatch the action TYPE and the PAYLOAD that will make the reducer
  //recognize our action
  dispatch({
    type: SEARCH_JOB,
    payload: text,
  });
};

//HTTP request with AXIOS
//https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${text}&full_time=true&location=sf
export const fetchJobs = (text) => (dispatch) => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${text}`
    )
    .then((response) =>
      dispatch({
        type: FETCH_JOBS,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};
//https://jobs.github.com/positions/04206897-960f-466f-b80f-f2bf88c4f472.json
//https://jobs.github.com/positions/${id}.json
export const fetchJob = (id) => (dispatch) => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
    )
    .then((response) =>
      dispatch({
        type: FETCH_JOB,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};
export const setLoading = () => {
  return {
    type: LOADING,
  };
};
