
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { validateUser, registerUser } from '../../store/actions/authActions';



import { Dropdown, Modal, DropdownButton } from 'react-bootstrap';

import { connect } from 'react-redux';

import Noty from 'noty';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            name: '',
            otp: '',
            verifiactionSend:false,
            errors: {},
            serverError: {},
            isSigningIn: false
        };

    }
    toggleverificatiomModal = () => {
        // this.setState({ VerificatiomModal: !this.state.VerificatiomModal })

        this.props.validateUser({
            // "To_Number": this.state.phone_num,
            "user_email": this.state.email,

        }).then((res) => {
            console.log(res)
            if (res.status) {
                this.setState({
                    verifiactionSend:true
                })
            } else {
                return
            }
        }).catch((err) => {
            this.setState({ isLoading: false })
        })

    }
    handleverificatiomClosemodal = (e) => {
        this.setState({ VerificatiomModal: !this.state.VerificatiomModal })

    }
    handleChange(event) {
        if (event.target.value == 1) {
            this.setState({ VerificatiomModal: !this.state.VerificatiomModal })
        }
    }
    componentDidMount() {




    }
    componentWillReceiveProps(nextProps) {

    }

    onRegister = (e) => {
        //e.preventDefault()
        this.props.registerUser({
            "Email": this.state.email,
            "Full_Name": this.state.name,
            "Password": this.state.password,
            "Password2": this.state.password2,
            "Otp": this.state.otp,
        }).then((res) => {
            this.setState({ isLoading: false })
            console.log(res)
            if (res.status) {
                this.props.history.push('/')

            } else {
                return
            }
        }).catch((err) => {
            this.setState({ isLoading: false })
            console.log(err)
            var validationError = {}
            var serverError = []
            if (err.hasOwnProperty('validation')) {
                err.validation.map(obj => {
                    if (obj.hasOwnProperty('param')) {
                        validationError[obj["param"]] = obj["msg"]
                    } else {
                        serverError = [...serverError, obj]
                    }
                });
                this.setState({ errors: validationError });
                this.setState({ serverError: serverError });
            } else {
                this.setState({ serverError: [{ "msg": "server not responding" }] })
            }
        })
    }

    renderServerError() {
        if (this.state.serverError != null && this.state.serverError.length > 0) {
            return (

                <div className="form-group alert alert-danger mb-0" role="alert" >
                    <strong className="pr-2">Oh snap!  {"  "}</strong>
                    {this.state.serverError[0].msg}

                </div>
            )
        }
    }

    onChange = (e) => {
        console.log(e.target.name)
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state
        return (
           <>
           </>


        )
    }

}

Register.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth,

});

const mapDispatchToProps = ({
    validateUser,
    registerUser,
})
export default connect(mapStateToProps, mapDispatchToProps)(Register);
