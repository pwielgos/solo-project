import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaAngleLeft } from "react-icons/fa";

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
            <div className="body">
                <header>
                    <FaAngleLeft onClick={this.takeToResults}/>
                </header>
                <img className="center" src={`${this.props.reduxState.detail}/full/,450/0/default.jpg`} />
                <br></br>
                <label for="galleries">Add to gallery:</label>
                <br></br>
                <select id="galleries" onChange={(event) => this.handleChange(event)}>
                    <option></option>
                    {this.props.reduxState.gallery.map(gallery => {
                        return (
                            <option value={gallery.id} >{gallery.gallery_name}</option>
                        )
                    })}
                    <option></option>
                    <option value="new gallery">Create new gallery +</option>
                </select>
                <button className="button" onClick={() => this.handleClick()}>Add</button>
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