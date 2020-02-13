import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
    render() {
        return (
            <ul>
                <img src={`${this.props.reduxState.detail.url}/full/full/0/default.jpg`}/>
            </ul>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(DetailsPage);