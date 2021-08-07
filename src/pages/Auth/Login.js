
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../../store/actions/authActions';


import BackgroundImg from '../../assets/images/Login/BackGroundImg.png'
import Logo from '../../assets/images/Login/Logo.png'


import { connect } from 'react-redux';

import Noty from 'noty';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            User_ID: '',
            Full_Name: '',
            Email: '',
            profile: {},
            errors: {},
            serverError: {},
            isSigningIn: false
        };

    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {

    }

    renderServerError() {
        if (this.state.serverError != null && this.state.serverError.length > 0) {
            return (

                <div className="form-group alert alert-danger" role="alert" >
                    <strong className="pr-2">Oh snap!  {"  "}</strong>
                    {this.state.serverError[0].msg}

                </div>
            )
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state
        return (
            <>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <img className="w-100 BackgroundImg" src={BackgroundImg} />
                        </div>
                        <div className="col-md-6 p-0 text-center">
                            <div className="LoginContainer">

                                <img src={Logo} />
                                <p className="poppins_medium  LoginHeading">Welcome to Salonhub.pk</p>
                                <p className="poppins_regular LoginText">Hope you are doing well</p>

                                <div className="inputContainer text-left">
                                    <p className="poppins_regular LoginText">Email Address / Phone Number <label className="red">*</label></p>
                                    <input className="LoginInput"></input>
                                    <p className="poppins_regular mt-4 LoginText">Password <label className="red">*</label></p>
                                    <input type="password" className="LoginInput"></input>
                                    <div className="text-right">
                                    <p className="poppins_regular mt-3 LoginText Hover">Forgot Your Password?</p>

                                    </div>
                                    <div className="text-center">
                                    <button className="Loginbtn"> Login </button>
                                    <p className="poppins_regular mt-3">Don't have an account? <b className="Hover">Create Account</b></p>

                                    </div>

                                </div>

                                <div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }

}

Login.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth,

});

const mapDispatchToProps = ({
    loginUser
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
