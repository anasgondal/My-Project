
import React, { Component } from 'react';

import { connect } from 'react-redux';



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
            <div className="DashbordContainer">
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
