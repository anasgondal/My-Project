import React from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../store/reducers/Layout';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SideBar from '../../components/SideBar';
 

/**
 * Pagess
 */

import Dashboard from '../Dashboard/Dashboard'
import CreateGrants from '../CreateGrants/CreateGrants'
import CreateFundraising from '../CreateFundraising/CreateFundraising'


import Detail from '../SaloonManagement/Detail'
import OnlineAppointment from '../SaloonManagement/OnlineAppointment'
import SellingHistory from '../SaloonManagement/SellingHistory'
import GenerateVouchers from '../SaloonManagement/GenerateVouchers'
import SendMessage from '../SaloonManagement/SendMessage'
import Reports from '../SaloonManagement/Reports'
import Product from '../SaloonManagement/product'
import Service from '../SaloonManagement/Service'
import PrivateRoute from '../../utils/PrivateRoute';
 
const Main = ({
  mobileNavVisibility,
  hideMobileMenu,
  history
}) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      <div className="wrapper">
        <div className="close-layer" onClick={hideMobileMenu}></div>
        
        <SideBar />

        <div className="main-panel">
          <Header />
        
          <PrivateRoute   exact path="/" component={Dashboard} />
          <PrivateRoute   exact path="/creategrants" component={CreateGrants} /> 
          <PrivateRoute   exact path="/createfundraising" component={CreateFundraising} /> 
          <PrivateRoute   exact path="/detail" component={Detail} /> 
          <PrivateRoute   exact path="/product" component={Product} /> 
          <PrivateRoute   exact path="/service" component={Service} /> 
          <PrivateRoute   exact path="/online/appointment" component={OnlineAppointment} /> 
          <PrivateRoute   exact path="/selling/history" component={SellingHistory} /> 
          <PrivateRoute   exact path="/generate/vouchers" component={GenerateVouchers} /> 
          <PrivateRoute   exact path="/reports" component={Reports} />
          <PrivateRoute   exact path="/send/message" component={SendMessage} /> 


          
          
          
          
          <Footer />
        </div>
      </div>
    </div>
  )
};

const mapStateToProp = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility,
     
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));