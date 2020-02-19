import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
    componentDidMount = () => {
        this.props.dispatch({
            type: 'GET_USER_GALLERIES',
        })
    }

    handleClick = (imageUrl) => {
        this.props.dispatch({ type: 'POST_IMAGE', payload: imageUrl })
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
                <img src={`${this.props.reduxState.detail}/full/full/0/default.jpg`} />
                <label for="galleries">Add to gallery:</label>
                <select id="galleries">
                    {this.props.reduxState.gallery.map(gallery => {
                        return (
                            <option value={gallery.gallery_name}>{gallery.gallery_name}</option>
                        )
                    })}
                </select>
                <button onClick={() => this.handleClick(this.props.reduxState.detail)}>Add</button>
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