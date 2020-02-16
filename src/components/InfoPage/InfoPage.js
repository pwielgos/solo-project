import React, { Component } from 'react';
import axios from 'axios';

class InfoPage extends Component {
    state = {
        galleryList: []
    }

    componentDidMount() {
        this.getImages();
    }

    getImages() {
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

    // handleGalleryClick=()=>{

    // }

    render() {
        return (
            <div className="card">
                {this.state.galleryList.map(gallery => {
                    return <div className="container">
                        <h1 
                        //onClick={handleGalleryClick}
                        >{gallery.gallery_name}</h1>
                    </div>
                })}
            </div>
        )
    }
}

export default InfoPage;
