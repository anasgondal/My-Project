
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Chart } from "react-google-charts";

import cost from '../../assets/images/Users/cost.png'
import buy from '../../assets/images/Users/buy.png'
import group from '../../assets/images/Users/group.png'
import chart from '../../assets/images/Users/chart.png'
import square from '../../assets/images/Users/square.png'
import eye from '../../assets/images/Users/eye.png'
import nailpolish from '../../assets/images/Users/nailpolish.png'
import customer from '../../assets/images/Users/customer.png'

const data = [
    ["", "Highest Grants", { role: "style" }],
    ["", 3, "#ACACAC"], // RGB value
    ["", 4, "#ACACAC"], // English color name
    ["", 3, "#ACACAC"], // English color name
    ["", 4, "#ACACAC"], // English color name
    ["", 3, "#ACACAC"], // English color name
    ["", 4, "#ACACAC"], // English color name
    ["", 15, "#05401E"],

    ["", 3, "#ACACAC"], // English color name



    // ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
];

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalearning: "",
            totalBooks: "",
            totalorders: "",
            bookList: [],
            newBookList: [],

        };

    }

    componentDidUpdate(prevProps, prevState, snapshot) {


    }



    componentDidMount() {


    }







    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (
            <div className="DashbordContainer ">
                <div className="container-fluid">
                    {/* First-Row */}
                  <div className="row ">
                      {/* First-3-Cards */}
                      <div className="col-md-8 pl-2 pr-2">
                          <div className="row">
                              {/* From Here */}
                           <div className="col-md-4">
                            <div className="earning-card">
                                <div className="row">
                                 <div className="col-md-2">
                                   <div className="image-circle">
                                       <img src={cost}/>
                                   </div>
                                 </div>
                                 <div className="col-md-10">
                                     <p className="card-txt poppins_semibold">
                                         &nbsp;&nbsp;Earning</p>
                                     </div>   
                                </div>
                                <div className="col-md-12 text-right">
                                    <p className="card-sub-txt poppins_extrabold">1,000 PKR</p>
                                </div>
                                </div>   
                               </div>
{/* paste-below */}

 {/* From Here */}
 <div className="col-md-4">
                            <div className="product-card">
                                <div className="row">
                                 <div className="col-md-2">
                                   <div className="image-circle">
                                       <img src={buy}/>
                                   </div>
                                 </div>
                                 <div className="col-md-10">
                                     <p className="card-txt poppins_semibold">
                                         &nbsp;&nbsp;Total Product Sold</p>
                                     </div>   
                                </div>
                                <div className="col-md-12 text-right">
                                    <p className="card-sub-txt poppins_extrabold">250 PKR</p>
                                </div>
                                </div>   
                               </div>
{/* paste-below */}

 {/* From Here */}
 <div className="col-md-4">
                            <div className="services-card">
                                <div className="row">
                                 <div className="col-md-2">
                                   <div className="image-circle">
                                       <img src={group}/>
                                   </div>
                                 </div>
                                 <div className="col-md-10">
                                     <p className="card-txt poppins_semibold">
                                     &nbsp;&nbsp;Total Services Serve</p>
                                     </div>   
                                </div>
                                <div className="col-md-12 text-right">
                                    <p className="card-sub-txt poppins_extrabold">200 PKR</p>
                                </div>
                                </div>   
                               </div>
{/* paste-below */}
                          </div>
                          {/* Second-Row-2-Cards */}
                  <div className="row ">
                   <div className="col-md-5 pl-3 pr-2">
                       <div className="history-card mt-4">
                           <p className="selling-txt poppins_semibold">Selling History
                           <label className="seeall-1-txt poppins_medium ">See All</label></p>
                        <div className="chart-sec">
                        <Chart
                                    chartType="ColumnChart"
                                    width="100%"
                                    height="250px"
                                    data={data}
                                />
                        </div>
                        <div className="col-md-12">
                            <button className="view-btn poppins_regular">View Details</button>
                        </div>
                       </div>
                   </div>
                   <div className="col-md-7 pl-2 pr-2">
                       <div className="category-card mt-4">
                       <p className="category-txt poppins_semibold">Category Stats
                           <label className="seeall-2-txt poppins_medium ">See All</label></p>
                        <div className="chart-sec">
                            <img className="circle-chart" src={chart}/>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-4">
                                <div className="category-sec">
                                        <img src={square}/> 
                                        &nbsp;<span className="poppins_bold">Category 1</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="category-sec">
                                        <img src={square}/> 
                                        &nbsp;<span className="poppins_bold">Category 2</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="category-sec">
                                        <img src={square}/> 
                                        &nbsp;<span className="poppins_bold">Category 3</span>
                                </div>
                            </div>
                        </div>
                       </div>
                   </div>
                   </div>

                   <div className="row">
                       <div className="col-md-5 pr-2 pl-2">
                         <div className="add-new-card  mt-4">
                                 <button className="add-butn">+</button>
                                 <p className="plus-text poppins_regular">Add New <br/>Service / Product</p>
                             </div>  
                       </div>
                       <div className="col-md-7 pr-2 pl-2 ">
                           <div className="voucher-card mt-4">
                               <div className="col-md-12">
                                   <p className="poppins_semibold voucher-code-txt">Check Voucher Code</p>
                               </div>

                               <div className="row mt-1 m-0 voucher-bar1">
                            <div className="col-md-8">
                                <p className="poppins_regular voucher-text">Enter Voucher Number</p>
                            </div>
                            <div className="col-md-4">
                                <button className="check-btn poppins_semibold">Check</button>
                            </div>
                             </div>
                               <div className="customer-card mt-2">
                               <div className="row ">
                                 <div className="col-md-2">
                                     <div className="customer-img-sec"></div>
                                 </div>
                                 <div className="col-md-7">
                                     <p className="poppins_semibold customer-name">Neha <br/>
                                     <label className="poppins_regular name-sub-txt">Valid Voucher - ROSE12314</label><br/>
                                     <label className="poppins_regular name-sub-txt">Service: Bridal Shower</label></p>
                                     
                                 </div>
                                 <div className="col-md-2 text-right">
                                     <img className="eye-image" src={eye}/>
                                 </div>
                                  </div>
                               </div>
                             
                           </div>
                       </div>
                   </div>
                  {/* End */}
                      </div>
                      {/* End */}
                      
                      {/* 4th-Card */}
                      <div className="col-md-4 pl-2 pr-2">

{/* starter */}
                  <div className="col-md-12">
                   <div className="selling-card">
                       <div className="row">
                           <div className="col-md-8">
                               <p className="selling-txt poppins_medium">Top Selling Services <br/> & Products</p>
                           </div>
                           <div className="col-md-4">
                               <p className="poppins_medium see-all">See All</p>
                           </div>
                       </div>

                       <div className=" row m-0 selling-sec2">
                        <div className="col-md-4 mt-5">
                            <img src={nailpolish}/>
                        </div>
                        <div className="col-md-6">
                        <p className="poppins_medium nail-txt">O.P.I Nail Lacquer
                        <label className="nail-price poppins_bold">Rs 1,600 PKR</label></p>
                        </div>
                        <div className="col-md-2">
                            <p className="view poppins_medium">View</p>
                        </div>
                       </div>

                       <div className=" row m-0 selling-sec2">
                        <div className="col-md-4 mt-5">
                            <img src={customer}/>
                        </div>
                        <div className="col-md-6">
                        <p className="poppins_medium nail-txt">Hair & Makeup
                        <label className="nail-price poppins_bold">Rs 1,600 PKR</label></p>
                        </div>
                        <div className="col-md-2">
                            <p className="view poppins_medium">View</p>
                        </div>
                       </div>
                       
                   </div>
                   
                  
                   
                  </div>
{/* dead */}

<div className="col-md-12 mt-3">
                   <div className="selling-card2">
                       <div className="row">
                          <div className="col-md-8">
                              <p className="appointment-txt poppins_medium">Online Appointments</p>
                          </div>
                          <div className="col-md-4">
                          <p className="poppins_medium see-all2">See All</p>
                          </div>
                       </div>

                       <div className="row m-0 appointment-card1">
                       <div className="row ">
                                 <div className="col-md-3">
                                     <div className="customer-img-sec"></div>
                                 </div>
                                 <div className="col-md-7">
                                     <p className="poppins_semibold customer-name">Neha <br/>
                                     <label className="poppins_regular name-sub-txt">Valid Voucher - ROSE12314</label><br/>
                                     <label className="poppins_regular name-sub-txt">Service: Bridal Shower</label></p>
                                     
                                 </div>
                                 <div className="col-md-2 ">
                                     <img className="eye-image" src={eye}/>
                                 </div>
                                 <div className="col-md-12 customer2-sec">
                                     <p className="reply-sec poppins_medium">reply &nbsp;&nbsp;
                                     <button className="reply-btn" >Confirm</button></p>
                                 </div>
                                  </div>
                       
                       </div>


                       <div className="row mt-2 m-0 appointment-card1">
                       <div className="row ">
                                 <div className="col-md-3">
                                     <div className="customer-img-sec"></div>
                                 </div>
                                 <div className="col-md-7">
                                     <p className="poppins_semibold customer-name">Neha <br/>
                                     <label className="poppins_regular name-sub-txt">Valid Voucher - ROSE12314</label><br/>
                                     <label className="poppins_regular name-sub-txt">Service: Bridal Shower</label></p>
                                     
                                 </div>
                                 <div className="col-md-2 ">
                                     <img className="eye-image" src={eye}/>
                                 </div>
                                 <div className="col-md-12 customer2-sec">
                                     <p className="reply-sec poppins_medium">reply &nbsp;&nbsp;
                                     <button className="reply-btn" >Confirm</button></p>
                                 </div>
                                  </div>
                       
                       </div>

                   </div>
                  </div>
                      </div>
                      {/* End */}
                      </div>  
                  {/* End */}

                  
                </div>
            </div>
        )
    }

}

Dashboard.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
