import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'

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

DetailPaneComponent.propTypes = {
    vehicleDetail: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        driver: PropTypes.string
    })
}

export default DetailPaneComponent;