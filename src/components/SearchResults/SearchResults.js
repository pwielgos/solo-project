import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
    render() {
        return (
            <ul>
                <img src={`${this.props.artwork.thumbnail.url}/full/150,/0/default.jpg`} />
            </ul>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(SearchResults);