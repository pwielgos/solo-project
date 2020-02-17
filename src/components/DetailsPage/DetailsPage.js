import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
    handleClick = (imageUrl) => {
        this.props.dispatch({ type: 'POST_IMAGE', payload: imageUrl })
    }

    takeToResults = () =>{
        this.props.history.push('/search')
    }

    render() {
        return (
            <div>
                <header>
                    <button onClick={this.takeToResults}>Back</button>
                </header>
                <img src={`${this.props.reduxState.detail}/full/full/0/default.jpg`} />
                
                {/* come back to this dropdown functionality later */}

                {/* <label for="images">Add to gallery</label> */}
                {/* <select id="galleries">
                    <option value="gallery1">Monet</option>
                    <option value="gallery2">photographs</option>
                    <option value="gallery3">cats</option>
                    <option value="newGallery">Create New Gallery +</option>
                </select> */}

                <button onClick={() => this.handleClick(this.props.reduxState.detail)}>Add</button>
                {/* {JSON.stringify(this.props.reduxState.detail.url)} */}
                {/* {JSON.stringify(this.props.reduxState.detail)} doesn't have anything useful besides the url */}
                {/* {JSON.stringify(this.props.reduxState.search)} */}
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