import React from 'react';
import '../App.css';

const DetailPaneComponent = ({vehicleDetail}) => {
    const isVehicleSelected = !(Object.keys(vehicleDetail).length === 0);
    return(
        <div className="detailPane">
            <h2>Vehicle Details</h2>
            {
                isVehicleSelected
                ? <><div>Id: {vehicleDetail.id}</div><div>Vehicle Name: {vehicleDetail.title}</div><div>Driver: {vehicleDetail.driver}</div></>
                : <div>choose an active vehicle</div>
            }
        </div>
    );
}

export default DetailPaneComponent;