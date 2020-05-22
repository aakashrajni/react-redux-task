
// action types

export const ADD_VEHICLE = 'ADD_VEHICLE';
export const SELECT_VEHICLE = 'SELECT_VEHICLE';
export const REQUEST_VEHICLES = 'REQUEST_VEHICLES';
export const RECEIVE_VEHICLES = 'RECEIVE_VEHICLES';


// action Creators

export function addVehicle(){
    return { type: ADD_VEHICLE }
}

export function selectVehicle(vehicle){
    return { type: SELECT_VEHICLE, vehicle }
}

export function requestVehicles(){
    return { type: REQUEST_VEHICLES}
}

export function receiveVehicles(json) {
  return {
    type: RECEIVE_VEHICLES,
    vehicles:  json 
  }
}

export function fetchVehicles() {
  
    return function (dispatch) {
  
      dispatch(requestVehicles())
  
      return fetch(`http://localhost:3000/vehicles`)
        .then(
          response => response.json()
        )
        .then(json =>
          dispatch(receiveVehicles(json))
        )
    }
  }