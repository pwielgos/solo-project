import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class InfoPage extends Component {
    state = {
        galleryList: [],
        editModeVisible: false,
        galleryName: '',
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
            alert('Could not get gallery images at this time')
        })
    }

    handleGalleryClick = (selectedGallery) => {
        this.props.dispatch({ type: 'GET_GALLERY_IMAGES', payload: selectedGallery })
        this.props.history.push('/gallery')
    }

    toggleEdit = () => {
        this.setState({
            editModeVisible: !this.state.editModeVisible
        })
    }

    render() {
        let DOM;
        if (this.state.editModeVisible === false) {
            DOM = (
                <div className="card">
                    <header>
                        <button onClick={this.toggleEdit}>Edit</button>
                    </header>
                    {this.state.galleryList.map(gallery => {
                        return <div className="container">
                            <h1 onClick={() => this.handleGalleryClick(gallery)}>
                                {gallery.gallery_name}</h1>
                        </div>
                    })}
                </div>
            )
        } else {
            DOM = (
                <div className="card">
                    <header>
                        <button onClick={this.toggleEdit}>X</button>
                        <button>Submit</button>
                    </header>
                    {this.state.galleryList.map(gallery => {
                        return <div className="container">
                            <textarea>{gallery.gallery_name}</textarea>
                        </div>
                    })}
                </div>
            )
        }
        return (
            <div>
                {DOM}
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



// render() {
//     if (this.state.editModeVisible === false){

//     }



//     return (
//         <div className="card">
//             <header>
//                 <button onClick={this.toggleEdit}>Edit</button>
//             </header>
//             {this.state.galleryList.map(gallery => {
//                 return <div className="container">
//                     <h1 onClick={() => this.handleGalleryClick(gallery)}>
//                         {gallery.gallery_name}</h1>
//                 </div>
//             })}
//         </div>
//     )
// }
// }
