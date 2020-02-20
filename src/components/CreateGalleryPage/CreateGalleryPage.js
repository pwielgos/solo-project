import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateGalleryPage extends Component {
    state = {
        newGallery: '',
    }

    takeBack = () =>{
        this.props.history.push('/details')
    }

    setGalleryName = (event) => {
        this.setState({
            newGallery: event.target.value
        })
        console.log('this.state.newGallery', this.state.newGallery);
    }

    createNewGallery = () => {
        this.props.dispatch({
            type: 'POST_NEW_GALLERY',
            payload: {
                url: this.props.reduxState.detail,
                newGallery: this.state.newGallery,
            }
        })
    }

    render() {
        return (
         <div>
             <header>
                 <button onClick={this.takeBack}>Back</button>
             </header>
            <h1>Create Gallery</h1>
            <p>Gallery Name</p>
            <textarea placeholder="add" onChange={(event) => this.setGalleryName(event, 'name')}></textarea>
            <button onClick={this.createNewGallery}>Create</button>
         </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(CreateGalleryPage);