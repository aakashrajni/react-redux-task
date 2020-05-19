import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';

function TitlePaneComponent(){
    return(
        <div className="titlePane">
            <h2>Vehicles</h2>
            <div className="iconDiv"><i className="fa fa-sliders iconStyle"></i></div>
            <div className="iconDiv"><i class="fa fa-plus iconStyle"></i></div>
        </div>
    );
}

export default TitlePaneComponent;