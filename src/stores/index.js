import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { initialState, rootReducer } from './reducers'

const loggerMiddleware = createLogger()

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware 
  )
)
