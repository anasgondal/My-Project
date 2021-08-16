
import React, { Component } from 'react';
import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';

import slide from '../../assets/images/Users/slide.png'
import eye from '../../assets/images/Users/eye.png'
import circlelogo from '../../assets/images/Users/seat.png'
import search from '../../assets/images/Users/search.png'
import print from '../../assets/images/Users/print.png'
import empty from '../../assets/images/empty.png'
class OnlineAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CategoryModal:false ,

        };

    }

    componentDidUpdate(prevProps, prevState, snapshot) {


    }



    componentDidMount() {


    }

    toogleModal = ()=>{
        this.setState({
         CategoryModal:!this.state.CategoryModal
        })
     }
     





    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (
            <div className="Service-Detail service-container">


<Modal


dialogClassName="col-xl-12 "
show={this.state.CategoryModal}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
> 


<div className="container p-0">
    <div className="row ">
        <div className="col-md-5 ">
            <div className="modal-heading">
            <p className="poppins_medium ">Appointment Details <p className="poppins_regular">Customer details of Appintment</p></p>  
            </div>
        </div>
        <div className="col-md-5 ">
            <div className="modal-heading">
            <p className="poppins_medium ">Reply <p className="poppins_regular">Manage Appoint Details</p></p>  
            </div>
        </div>
    <div className="col-md-1">
    <button className="cross-button"onClick={() => this.toogleModal()}>X</button>
    </div>
    </div>

    <div className="row m-0">
    <div className="col-md-7 modal-div ">
             <div className="row ">
                 <div className="col-md-5 text-right">
                 <p className="poppins_medium">Appointment  ID  
             </p>
                 </div>
                 <div className="col-md-7">
                 <input className="search-box" type="search" placeholder="0000184593"></input>
                 </div>
             </div>
            
             <div className="row mt-3">
                 <div className="col-md-5 text-right">
                 <p className="poppins_medium"> Person Name
             </p>
                 </div>
                 <div className="col-md-7">
                 <input className="search-box" type="search" placeholder="Mereen"></input>
                 </div>
             </div>
            
             <div className="row mt-3">
                 <div className="col-md-5 text-right">
                 <p className="poppins_medium"> Required Service 
             </p>
                 </div>
                 <div className="col-md-7 button">
                 <input className="search-box" type="search" placeholder="Bridal Makeup"></input>
                 </div>
             </div>
    
             
             <div className="row mt-3">
                 <div className="col-md-5 text-right">
                 <p className="poppins_medium">     Date & Time
             </p>
                 </div>
                 <div className="col-md-7">
                 <input className="search-box" type="search" placeholder=" 22/02/2021, 11:00 PM"></input>
                 </div>
             </div>

             

            
             

    </div>










    <div className="col-md-5 modal-div ">
    <div className="row ">
                 <div className="col-md-5 text-right">
                 <p className="poppins_medium"> Price</p>
                 </div>
                 <div className="col-md-7">
                 <input className="search-box2" type="search" placeholder="2,000 PKR"></input>
                 </div>
                 
             </div>
            
             <div className="row mt-3">
                 <div className="col-md-5 text-right">
                 <p className="poppins_medium"> Date & Time
             </p>
                 </div>
                 <div className="col-md-7">
                 <input className="search-box2" type="search" placeholder="If Change"></input>
                 </div>
                 
             </div>
            
            
             <div className="col-md-12  pt-4">
            <button className=" poppins_semibold update-btn">Send Update</button>
        </div>
        <div className="col-md-12 anas  pt-4">
            <button className=" poppins_semibold update update-btn">Cancel</button>
        </div>

             

    </div>


    




</div>


</div>


  </Modal>














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
                            <button className=" poppins_regular add-new" onClick={() => this.toogleModal()}>Add New</button>
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
                                <p className="poppins_medium">All Appointment Information<p className="poppins_regular">All your Appointment  info</p></p>
                                <table className="table table-hover thead-primary ">
                                    <thead>
                                        <tr>

                                            <th scope="col table_header poppins_medium" ><img className="empty-box"src={empty}/></th>
                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Appointment ID</option></select></th>
                                            <th scope="col table_header poppins_medium"> Person Name</th>

                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Required Service </option></select> </th>
                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Date & Time</option></select></th>

                                            <th scope="col table_header poppins_medium"></th>
                                            <th scope="col table_header poppins_medium">Actions </th>
                                            <th scope="col table_header poppins_medium">View </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr className="color-row">

                                            <td><img className="empty-box2"src={empty}/></td>

                                            <td>Rose-123214</td>
                                            <td>Mahnoor</td>
                                            <td>Bridal Makeup</td>
                                            <td> 22/02/2021, 11:00 PM</td>
                                            <td></td>
                                            <td className="poppins_regular" ><button className="reply-btn ">Reply</button></td>
                                            <td>
                                            <img className="slide" src={eye}/>
                                            </td>
                                        

                                        </tr>
                                        <tr className="color-row2">

<td><img className="empty-box2"src={empty}/></td>

<td>Rose-123214</td>

<td>Zainab</td>
<td>Bridal Makeup</td>
<td> 23/02/2021, 11:00 PM</td>
<td></td>
<td className="poppins_regular" ><button className="reply-btn ">Reply</button></td>

<td>
<img className="slide" src={eye}/>
</td>


</tr>

<tr className="color-row">

<td><img className="empty-box2"src={empty}/></td>

<td>Rose-123214</td>

<td>Neha</td>

<td>Bridal Makeup</td>
<td> 24/02/2021, 11:00 PM</td>
<td></td>
<td className="poppins_regular" ><button className="reply-btn ">Reply</button></td>
<td>
<img className="slide" src={eye}/>
</td>


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

OnlineAppointment.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(OnlineAppointment);
