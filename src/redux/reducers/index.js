import { combineReducers } from 'redux';
import changeTopPanel from './changeTopPanel'
import changeLeftPanel from './changeLeftPanel'
import getData from './getData'
import loadButton from './loadButton'

export const rootReducer = combineReducers({
  changeTopPanel,
  changeLeftPanel,
  getData,
  loadButton
})