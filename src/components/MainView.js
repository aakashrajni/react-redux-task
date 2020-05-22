import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import TitlePane from './TitlePaneComponent';
import ListPane from './ListPaneComponent';
import DetailPane from './DetailPaneComponent';
import { fetchVehicles } from '../stores/actions';
import { store } from '../stores';

const MainView = (props) => {

  const { vehicles, selectVehicle } = props;  
  useEffect(()=>{
    store.dispatch(fetchVehicles()).then(() => console.log(store.getState()))
  },[])
  return (
    <div className="appContainer">
    <div className="mainPane">
        <TitlePane dispatch={store.dispatch}/>
        <ListPane vehicles={vehicles} dispatch={store.dispatch} selectedIndex={selectVehicle.id}/>
    </div>
    <DetailPane vehicleDetail={selectVehicle} />  
    </div>
  );
}

const mapStateToProps = (state) => {
    const {selectVehicle,vehicles} = state;
    return {
        selectVehicle,
        vehicles: vehicles  
    }
}

export default connect(mapStateToProps)(MainView);
