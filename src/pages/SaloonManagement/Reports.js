
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
                

                <br />

                <div className="table-section">
                    <div className="container p-0">
                        <div className="col-md-12 p-0">
                            <div className="heading">
                                
                                <table className="table table-hover thead-primary ">
                                    <thead>
                                        <tr>

                                            <th scope="col table_header poppins_medium" ></th>
                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Report Type</option></select></th>
                                            <th scope="col table_header poppins_medium"></th>

                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>Start Date</option></select> </th>
                                            <th scope="col table_header poppins_medium"></th>

                                            <th scope="col table_header poppins_medium"></th>
                                            <th scope="col table_header poppins_medium"><select className=" poppins_semibold select">
                                                <option>End Date</option></select></th>
                                            
                                            <th scope="col table_header poppins_medium ">
                                                <button className="generate-btn ">Generate Report</button>
                                            </th>

                                        </tr>
                                    </thead>
                                    

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

Reports.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Reports);
