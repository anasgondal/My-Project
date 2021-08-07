
import React, { Component } from 'react';

import { connect } from 'react-redux';



import creditcard1 from '../../assets/images/Dashborad/1.png'
import creditcard2 from '../../assets/images/Dashborad/2.png'
import creditcard3 from '../../assets/images/Dashborad/3.png'
import creditcard4 from '../../assets/images/Dashborad/4.png'


import { PieChart } from 'react-minimal-pie-chart';

import { Chart } from "react-google-charts";

import groupPeople from '../../assets/images/Dashborad/groupPeople.png'
import blackCoin from '../../assets/images/Dashborad/blackCoin.png'
import graypeople from '../../assets/images/Dashborad/graypeople.png'

import Plus from '../../assets/images/Dashborad/Plus.png'


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
            <div className="DashbordContainer">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="TopCard TotalGrants">
                                <div className="row m-0">
                                    <div className="TopCardCircle">
                                        <img className="TopCardIcon" src={creditcard1} />
                                    </div>
                                    <div className="vertical_center">
                                        <p className="poppins_medium TopCardText">All Public Smart Cards</p>

                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="poppins_regular TopCardPrice">10,000,000</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="TopCard TotalVerified">
                                <div className="row m-0">
                                    <div className="TopCardCircle">
                                        <img className="TopCardIcon" src={creditcard2} />
                                    </div>
                                    <div className="vertical_center">
                                        <p className="poppins_medium TopCardText">All Private Smart Cards</p>

                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="poppins_regular TopCardPrice">40,000,000</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="TopCard TotalFunds">
                                <div className="row m-0">
                                    <div className="TopCardCircle">
                                        <img className="TopCardIcon" src={creditcard3} />
                                    </div>
                                    <div className="vertical_center">
                                        <p className="poppins_medium TopCardText">All Users Smart Cards</p>

                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="poppins_regular TopCardPrice">5,000,000</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="TopCard TotalDonar">
                                <div className="row m-0">
                                    <div className="TopCardCircle">
                                        <img className="TopCardIcon" src={creditcard4} />
                                    </div>
                                    <div className="vertical_center">
                                        <p className="poppins_medium TopCardText">New Card Registration Querry</p>

                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="poppins_regular TopCardPrice">10,000,000</p>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="ChartCard">
                                <p className="poppins_regular mb-0 GrantInfoHeading">Register a new Smart Card</p>
                                <div className="row mt-5 ">
                                    <div className="col-3  vertical_center ">
                                        <p className="poppins_medium GrantInfoInputText mb-0">User CNIC</p>
                                    </div>
                                    <div className="col-8">
                                        <input className="GrantInfoInput"></input>
                                    </div>

                                </div>
                                <div className="row mt-4 ">
                                    <div className="col-3  vertical_center ">
                                        <p className="poppins_medium GrantInfoInputText mb-0">Smart Card Type</p>
                                    </div>
                                    <div className="col-8">
                                        <input className="GrantInfoInput"></input>
                                    </div>

                                </div>
                                <div className="row mt-4 ">
                                    <div className="col-3  vertical_center ">
                                        <p className="poppins_medium GrantInfoInputText mb-0">Smart Card Status</p>
                                    </div>
                                    <div className="col-8">
                                        <div className="row m-0">

                                            <div className="AttachCircle vertical_center"></div>
                                            <div>
                                                <p className="poppins_light AttachTexT ml-4 mb-0">Attached</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-4 ">
                                    <div className="col-3  vertical_center ">
                                        <p className="poppins_medium GrantInfoInputText mb-0">Account Fetch</p>
                                    </div>
                                    <div className="col-6">
                                        <input className="GrantInfoInput1"></input>
                                    </div>
                                    <div className="col-2 vertical_center">
                                        <div className="row m-0">

                                            <div className="LoadCircle1 vertical_center"></div>
                                            <div className="LoadCircle2 vertical_center"></div>
                                            <div className="LoadCircle1 vertical_center"></div>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-4 ">
                                    <div className="col-3  vertical_center ">
                                        <p className="poppins_medium GrantInfoInputText mb-0">Private Key</p>
                                    </div>
                                    <div className="col-8">
                                        <input className="GrantInfoInput"></input>
                                    </div>

                                </div>
                                <div className="row mt-4 ">
                                    <div className="col-3  vertical_center ">
                                        <p className="poppins_medium GrantInfoInputText mb-0">Public Key Associate</p>
                                    </div>
                                    <div className="col-8">
                                        <input className="GrantInfoInput"></input>
                                    </div>

                                </div>
                                <div className="col-12 mt-5 text-right">
                                            <button className="Nextbtn ">Generate Smart Card</button>

                                        </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="ChartCard">
                            <p className="poppins_regular mb-0 GrantInfoHeading">Register a new Smart Card</p>

                            <div className="row mt-5 ">
                                    
                                    <div className="col-12">
                                        <input className="GrantInfoInput"></input>
                                        <button className="Searchbtn">Search</button>
                                    </div>

                                </div>
                               
                            </div>
                        </div>
                    </div>
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
