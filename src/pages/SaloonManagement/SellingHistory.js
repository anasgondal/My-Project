
import React, { Component } from 'react';
import { Dropdown, Form, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';

import slide from '../../assets/images/Users/slide.png'
import eye from '../../assets/images/Users/eye.png'
import circlelogo from '../../assets/images/Users/seat.png'
import search from '../../assets/images/Users/search.png'
import print from '../../assets/images/Users/print.png'
import empty from '../../assets/images/empty.png'
class SellingHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // CategoryModal:false ,

        };

    }

    componentDidUpdate(prevProps, prevState, snapshot) {


    }



    componentDidMount() {


    }

    // toogleModal = ()=>{
    //     this.setState({
    //      CategoryModal:!this.state.CategoryModal
    //     })
    //  }
     





    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (
            <div className="Service-Detail service-container">
            <div className="container-fluid">
                <div className="row m-0">
                    <div className="col-md-5">
                        <div className="col-md-5 white-box">
                            <div className="row">
                                <div className="col-md-6 box-inner">
                                    <p className="poppins_medium">50</p>
                                    <br /><p className="poppins_regular total">Total<br />Services</p>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="circle">
                                        <img className="image" src={circlelogo} /></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5  color ">
                        <img className="  search-icon" src={search} />
                        <input className=" poppins_regular search" type="search" placeholder="Search Here"></input>
                        <button className=" poppins_medium srch-btn">Search</button>
                        <div className="row m-0">
                            <button className=" poppins_regular add-new" >Add New</button>
                            <button className=" poppins_regular bulk-action">Bulk Action</button>
                            <p className="report poppins_regular text-right">Print Report&nbsp;&nbsp;<label><img src={print} /></label></p>
                        </div>
                    </div>


                </div>


                <br />

                <div className="table-section">
                    <div className="container p-0">
                        <div className="col-md-12 p-0">
                            <div className="heading">
                                <p className="poppins_medium">All Selling Information <p className="poppins_regular">All your selling via salonhub</p></p>
                                <table className="table table-hover thead-primary ">
                                    <thead>
                                        <tr>

                                            <th scope="col table_header poppins_medium" ><img className="empty-box"src={empty}/></th>
                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Transection ID</option></select></th>
                                            <th scope="col table_header poppins_medium">Product / Service</th>

                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Category</option></select> </th>
                                                <th></th>
                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Amount</option></select></th>

                                            <th scope="col table_header poppins_medium"> <select className=" poppins_semibold select">
                                                <option>Date & Time</option></select> </th>
                                            

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr className="color-row">

                                            <td><img className="empty-box2"src={empty}/></td>

                                            <td>Rose-123214</td>

                                            <td>Hair Color</td>
                                            <td>Makeup | Hair | Lipstick </td>
                                            <td></td>
                                            <td>1,500 PKR </td>
                                            <td> 22/02/2021, 11:00 PM</td>
                                        

                                        </tr>
                                        <tr className="color-row2">

                                        <td><img className="empty-box2"src={empty}/></td>

<td>Rose-123214</td>

<td>Lipistick</td>
<td>Makeup | Hair | Lipstick </td>
<td></td>
<td>1,000 PKR </td>
<td>  23/02/2021, 11:00 PM</td>


</tr>

<tr className="color-row">

<td><img className="empty-box2"src={empty}/></td>

                                            <td>Rose-123214</td>

                                            <td>Bridal Makeup</td>
                                            <td>Bridal Makeup </td>
                                            <td></td>
                                            <td>100,000 PKR</td>
                                            <td> 24/02/2021, 11:00 PM</td>


</tr>


                                    </tbody>

                                </table>


                            </div>                        
                        </div>

                    </div>
                    <div className="row">
      <div className="col-md-4 text-right right ">
          <button className="poppins_bold pre-btn">← Previous</button>
      </div>
      <div className="col-md-3 numbers ">
          <button className="poppins_bold num-btn">1</button>
          <button className="poppins_bold num-btn">2</button>
          <button className="poppins_bold num-btn">3</button>
          <button className="poppins_bold num-btn">4</button>
          <button className="poppins_bold num-btn">5</button>
      </div>
      <div className="col-md-4 right ">
          <button className="poppins_bold pre-btn">Next →</button>
      </div>
      </div>  
                    </div>






















            </div>




        </div>
        )
    }

}

SellingHistory.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(SellingHistory);
