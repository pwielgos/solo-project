import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountGallery extends Component {
    render() {
        return (
            <div>
                {this.props.reduxState.gallery.userGalleryReducer.map((artwork) => {
                    return (
                        <div className="flex-container">
                            <img src={`${artwork.image_url}/full/150,/0/default.jpg`}/>
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