
// action types

export const SELECT_VEHICLE = 'SELECT_VEHICLE';
export const REQUEST_VEHICLES = 'REQUEST_VEHICLES';
export const RECEIVE_VEHICLES = 'RECEIVE_VEHICLES';
export const GET_NEXT_VEHICLES = 'GET_NEXT_VEHICLE';
export const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT';


// action Creators

export function selectVehicle(vehicle){
    return { type: SELECT_VEHICLE, vehicle }
}

export function requestVehicles(){
    return { type: REQUEST_VEHICLES}
}

export function nextPageVehicles(){
  return { type: GET_NEXT_VEHICLES }
}

export function getTotalCount(page,count){
  return { type: GET_TOTAL_COUNT, count, page }
}

export function receiveVehicles(json) {
  return {
    type: RECEIVE_VEHICLES,
    vehicles:  json 
  }
}

export function fetchVehicles(page) {
  
    return function (dispatch) {

      dispatch(requestVehicles())
  
      return fetch(`http://localhost:3000/vehicles?_page=${page}`)
        .then(
          (response) => {
            var json = response.json()
            var totalCount = response.headers.get("X-Total-Count");
            dispatch(getTotalCount(page,totalCount))
            return json
          }
        )
        .then(json =>
          dispatch(receiveVehicles(json))
        )
    }
  }

export function postVehicles() {
  
    return function (dispatch) {
  
      return fetch(`http://localhost:3000/vehicles`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:Math.floor((Math.random() * 10000) + 2020),title:`vehicle ${Math.floor((Math.random() * 10000) + 2020)}`,driver: "ganesh"})
      })
        .then(
          (response) => {
            var json = response.json()
            return json
          }
        )
    }
  }