import React from 'react';
import '../App.css';
import ListItem from './ListItemComponent';

const ListPaneComponent = ({vehicles,selectedIndex,dispatch})=>{
    return(
        <div className="listPane">
            {
                vehicles.map((vehicle)=>{
                    return <ListItem key={vehicle.id} id={vehicle.id} vehicle={vehicle} dispatch={dispatch} selectedIndex={selectedIndex}/>
                })
            }
        </div>
    );
}

export default ListPaneComponent;