import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import TitlePane from './TitlePaneComponent';
import ListPane from './ListPaneComponent';
import DetailPane from './DetailPaneComponent';
import { fetchVehicles } from '../stores/actions';
import { store } from '../stores';

const MainView = (props) => {

  const { selectVehicle } = props;  
  useEffect(()=>{
    store.dispatch(fetchVehicles(1)).then(() => console.log(store.getState()))
  },[])
  return (
    <div className="appContainer">
    <div className="mainPane">
        <TitlePane dispatch={store.dispatch} />
        <ListPane {...props} />
    </div>
    <DetailPane vehicleDetail={selectVehicle} />  
    </div>
  );
}

const mapStateToProps = (state) => {
    const {selectVehicle,vehicles,pageCount,endOfPost} = state;
    return {
        pageCount,
        endOfPost,
        selectVehicle,
        vehicles  
    }
}

export default connect(mapStateToProps)(MainView);
