import React from 'react';
import '../App.css';
import { selectVehicle } from '../stores/actions';

const ListItemComponent = ({vehicle,selectedIndex,dispatch})=>{
    let activeCss = "";
    if(selectedIndex === vehicle.id)
        activeCss = "active";
    return(
        <div className={"listItemDiv "+activeCss} onClick={() => dispatch(selectVehicle(vehicle))}>
            <h2>{vehicle.title}</h2>
        </div>
    );
}

export default ListItemComponent;