import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {

    render() {
        return (
            <>
                <img src={`${this.props.artwork.thumbnail.url}/full/150,/0/default.jpg`} alt="" />
                <h1>{this.props.artwork.title}</h1>
                <h1>{this.props.artwork.artist_title}</h1>
            </>
        )
    }}

    const mapStateToProps = reduxState => {
        return {
            reduxState: reduxState
        }
    }

    export default connect(mapStateToProps)(SearchResults);