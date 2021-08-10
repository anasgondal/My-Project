
import React, { Component } from 'react';
import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';

import slide from '../../assets/images/Users/slide.png'
import eye from '../../assets/images/Users/eye.png'
import circlelogo from '../../assets/images/Users/seat.png'
import search from '../../assets/images/Users/search.png'
import print from '../../assets/images/Users/print.png'
import empty from '../../assets/images/empty.png'
class product extends Component {
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
        <div className="col-md-10 ">
            <div className="modal-heading">
            <p className="poppins_medium ">Service Details <p className="poppins_regular">About salon service detail</p></p>  
            </div>
        </div>
    <div className="col-md-2">
    <button className="logout-button"onClick={() => this.toogleModal()}>X</button>
    </div>
    </div>

    <div className="row m-0">
    <div className="col-md-6 modal-div ">
             <div className="row ">
                 <div className="col-md-4 text-right">
                 <p className="poppins_medium"> Product ID  
             </p>
                 </div>
                 <div className="col-md-8">
                 <input className="search-box" type="search" placeholder="0000184593"></input>
                 </div>
             </div>
            
             <div className="row mt-3">
                 <div className="col-md-4 text-right">
                 <p className="poppins_medium"> Name 
             </p>
                 </div>
                 <div className="col-md-8">
                 <input className="search-box2" type="search" placeholder="Nail Polish "></input>
                 </div>
             </div>
            
             <div className="row mt-3">
                 <div className="col-md-4 text-right">
                 <p className="poppins_medium"> Brand Name
             </p>
                 </div>
                 <div className="col-md-8 button">
                 <select className="search-box2" >
                     <option></option>
                     
                 </select>
                 </div>
             </div>
    
             
             <div className="row mt-3">
                 <div className="col-md-4 text-right">
                 <p className="poppins_medium"> Category
             </p>
                 </div>
                 <div className="col-md-8">
                 <select className="search-box2" >
                     <option>Makeup</option>
                     
                 </select>
                 </div>
             </div>

             <div className="row mt-3">
                 <div className="col-md-4 text-right">
                 <p className="poppins_medium"> Sub Category
             </p>
                 </div>
                 <div className="col-md-8">
                 <select className="search-box2" >
                     <option>Hairs</option>
                     
                 </select>
                 </div>
             </div>

             <div className="row mt-3">
                 <div className="col-md-4 text-right">
                 <p className="poppins_medium"> Sub Category
             </p>
                 </div>
                 <div className="col-md-8">
                 <select className="search-box2" >
                     <option>Hair Styling</option>
                     
                 </select>
                 </div>
             </div>

             

    </div>










    <div className="col-md-6 modal-div ">
    <div className="row mt-3">
                 <div className="col-md-4 text-right">
                 <p className="poppins_medium"> Price</p>
                 </div>
                 <div className="col-md-8">
                 <input className="search-box2" type="search" placeholder="2,000 PKR"></input>
                 </div>
             </div>
            
             <div className="row mt-3">
                 <div className="col-md-4 text-right">
                 <p className="poppins_medium"> Discounted Price
             </p>
                 </div>
                 <div className="col-md-8">
                 <input className="search-box2" type="search" placeholder="1,500 PKR"></input>
                 </div>
             </div>
            
             <div className="row mt-3">
                 <div className="col-md-4 text-right">
                 <p className="poppins_medium"> Status
             </p>
                 </div>
                 <div className="col-md-8 button">
                 <input className="search-box poppins_medium" type="search" placeholder="Active"></input>
                     
                 </div>
             </div>
    
             

             <div className="row mt-3">
                 <div className="col-md-4 text-right">
                 <p className="poppins_medium"> Service Image
             </p>
                 </div>
                 <div className="col-md-8 image-section">
                 <div className="image-sec"> 
                 <div className="img-inner">
                     {/* <img className="image-logo" src={image}/> */}
                 </div>
                 <button className="add-bttn poppins_semibold">UPLOAD FILE</button></div>
                 </div>
             </div>

    </div>


    <div className="col-md-12 text-right">
            <button className=" poppins_semibold sve-btn">Save Information</button>
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
                                <p className="poppins_medium">All Services Information <p className="poppins_regular">All your Salon online services</p></p>
                                <table className="table table-hover thead-primary ">
                                    <thead>
                                        <tr>

                                            <th scope="col table_header poppins_medium" ><img className="empty-box"src={empty}/></th>
                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Product Name</option></select></th>
                                            <th scope="col table_header poppins_medium"> Brand Name</th>

                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Price</option></select> </th>
                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Discount %</option></select></th>

                                            <th scope="col table_header poppins_medium"> <select className=" poppins_semibold select">
                                                <option>Category</option></select> </th>
                                            <th scope="col table_header poppins_medium">Status </th>
                                            <th scope="col table_header poppins_medium">View </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr className="color-row">

                                            <td><img className="empty-box2"src={empty}/></td>

                                            <td>Matte Liquid Lipstick</td>

                                            <td>Matte Liquid Lipstick</td>
                                            <td>2,400 PKR</td>
                                            <td>60%</td>
                                            <td>Makeup | Lips | Lipstick </td>
                                            <td ><img className="slide" src={slide}/></td>

                                            <td>
                                            <img className="slide" src={eye}/>
                                            </td>
                                        

                                        </tr>
                                        <tr className="color-row2">

<td><img className="empty-box2"src={empty}/></td>

<td>MAC Lipstick</td>

<td>By Mac</td>
<td></td>
<td>60 %</td>
<td>Makeup | Lips | Lipstick  </td>
<td ><img className="slide" src={slide}/></td>

<td>
<img className="slide" src={eye}/>
</td>


</tr>

<tr className="color-row">

<td><img className="empty-box2"src={empty}/></td>

<td>O.P.I Nail Lacquer</td>

<td>By Lacquer</td>

<td>1,500 PKR</td>
<td> 60%</td>
<td>Makeup | Nail | Nail Polish  </td>
<td ><img className="slide" src={slide}/></td>

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

product.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(product);
