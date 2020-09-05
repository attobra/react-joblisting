import {SEARCH_JOB, FETCH_JOBS, FETCH_JOB, LOADING} from '../actions/types'

//initial state is the state of the application
const initialState ={
    text: '',        //search text that you enter in the search box
    jobs: [],      //json data from the API
    loading: false,  //false or true depending on the data that is coming
    job: []        //json info from the API
}

//export create function that will test the action types
//DEPENDING on the action type, it will set the value of that action 
//(payload/data) set into a specific state

export default function (state=initialState, action){
    switch (action.type) {
        case SEARCH_JOB:
          return {
            ...state,
            text: action.payload,
            loading: false
          };
          case FETCH_JOBS:
          return {
            ...state,
            jobs: action.payload,
            loading: false
          };
          case FETCH_JOB:
          return {
            ...state,
            job: action.payload,
            loading: false
          };
          case LOADING:
          return {
            ...state,
            loading: true
          };
        default:
            return state;
        }
}