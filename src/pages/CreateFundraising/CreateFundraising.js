
import React, { Component } from 'react';

import { connect } from 'react-redux';



import progressMark from '../../assets/images/CreateGrants/progressMark.png'
import PlaceHolder from '../../assets/images/CreateGrants/PlaceHolder.png'


var cx = require('classnames');

class CreateFundraising extends Component {
    constructor(props) {
        super(props);
        this.state = {

            activeTab: 1

        };

    }

    componentDidUpdate(prevProps, prevState, snapshot) {


    }



    componentDidMount() {


    }
    onClickBottomBar = (val) => {
        this.setState({
            activeTab: val
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
            <div className="CreateTabsContainer">
                <div className="col-md-12">
                    {/* <p className="Heading">Add New Grant</p> */}
                    <div className="row">
                        <div className="col-6">

                            <div className={cx({ "tabs": true, "tabs tabsActive": this.state.activeTab === 1 })} onClick={() => this.onClickBottomBar(1)}>
                                <p className="poppins_medium TabsHeading">Fundraising Details</p>
                                <p className="mb-0"><img src={progressMark} /> <label className="poppins_light TabsText ml-2 mb-0">In Progress...</label></p>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className={cx({ "tabs": true, "tabs tabsActive": this.state.activeTab === 2 })} onClick={() => this.onClickBottomBar(2)}>
                                <p className="poppins_medium TabsHeading">Account & Fund Pool Limit</p>
                                <p className="mb-0"><img src={progressMark} /> <label className="poppins_light TabsText ml-2 mb-0">In Progress...</label></p>

                            </div>

                        </div>

                        

                    </div>
                </div>
                {this.state.activeTab === 1 ? (
                    <div className="TabsWhiteContainer">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <p className="poppins_medium mb-0 GrantInfoHeading">Fundraising Information</p>
                                    <p className="poppins_light mb-0  GrantInfoText">Please enter fundraising information as per requirements</p>
                                    <div className="row mt-5">
                                        <div className="col-4 vertical_center text-right">
                                            <p className="poppins_medium GrantInfoInputText mb-0">Fund Name </p>
                                        </div>
                                        <div className="col-8">
                                            <input className="GrantInfoInput"></input>
                                        </div>

                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-4 vertical_center text-right">
                                            <p className="poppins_medium GrantInfoInputText mb-0">Department</p>
                                        </div>
                                        <div className="col-8">
                                            <input className="GrantInfoInput"></input>
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 vertical_center text-right">
                                            <p className="poppins_medium GrantInfoInputText mb-0">Fund by (Optional)</p>
                                        </div>
                                        <div className="col-8">
                                            <input className="GrantInfoInput"></input>
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4  text-right">
                                            <p className="poppins_medium GrantInfoInputText mt-1 mb-0">Description</p>
                                        </div>
                                        <div className="col-8">
                                            <textarea className="GrantInfoTextArea"></textarea>
                                        </div>

                                    </div>


                                </div>
                                <div className="col-md-5">
                                    <p className="poppins_medium mb-0 GrantInfoHeading">Initiator Image</p>
                                    <div className="row">
                                        <div className="col-6">
                                            <img class="mt-4" src={PlaceHolder} />
                                        </div>
                                        <div className="col-6 mt-4 text-center">
                                            <button className="GrantInfobtn">Upload File</button>
                                            <p className="GrantInfoText poppins_light mt-2">Not be more then 1 MB</p>

                                        </div>
                                        <div className="col-12">

                                            <div className="row mt-5">
                                                <div className="col-5 vertical_center text-right">
                                                    <p className="poppins_medium GrantInfoInputText mb-0">Open Dates</p>
                                                </div>
                                                <div className="col-7">
                                                    <input type="date" className="GrantInfoInput"></input>
                                                </div>

                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-5 vertical_center text-right">
                                                    <p className="poppins_medium GrantInfoInputText mb-0">Close Dates</p>
                                                </div>
                                                <div className="col-7">
                                                    <input type="date" className="GrantInfoInput"></input>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-12 mt-5 text-right">
                                            <button className="Nextbtn mt-5">Next & Continue</button>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
              
                ) : this.state.activeTab === 2 && (
                    <div className="TabsWhiteContainer">
                        <div className="col-md-12">
                            <p className="poppins_medium mb-0 GrantInfoHeading">Grant Audiance</p>
                            <p className="poppins_light mb-0  GrantInfoText">Please enter grant disbursement targeted audience.</p>
                            <div className="text-center">
                                <div className="row mt-5">
                                    <div className="col-3 vertical_center text-right">
                                        <p className="poppins_medium GrantInfoInputText mb-0">Amount</p>
                                    </div>
                                    <div className="col-5">
                                        <input className="PriceInput"></input>
                                    </div>
                                    <div className="col-3 text-left">
                                        <p className="poppins_bold pkrText mb-0">PKR</p>
                                    </div>

                                </div>
                                <div className="row mt-3">
                                        <div className="col-3 vertical_center text-right">
                                            <p className="poppins_medium GrantInfoInputText mb-0">Select Account</p>
                                            </div>
                                            <div className="col-5">
                                                <select className="GrantInfoInput"></select>
                                            </div>
                                    
                                    </div>
                                   

                            </div>
                            <div className="col-12 mt-5 text-right">
                                <button className="Nextbtn  mt-5">Next & Continue</button>

                            </div>
                        </div>

                    </div>

                )
                }

            </div>
        )
    }

}

CreateFundraising.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(CreateFundraising);
