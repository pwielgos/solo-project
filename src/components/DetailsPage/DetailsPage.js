import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
    state = {
        selectedGalleryId: '',
    }

    componentDidMount = () => {
        this.props.dispatch({
            type: 'GET_USER_GALLERIES',
        })
    }

    handleChange = (event) => {
        this.setState({
            selectedGalleryId: event.target.value
        })
    }

    handleClick = (event) => {
        if (this.state.selectedGalleryId === 'new gallery') {
            this.props.dispatch({
                type: 'POST_NEW_GALLERY',
                payload: {
                    url: this.props.reduxState.detail,
                }
            })
            this.props.history.push('/create')
        }
        else {
            this.props.dispatch({
                type: 'POST_IMAGE',
                payload: {
                    url: this.props.reduxState.detail,
                    gallery_id: this.state.selectedGalleryId
                }
            })
        }
        console.log('value equals', this.state.selectedGalleryId);
    }

    takeToResults = () => {
        this.props.history.push('/search')
    }

    render() {
        return (
            <div>
                <header>
                    <button onClick={this.takeToResults}>Back</button>
                </header>
                <img src={`${this.props.reduxState.detail}/full/550,/0/default.jpg`} />
                <label for="galleries">Add to gallery:</label>
                <select id="galleries" onChange={(event) => this.handleChange(event)}>
                    <option></option>
                    {this.props.reduxState.gallery.map(gallery => {
                        return (
                            <option value={gallery.id} >{gallery.gallery_name}</option>
                        )
                    })}
                    <option value="new gallery">Create new gallery +</option>
                </select>
                <button onClick={() => this.handleClick()}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(DetailsPage);