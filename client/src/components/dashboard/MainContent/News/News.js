import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getNews } from "../../../../actions/noticeAction";
import "./News.scss";

class News extends Component {
    constructor() {
        super()
        this.state = {
            news: [],
            notice: []
        }
    }
    render() {
        return(
            <div className="main-content">
                <div className="main-content__account-wrapper">
                    Hello
                </div>
            </div>
        )
    }
}
News.propTypes = {
    newNotice: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
    notice: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    news: state.news,
    notice: state.notice
})
export default connect(
    mapStateToProps,
    { getNews }
)(News);