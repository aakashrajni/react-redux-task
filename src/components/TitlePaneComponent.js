import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { addVehicle } from '../stores/actions';

const TitlePaneComponent = ({dispatch})=>{
    return(
        <div className="titlePane">
            <h2>Vehicles List</h2>
            <div className="iconDiv"><i className="fa fa-sliders iconStyle"></i></div>
            <div className="iconDiv" onClick={()=>dispatch(addVehicle())}><i className="fa fa-plus iconStyle"></i></div>
        </div>
    );
}

export default TitlePaneComponent;