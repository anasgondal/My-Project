import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import cx from 'classnames';
import { logoutUser } from '../../store/actions/authActions';
import { connect } from 'react-redux';




import HOME from "../../assets/images/navbar_icons/Nav_Dashboard_Gray.svg";
import HOME_WHITE from "../../assets/images/navbar_icons/Nav_Dashboard.png";


import ManageBook from "../../assets/images/navbar_icons/managebook.svg";
import ManageBookActive from "../../assets/images/navbar_icons/managebookActive.svg";


import AddNewBook from "../../assets/images/navbar_icons/addnewbook.svg";
import AddNewBookActive from "../../assets/images/navbar_icons/addnewbookActive.svg";

import EbookConversion from "../../assets/images/navbar_icons/ebookconversion.svg";
import EbookConversionActive from "../../assets/images/navbar_icons/ebookconversionActive.svg";


import Tracking from "../../assets/images/navbar_icons/tracking.svg";
import trackingActive from "../../assets/images/navbar_icons/trackingActive.svg";

import Bank from "../../assets/images/navbar_icons/bank.svg";
import BankActive from "../../assets/images/navbar_icons/bankActive.svg";


import SellingHistory from "../../assets/images/navbar_icons/sellinghistory.svg";
import SellingHistoryActive from "../../assets/images/navbar_icons/sellinghistoryActive.svg";


import Report from "../../assets/images/navbar_icons/report.svg";
import ReportActive from "../../assets/images/navbar_icons/reportActive.svg";


import SendMessage from "../../assets/images/navbar_icons/sendmessage.svg";
import SendMessageActive from "../../assets/images/navbar_icons/sendmessageActive.svg";


import logout from "../../assets/images/navbar_icons/logout.svg";

class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (

      
      <>
       <ul className="nav sidebar-nav">
               <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/" >
            <i ><img src={location.pathname === '/' ? HOME_WHITE : HOME}></img> </i>
             <p className="poppins_regular">Dashboard</p>
           </Link>
         </li>
        
         <li className="heading">
          <span className="poppins_semibold" >Salon Management</span>
         </li>
         <li className={location.pathname === '/detail' ? 'active' : null}>
          <Link to="/detail" >
            <i ><img src={location.pathname === '/detail' ? ManageBookActive : ManageBook}></img> </i>
             <p className="poppins_regular">Details</p>
           </Link>
         </li>
         <li className={location.pathname === '/service' ? 'active' : null}>
          <Link to="/service" >
            <i ><img src={location.pathname === '/service' ? ManageBookActive : ManageBook}></img> </i>
             <p className="poppins_regular">Services</p>
           </Link>
         </li>
         <li className={location.pathname === '/product' ? 'active' : null}>
          <Link to="/product" >
            <i ><img src={location.pathname === '/product' ? AddNewBookActive : AddNewBook}></img> </i>
             <p className="poppins_regular">Product</p>
           </Link>
         </li>
         <li className={location.pathname === '/onlineapartment' ? 'active' : null}>
          <Link to="/onlineapartment" >
            <i ><img src={location.pathname === '/onlineapartment' ? AddNewBookActive : AddNewBook}></img> </i>
             <p className="poppins_regular">Online Appointments</p>
           </Link>
         </li>

        
         
            </ul>
             <div className="ml_20 mt-2  logoutDiv"   >

               <img  src={logout}></img>
               <label className="poppins_light logoutLabel ml-3" onClick={() => this.props.logoutUser()}> Logout </label>
               </div>
      </>

    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

Nav.propTypes = {

};

const mapStateToProps = state => ({
  

});

const mapDispatchToProps = ({
  logoutUser
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));

//export default withRouter(Nav);