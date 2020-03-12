import { rootReducer } from '../reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'

export const store = createStore(rootReducer, applyMiddleware(thunk))

