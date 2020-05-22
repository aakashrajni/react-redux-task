import { combineReducers } from 'redux'
import {
    SELECT_VEHICLE,
    REQUEST_VEHICLES,
    RECEIVE_VEHICLES,
    GET_NEXT_VEHICLES,
    GET_TOTAL_COUNT } from './actions'

export const initialState = {
    pageCount: 2,
    endOfPost: false,
    selectVehicle:{},
    vehicles:[]
}

function pageCount(state=initialState,action){
    switch (action.type) {
        case GET_NEXT_VEHICLES:
            return ++state
        default:
            return state 
    }
}

function endOfPost(state=initialState,action){
    switch (action.type) {
        case GET_TOTAL_COUNT:
            if(Math.floor(action.count/10)+1 === action.page)
                return true
            return state
        default:
            return state 
    }
}

function selectVehicle(state=initialState,action){
    switch (action.type) {
        case SELECT_VEHICLE:
          return Object.assign({},state,action.vehicle)
        default:
          return state
      }
}

function vehicles(state=initialState,action){
    switch (action.type){
        case REQUEST_VEHICLES:
            return state
        case RECEIVE_VEHICLES:
            return Object.assign([],state).concat(action.vehicles)
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    selectVehicle,
    vehicles,
    pageCount,
    endOfPost
  })
