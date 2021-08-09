
import React, { Component } from 'react';

import { connect } from 'react-redux';
import icon from '../../assets/images/Users/icon.png'


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {


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
            
           
        <div className="detail-section">
            <div className="container p-0">
            <div className="col-md-12 p-0 pt-4">
                <div className="text">
                    <p className="poppins_medium">Salon Information</p>
                </div>
            </div>


<div className="row">
    <div className="col-md-6">
        <div className="left-div mt-4">
            <p className="poppins_medium ">Salon Details &nbsp;&nbsp;&nbsp;
            <img src={icon}/></p>
            <p className="poppins_regular">About salon registration</p>
        </div>
    </div>


    <div className="col-md-6">
        <div className="left-div mt-4">
            <p className="poppins_medium ">Contact Information &nbsp;&nbsp;&nbsp;
            <img src={icon}/></p>
            <p className="poppins_regular">Used for tracking your Salon</p>
        </div>
    </div>
   
</div>



<div className="row mt-3">
    <div className="col-md-6">
        <div className="right-div text-right">
            <p className="poppins_medium">Salon Name  &nbsp;&nbsp;
             <input className="srch-box" type="search" placeholder="Rose Beauty Parlor"></input></p>
             <p className="poppins_medium">Registration No.  &nbsp;&nbsp;
             <input className="srch-box" type="search" placeholder="1569491"></input></p>
        </div>
    </div>
    <div className="col-md-6">
    <div className="right-div text-right">
            <p className="poppins_medium"> Email  &nbsp;&nbsp;
             <input className="srch-box" type="search" placeholder="98manas1217@gmail.com"></input></p>
             <p className="poppins_medium">Phone No.&nbsp;&nbsp;
             <input className="srch-box" type="search" placeholder="+92 332 4567712"></input></p>
        </div>

        
    </div>

    
</div>

<div className="row">
    <div className="col-md-6">
        <div className="left-div mt-5">
            <p className="poppins_medium ">Address &nbsp;&nbsp;&nbsp;
            <img src={icon}/></p>
            <p className="poppins_regular">Salon address or branch details</p>
        </div>
    </div>


    <div className="col-md-6">
        <div className="left-div mt-5">
            <p className="poppins_medium ">Company Status &nbsp;&nbsp;&nbsp;
            <img src={icon}/></p>
            <p className="poppins_regular">Salon running status</p>
        </div>
    </div>
   
</div>



<div className="row mt-3">
    <div className="col-md-6">
        <div className="right-div text-right">
            <p className="poppins_medium">Branch Name &nbsp;&nbsp;
             <input className="srch-box" type="search" placeholder="KDA Market"></input></p>
             <p className="poppins_medium">Street Address &nbsp;&nbsp;
             <input className="srch-box" type="search" placeholder="Aone Cottages Street 9"></input></p>
             <p className="poppins_medium">City Name &nbsp;&nbsp;
             <input className="srch-box" type="search" placeholder="Karachi"></input></p>
             <p className="poppins_medium">Country Name &nbsp;&nbsp;
             <input className="srch-box" type="search" placeholder="Paksitan"></input></p>
        </div>
    </div>
    <div className="col-md-6">
    <div className="right-div text-right">
            <p className="poppins_medium">Status&nbsp;&nbsp;
             <select className="srch-box" >
                 <option>open</option>
                 <option>close</option>

                 </select></p>
             
        </div>
       
    </div>
    <div className="col-md-12 text-right">
            <button className=" poppins_semibold save-btn">Save Information</button>
        </div>
</div>
















            </div>
        </div>
    )
}

}

Detail.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
