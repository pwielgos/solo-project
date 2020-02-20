import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoPage extends Component {
    state = {
        galleryList: [],
        editModeVisible: false,
        galleryName: '',
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_USER_GALLERIES',
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
        this.props.dispatch({
            type: 'GET_USER_GALLERIES',
        })
    }

    setEdit = (event) => {
        this.setState({
            ...this.state,
            galleryName: event.target.value
        })
        console.log('this.state.galleryname', this.state.galleryName);
    }

    saveEdit = (event, id) => {
        console.log('in save edit');
        this.props.dispatch({
            type: 'EDIT_GALLERY_NAME',
            payload: {
                galleryName: this.state.galleryName,
                gallery_id: id,
            }
        })
        console.log('this.state.gallery name', this.state.galleryName);
    }

    deleteGallery = (event, id) => {
        console.log('in delete gallery');
        this.props.dispatch({
            type: 'DELETE_GALLERY',
            payload: {
                galleryName: this.state.galleryName,
                gallery_id: id,
            }
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
                    {this.props.reduxState.gallery.map(gallery => {
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
                        {/* <button onClick={(event)=> this.saveEdit(event)}>Submit</button> */}
                    </header>
                    {this.props.reduxState.gallery.map(gallery => {
                        return <div className="container">
                            <textarea className="textArea"
                                onChange={(event) => this.setEdit(event, 'name')}>{gallery.gallery_name}</textarea>
                            <button onClick={(event) => this.saveEdit(event, gallery.id)}>Submit</button>
                            <button onClick={(event) => this.deleteGallery(event, gallery.id)}>Delete</button>
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