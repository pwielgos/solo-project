import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountGallery extends Component {
    takeUserHome = () => {
        this.props.history.push('/info')
    }

    handleImageClick = (selectedArtwork) => {
        this.props.dispatch({ type: 'GET_GALLERY_DETAIL', url: selectedArtwork })
        console.log('selected artwork', selectedArtwork);
        // this.props.dispatch({ type: 'GET_D', payload: selectedArtwork })
        this.props.history.push('/detail')
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.reduxState.gallery[0])}
                <header>
                    <button onClick={this.takeUserHome}>Back</button>
                    <button>Edit</button>
                </header>
                {this.props.reduxState.gallery.map((artwork) => {
                    console.log('artwork', artwork);
                    return (
                        <div className="flex-container">
                            <img 
                                src={`${artwork.image_url}/full/150,/0/default.jpg`}
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