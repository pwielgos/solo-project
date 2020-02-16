import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class InfoPage extends Component {
    state = {
        galleryList: []
    }

    componentDidMount() {
        this.getUserGalleries();
    }

    getUserGalleries() {
        axios({
            method: `GET`, url: `/api/account`
        }).then((response) => {
            console.log('back from GET', response);
            this.setState({ galleryList: response.data });
        }).catch((err) => {
            console.log('err getting image', err);
            alert('Could not get gallery images at this time. Please try again.')
        })
    }

    handleGalleryClick = (selectedGallery) => {
        this.props.dispatch({ type: 'GET_GALLERY_IMAGES', payload: selectedGallery })
        this.props.history.push('/gallery')
    }

    render() {
        return (
            <div className="card">
                {this.state.galleryList.map(gallery => {
                    return <div className="container">
                        <h1 onClick=
                        //{this.handleGalleryClick}
                        {() => this.handleGalleryClick(gallery)}
                        >
                            {gallery.gallery_name}</h1>
                    </div>
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

export default connect(mapStateToProps)(InfoPage);
