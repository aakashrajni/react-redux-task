import { combineReducers } from 'redux'
import {
    ADD_VEHICLE,
    SELECT_VEHICLE,
    REQUEST_VEHICLES,
    RECEIVE_VEHICLES } from './actions'

export const initialState = {
    selectVehicle:{},
    vehicles:[]
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
            return Object.assign([],state,action.vehicles)
        case ADD_VEHICLE:
            let id = state.length+1;
            let stateCopy = state;
            let vehicleObj = {id:id,title:`vehicle ${id}`,driver: "ram"};
            return Object.assign([],state,stateCopy.push(vehicleObj))
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    selectVehicle,
    vehicles
  })
