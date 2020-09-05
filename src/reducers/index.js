import {combineReducers} from 'redux'
import searchReducer from './searchReducer'

export default combineReducers({
    //jobs will take its value or its state from searchReducer
    jobs: searchReducer
  });