import React, { useCallback } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import PropTypes from 'prop-types'
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

ListPaneComponent.propTypes = {
    vehicles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            driver: PropTypes.string.isRequired
        }).isRequired
    ),
    selectedIndex: PropTypes.number,
    pageCount: PropTypes.number.isRequired,
    endOfPost: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default ListPaneComponent;