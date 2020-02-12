import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
    render() {
        return (
            <ul>
                
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