import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AccountGallery.css';

class AccountGallery extends Component {
    takeUserHome = () => {
        this.props.history.push('/info')
    }

    handleImageClick = (selectedArtwork) => {
        this.props.dispatch({ type: 'GET_GALLERY_DETAIL', url: selectedArtwork })
        console.log('selected artwork', selectedArtwork);
        this.props.history.push('/detail')
    }

    render() {
        return (
            <div className="body">
                <header>
                    <button className="previous" onClick={this.takeUserHome}>Back</button>
                </header>
                {this.props.reduxState.gallery.map((artwork) => {
                    return (
                        <div className="flex-container">
                            <img
                                className="item"
                                src={`${artwork.image_url}/full/,150/0/default.jpg`}
                                onClick={() => this.handleImageClick(artwork)} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(AccountGallery);