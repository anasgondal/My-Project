
import React, { Component } from 'react';
import { Dropdown,  Form, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';

import slide from '../../assets/images/Users/slide.png'
import eye from '../../assets/images/Users/eye.png'
import circlelogo from '../../assets/images/Users/seat.png'
import search from '../../assets/images/Users/search.png'
import print from '../../assets/images/Users/print.png'
import empty from '../../assets/images/empty.png'
class Reports extends Component {
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
            <div className="Service-Detail service-container">
            <div className="container-fluid">
                 
                 <div className="col-md-12 p-0">
                            <div className="heading">
                            <p className="poppins_medium ">Send us your Queries and Problems<p className="poppins_regular">Will be answer with in a 24 hours</p></p>  
                                </div>                        
                                </div>

                                <div className="col-md-12 p-0">
                            <div className="heading">
                            <select className="issue-sec">
                                <option className="poppins_regular">Issue</option>
                            </select>
                                </div>                        
                                </div>

                                <div className="col-md-12 p-0">
                            <div className="heading">
                           <textarea className="text-area1">Subject</textarea>
                                </div>                        
                                </div>

                                <div className="col-md-12 p-0">
                            <div className="heading">
                           <textarea className="text-area2">Description</textarea>
                                </div>                        
                                </div>

                                <div className="col-md-12 text-right">
                            
                            <button className="quries-btn">Send Queries</button>    
                                            
                                </div>

            </div>
            
        </div>
        )
    }

}

Reports.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Reports);
