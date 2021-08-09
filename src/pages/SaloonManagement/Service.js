
import React, { Component } from 'react';

import { connect } from 'react-redux';
import circlelogo from '../../assets/images/Users/seat.png'
import search from '../../assets/images/Users/search.png'
import print from '../../assets/images/Users/print.png'

class Service extends Component {
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
            <div className="Service-Detail">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="col-md-5 white-box">
                                <div className="row">
                                    <div className="col-md-6 box-inner">
                                        <p className="poppins_medium">50</p>
                                        <br /><p className="poppins_regular">Total<br />Services</p>
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
                                <button className=" poppins_regular add-new">Add New</button>
                                <button className=" poppins_regular bulk-action">Bulk Action</button>
                                <p className="report poppins_regular text-right">Print Report&nbsp;&nbsp;<label><img src={print} /></label></p>
                            </div>
                        </div>


                    </div>



























                </div>
            </div>
        )
    }

}

Service.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Service);
