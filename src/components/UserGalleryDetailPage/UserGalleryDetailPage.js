import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserGalleryDetailPage extends Component {


    render() {
        return (
            <div>
                {JSON.stringify(this.props.reduxState)}
                <img src={`${this.props.reduxState.gallery.image_url}/full/full/0/default.jpg`} />
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(UserGalleryDetailPage);