import React, { useCallback } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import '../App.css';
import ListItem from './ListItemComponent';
import { nextPageVehicles,fetchVehicles } from '../stores/actions';
 
const ListPaneComponent = ({vehicles, selectedIndex, pageCount, dispatch, endOfPost})=>{

    const callback = useCallback(()=>{
        if(!endOfPost){
            dispatch( nextPageVehicles() );
            dispatch( fetchVehicles(pageCount) );
        }
    },[dispatch,pageCount,endOfPost]);

    const containerRef = useBottomScrollListener(callback);

    return(
        <div ref={containerRef} className="listPane">
            {
                vehicles.map((vehicle)=>{
                    return <ListItem key={vehicle.id} id={vehicle.id} vehicle={vehicle} dispatch={dispatch} selectedIndex={selectedIndex}/>
                })
            }
        </div>
    );
}

export default ListPaneComponent;