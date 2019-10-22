import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
//import { getSale } from "../../../../actions/salePartnersActions.js";
import "./SalePartners.scss";
class SalePartners extends Component {
    constructor() {
        super()
        this.state = {
            sales: []
        }
    }
    render() {
        return(
            <div className="main-content">
                <div className="main-content__account-wrapper">
                    <h1>Hello SalePartners</h1>
                </div>
            </div>
        )
    }    
}
SalePartners.propTypes = {
    counter: PropTypes.array.isRequired 
}
const mapStateToProps = state => ({
    sales: state.sales
})
export default connect(
    mapStateToProps,
    //{ getSale }
)(SalePartners)