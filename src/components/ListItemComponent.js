import React from 'react';
import PropTypes from 'prop-types'
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

ListItemComponent.propTypes = {
    vehicle: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        driver: PropTypes.string.isRequired
    }).isRequired,
    selectedIndex: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

export default ListItemComponent;